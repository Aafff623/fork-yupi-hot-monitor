# Threetwoa Hot Monitor · Context

> 单一事实源：定位、采集主链路、来源阈值、双端结构、领域约束与 backlog。依据 2026-09 仓库只读勘察整理。

## 一句话定位

多源热点监控：关键词订阅 → 采集 → 时效过滤 → AI 相关性审核 → Socket.IO / 邮件交付。研究与辅助判断工具，不对信息真实性作最终背书。

## 采集主链路

```text
关键词 → 账号检测 / 查询扩展 → 六源并行采集（Promise.allSettled，单源失败不拖垮整轮）
  → URL 去重 → 7 天时效过滤 → 来源优先级排序 → 配额分配
  → AI 相关性审核 → 按 url+source upsert 持久化 → Socket.IO 房间推送 / high·urgent 邮件
```

- 定时任务 `*/30 * * * *` 与手动 `POST /api/check-hotspots` 由进程内运行锁互斥，重叠时跳过本轮。
- 配额：Twitter 最多 15 条，其余来源合计 10 条。
- AI 降级：`OPENROUTER_API_KEY` 未配置时保守评分（文本命中扩展词 relevance=50，否则 20，importance=low），不假装已审核。

## 来源优先级与阈值

优先级（高→低）：Twitter > 微博 > B站 > HackerNews > 搜狗 > Bing > Google > DuckDuckGo。

| 项 | 阈值 / 说明 |
|---|---|
| Twitter 质量 | likes≥10、RT≥5、views≥500、粉丝≥100，排除回复推文；蓝V 认证阈值减半；Top 2 页 + Latest 1 页 |
| 微博热搜 | 话题与查询词做分词级双向包含匹配，token 长度 ≥2；无匹配返回空，不产出无关热点 |
| 相关性门槛 | relevance<50 过滤；未直接提及关键词且 relevance<65 过滤 |

## 双端结构

| 路径 | 职责 |
|---|---|
| `client/src` | 仪表盘、筛选排序、REST + Socket.IO 订阅 |
| `server/src/routes` | keywords / hotspots / notifications / settings |
| `server/src/jobs/hotspotChecker.ts` | 采集与筛选编排核心 |
| `server/src/services` | twitter / search(Bing·HN) / chinaSearch(搜狗·B站·微博) / ai / email |
| `server/src/utils/sortHotspots.ts` | 排序纯函数；`client/src/utils/sortHotspots.ts` 为同步副本 |
| `server/prisma` | Keyword · Hotspot(`@@unique([url, source])`) · Notification · Setting |
| `skills/hot-monitor` | 可独立调用的热点搜索技能（Python） |

## 技术栈

| 端 | 技术 |
|---|---|
| server | Node.js ≥18 · TypeScript · Express 5 · Prisma 6 + SQLite · Socket.IO 4 · node-cron · nodemailer · @openrouter/sdk · axios · cheerio · Vitest |
| client | React 19 · Vite 7 · TypeScript · Tailwind CSS 4 · Framer Motion · lucide-react · socket.io-client |

运行：`server/.env`（`DATABASE_URL` 必填；`OPENROUTER_API_KEY` / `TWITTER_API_KEY` / SMTP 可选；`CLIENT_URL` 缺省 `http://localhost:5173`，CORS 与 Socket.IO 白名单共用）→ `npx prisma generate && npx prisma db push` → `npm run dev`（:3001）；client `npm run dev`（:5173）。详见 `docs/LOCAL_SETUP.md`。

## 领域约束

1. AI 未配置必须保守降级，不得假装已审核。
2. 单来源失败不得终止整轮其他来源 / 关键词采集。
3. 身份标识使用 `threetwoa`；上游 `liyupi/yupi-hot-monitor` 仅用于来源与许可证语境。
4. 不提交密钥与 `.env*`；不绕过目标平台访问规则。
5. 邮件是高打扰渠道，仅 high / urgent 发送。

## 已知 backlog

- 搜狗 `/link?url=` 跳转链接直接入库，未解析真实 URL。
- 无 `publishedAt` 的结果不受时效过滤约束，可能反复进入 AI 审核。
- 无数据保留策略，SQLite 单文件随时间膨胀。
- `sortHotspots` 前后端双份副本需人工同步。
- AI 模型名（`deepseek/deepseek-v3.2`）与各阈值硬编码，未配置化。

## 待确认项

- README 结尾引用「仓库许可见 LICENSE」，但仓库根目录无 LICENSE 文件；需核实上游许可后补充，不要伪造。
