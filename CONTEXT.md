# Threetwoa Hot Monitor · Context

> 单一事实源：领域术语、硬约束、技术栈。分析来源：Cursor 画布 `fork-yupi-hot-monitor-analysis` + 仓库只读勘察。  
> 旧稿备份：`.scratch/context-backup-20260804.md`

## 一句话定位

多源热点监控：关键词订阅 → 采集 → 时效过滤 → AI 相关性审核 → Socket.IO / 邮件交付。

## 产品主链路

关键词 → 账号检测 / 查询扩展 → 多源并行采集 → URL 去重 → 7 天时效 → 来源优先级 → AI 审核 → 持久化 → WebSocket / 高优邮件。

## 代码边界

| 路径 | 职责 |
|---|---|
| `client/src` | 仪表盘、筛选排序、REST API 与 Socket.IO |
| `server/src/routes` | keywords / hotspots / notifications / settings |
| `server/src/jobs/hotspotChecker.ts` | 采集与筛选编排核心 |
| `server/src/services` | search / chinaSearch / twitter / ai / email |
| `server/prisma` | Keyword · Hotspot · Notification · Setting |
| `skills/hot-monitor` | 可独立调用的热点搜索技能（Python 脚本） |
| `docs/` | LOCAL_SETUP · API_INTEGRATION · REQUIREMENTS · ADR · outputs |

产品层根：`server/` · `client/` · `skills/hot-monitor/`。

## 技术与运行环境

- **服务端**：Node.js ≥18 · TypeScript · Express 5 · Prisma 6 + SQLite · Socket.IO · node-cron · nodemailer · @openrouter/sdk · axios · cheerio · Vitest
- **客户端**：React 19 · Vite 7 · TypeScript · Tailwind CSS 4 · Framer Motion · lucide-react · socket.io-client
- **运行**：`server/.env`（`OPENROUTER_API_KEY` 可选；Twitter / SMTP 可选）→ `npm run db:push` → `npm run dev`（:3001）；`client` → `npm run dev`（:5173）
- **验证**：server `npm test && npm run build`；client `npm run build`

## 核心实体

| 实体 | 要点 |
|---|---|
| Keyword | 订阅词、启停、分类 |
| Hotspot | 来源、相关度、重要性、互动指标、作者；`(url, source)` 唯一防重 |
| Notification / Setting | 通知与运行配置 |

来源优先级（高→低）：Twitter > 微博 > B站 > HN > 搜狗 > Bing…。

## 仓库结构（摘要）

```text
fork-yupi-hot-monitor/
├── server/                       # Express + Prisma + jobs
├── client/                       # React 仪表盘
├── skills/hot-monitor/           # 可独立调用 Skill
├── docs/agents|adr|glossary|knowledge|outputs/
├── assets/images/readme/
├── AGENTS.md · CLAUDE.md · CONTEXT.md · LANGUAGES.md
└── preview-readme.{html,css,js}  # 端口 4317
```

## 当前事实

- 维护者：`threetwoa`；上游：[liyupi/yupi-hot-monitor](https://github.com/liyupi/yupi-hot-monitor)
- `origin` → 增强仓；`upstream` → 原始项目
- Agent 资产：根四件套 + `docs/agents` 最小集 + `docs/outputs` + `assets/` + 五份 `.cursor/rules/*.mdc`
- README 六契约图已在 `assets/images/readme/`；`preview-shell.png` 因无 Preview 站而省略；`showcase-*.png` 占位待 Playwright
- Issue tracker：本地 `.scratch/<feature>/`；单 CONTEXT + `docs/adr/`
- README 预览壳端口 **4317**；无独立 Preview Gallery
- 根 `LICENSE` 文件【待确认】缺失；README 已声明上游与第三方条款

## 硬约束

1. AI 未配置必须保守降级，不得假装已审核。
2. 单来源失败不得终止整轮其他来源 / 关键词采集。
3. 身份标识使用 `threetwoa`；上游名称仅用于来源与许可证。
4. 不提交密钥与 `.env*`；不绕过目标平台访问规则。
5. 不对信息真实性作最终背书——产品是研究与辅助判断工具。

## 关键风险

| 优先级 | 项 | 说明 |
|---|---|---|
| 高 | 抓取脆弱性 | 页面结构 / 限流变化会断源；适配器需监控 |
| 高 | 合规与 ToS | 优先官方 API、频率限制 |
| 中 | 任务并发 | 定时与手动检查可能重叠【待确认】锁/队列策略 |
| 中 | SQLite 扩展性 | 演示友好；多用户高写入需迁 PostgreSQL |
| 低 | 测试覆盖 | 已有 aiRelevance / sortHotspots；可补适配器契约测试 |

## 推荐阅读顺序

1. `README.md`：产品定位与启动入口
2. 本文件与 `docs/agents/domain.md`：边界和术语
3. `server/src/types.ts` → `jobs/hotspotChecker.ts` → `services/ai.ts` → search / chinaSearch
4. `server/src/routes` → `client/src/services` / `App.tsx`
5. `docs/adr/` 与 `docs/outputs/handoff/`：决策和已交付变更
