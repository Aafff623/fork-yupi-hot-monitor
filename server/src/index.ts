import express from 'express';
import cors from 'cors';
import { createServer } from 'http';
import { Server } from 'socket.io';
import dotenv from 'dotenv';
import cron from 'node-cron';

import { prisma } from './db.js';
import keywordsRouter from './routes/keywords.js';
import hotspotsRouter from './routes/hotspots.js';
import settingsRouter from './routes/settings.js';
import notificationsRouter from './routes/notifications.js';
import { runHotspotCheck } from './jobs/hotspotChecker.js';

dotenv.config();

const app = express();
const httpServer = createServer(app);

// API 跨域只放行前端来源；CLIENT_URL 支持逗号分隔多个，与 Socket.IO 共用同一约定。
const clientOrigins = (process.env.CLIENT_URL || 'http://localhost:5173')
  .split(',')
  .map(origin => origin.trim())
  .filter(Boolean);

const io = new Server(httpServer, {
  cors: {
    origin: clientOrigins,
    methods: ['GET', 'POST']
  }
});

// API 与 Socket.IO 共用同一个 HTTP 服务，避免部署时维护两套端口和跨域策略。
app.use(cors({ origin: clientOrigins }));
app.use(express.json());

// Routes
app.use('/api/keywords', keywordsRouter);
app.use('/api/hotspots', hotspotsRouter);
app.use('/api/settings', settingsRouter);
app.use('/api/notifications', notificationsRouter);

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

/**
 * 手动触发一次完整采集任务。
 *
 * 该端点会等待任务结束再响应，适合管理端操作和调试；与定时任务由进程内
 * 运行锁互斥，重叠时立即返回 skipped，不会造成重复采集。生产环境应在
 * 网关层增加鉴权与超时保护。
 */
app.post('/api/check-hotspots', async (req, res) => {
  try {
    const ran = await runHotspotCheck(io);
    res.json({
      message: ran ? 'Hotspot check completed' : 'Hotspot check skipped: already running'
    });
  } catch (error) {
    res.status(500).json({ error: 'Failed to run hotspot check' });
  }
});

// 每个关键词映射为独立房间，使客户端只接收自己订阅的增量热点。
io.on('connection', (socket) => {
  console.log('Client connected:', socket.id);

  socket.on('subscribe', (keywords: string[]) => {
    keywords.forEach(kw => socket.join(`keyword:${kw}`));
    console.log(`Socket ${socket.id} subscribed to:`, keywords);
  });

  socket.on('unsubscribe', (keywords: string[]) => {
    keywords.forEach(kw => socket.leave(`keyword:${kw}`));
  });

  socket.on('disconnect', () => {
    console.log('Client disconnected:', socket.id);
  });
});

// 定时任务失败只记录日志，不终止服务；下一个调度周期仍可继续执行。
cron.schedule('*/30 * * * *', async () => {
  console.log('🔄 Running scheduled hotspot check...');
  try {
    await runHotspotCheck(io);
    console.log('✅ Scheduled hotspot check completed');
  } catch (error) {
    console.error('❌ Scheduled hotspot check failed:', error);
  }
});

// Export for use in other modules
export { io };

const PORT = process.env.PORT || 3001;

httpServer.listen(PORT, () => {
  console.log(`
  🔥 热点监控服务启动成功!
  📡 Server running on http://localhost:${PORT}
  🔌 WebSocket ready
  ⏰ Hotspot check scheduled every 30 minutes
  `);
});

// 关闭前释放 Prisma 连接，避免开发热重载和容器滚动更新遗留连接。
process.on('SIGINT', async () => {
  console.log('Shutting down...');
  await prisma.$disconnect();
  process.exit(0);
});
