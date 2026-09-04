# AGENTS.md · 跨工具硬约束

单一事实源分工：领域事实与阈值 → `CONTEXT.md`；人读入口 → `README.md`；架构决策 → `docs/adr/`。

## 项目事实

- 多源热点监控：关键词订阅 → 采集 → 时效过滤 → AI 相关性审核 → Socket.IO / 邮件交付。
- 非 monorepo：`server/`（Express 5 + Prisma 6/SQLite + Socket.IO + node-cron）、`client/`（React 19 + Vite 7）、`skills/hot-monitor/`（独立 Python 技能）。
- 维护者 `threetwoa`；上游 `liyupi/yupi-hot-monitor` 名称仅用于来源与许可证语境。

## 硬约束

1. 领域术语、来源阈值等只认 `CONTEXT.md`，本文件不重复维护。
2. AI 未配置必须保守降级，不得假装已审核；单来源失败不得终止整轮采集。
3. 禁止提交密钥、`.env*`、`node_modules/` 与本地生成物；不绕过目标平台访问规则。
4. 产品是研究与辅助判断工具，不对信息真实性作最终背书。
5. 改动最小化，只改该改的地方；跨模块决策先写 `docs/adr/`。
6. Conventional commits（feat / fix / chore / docs / refactor / test）。

## 验证门禁

| 层 | 命令 |
|---|---|
| server | `cd server && npm test && npm run build` |
| client | `cd client && npm install && npm run build` |
| 数据库 | `cd server && npx prisma generate && npx prisma db push`（SQLite `prisma/dev.db`，已 gitignore） |

- Windows 下路径含空格必须加引号；server / client 依赖与脚本各自独立，命令先进入对应目录。
- 无法完整验证时，交付须区分代码失败 / 依赖未装 / 外部服务未就绪。

## 关键路径

| 内容 | 路径 |
|---|---|
| 采集编排 | `server/src/jobs/hotspotChecker.ts` |
| 来源适配 | `server/src/services/`（twitter / search / chinaSearch / ai / email） |
| API 路由 | `server/src/routes/`（keywords / hotspots / notifications / settings） |
| 文档 | 本地运行 `docs/LOCAL_SETUP.md` · API 对接 `docs/API_INTEGRATION.md` · 需求 `docs/REQUIREMENTS.md` |
