# Threetwoa Hot Monitor · Context

> Full 五维核对（结构 / 技术栈 / 资产 / 领域 / 规范差距）基于 canvas `fork-yupi-hot-monitor-analysis` 与仓库实况；不确定项标【待确认】。

## 一句话定位

多源热点监控：关键词订阅 → 采集 → 时效过滤 → AI 相关性审核 → Socket.IO / 邮件交付。

## 产品主链路

关键词 → 账号检测/查询扩展 → 多源并行采集 → 去重与时效 → AI 审核 → 通知

## 代码边界

server/ Express·Prisma·采集；client/ React 仪表盘；skills/hot-monitor/ 独立技能

## 技术与运行环境

Node.js ≥18 / TypeScript / Express 5 / Prisma 6 + SQLite / Socket.IO / OpenRouter / React + Vite / Vitest

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

- 当前二开维护者为 `threetwoa`。
- `origin` 指向增强仓，`upstream` 指向原始上游。
- Agent 资产：根四件套 + `docs/agents` 最小集 + `docs/outputs` + `assets/` + 五份 `.cursor/rules/*.mdc`。
- README 契约图已在 `assets/images/readme/`；`preview-shell.png` / `showcase-*.png` 加速模式跳过生图，仅占位。
- Issue tracker：本地 `.scratch/<feature>/`；单 CONTEXT + `docs/adr/`。

## 关键风险

平台抓取受限流；AI 未配置须保守降级；定时与手动任务可能并发；邮件仅高优先级

## 推荐阅读顺序

1. `README.md`：产品定位与启动入口
2. 本文件与 `docs/agents/domain.md`：边界和术语
3. 入口模块与主链路服务
4. 配置、持久化、测试和部署文件
5. `docs/adr/` 与 `docs/outputs/handoff/`：决策和已交付变更