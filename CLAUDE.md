# CLAUDE.md

> **Output Style**: `humanizer-output-style` — see `~/.claude/skills/humanizer-output-style/SKILL.md`  
> **Windows / Answer Format / Commit History**: `.cursor/rules/*.mdc` · 跨工具门禁见根 `AGENTS.md`

本文件是 Claude Code 的维护协议与三层加载说明；硬约束以 `AGENTS.md` 为准，领域事实以 `CONTEXT.md` 为准。

## 项目概述

多源热点监控：关键词订阅 → 采集 → 时效过滤 → AI 相关性审核 → Socket.IO / 邮件交付。

产品层根：server/ Express·Prisma·采集；client/ React 仪表盘；skills/hot-monitor/ 独立技能

## 开发验证

server: `npm test && npm run build`；client: `npm run build`

README 本地预览壳：

```bash
python -m http.server 4317
# 打开 http://127.0.0.1:4317/preview-readme.html
```

## 三层加载

1. `AGENTS.md` + `.cursor/rules/*.mdc`（硬约束）
2. `CONTEXT.md` + `LANGUAGES.md`（领域与用词）
3. `docs/agents/*` 与 `docs/outputs/{report,prd,handoff}/`（任务流与产物）

## 偏好归档

- 维护者标识：`threetwoa`；上游仅在来源与许可证语境保留。
- 优先小步修改；跨模块决策先写 ADR。
- 不提交密钥与 `.env*`。
- 偏好细节可追加到本文件末尾；勿与 `AGENTS.md` 矛盾。