# Languages · 共享用词入口

> Agent 输出必须使用本文件与 `CONTEXT.md` 对齐的词汇。  
> **禁止**再维护 `docs/agents/language.md`。

## 文档 & Prose

| 场景 | 语言 |
|------|------|
| README、Issue、PR、commit body、用户回复 | 中文为主，技术术语保留英文 |
| 代码注释、标识符、配置键名 | 英文（或沿用仓库既有风格） |
| `docs/agents/` 约定文档标题 | 英文文件名 |

## 领域必用词

| 必须用 | 避免 |
|--------|------|
| 热点信号 / Hotspot | 资讯、推文（泛称可，交付文档用热点信号） |
| 直接提及 | 强相关（须区分同领域） |
| 保守降级 | AI 关闭、跳过审核 |
| Showcase | Preview 站（本仓无资产 Gallery） |

完整表 → `docs/glossary/` + `CONTEXT.md`。

## Issue / 任务流词汇

| 词 | 含义 |
|----|------|
| `.scratch/<feature>/` | 本地 Issue / PRD 目录 |
| `needs-triage` 等五标签 | 见 `docs/agents/triage-labels.md` |
| `docs/outputs/report/` | 调研分析（可选） |
| `docs/outputs/prd/` | 产品需求 |
| `docs/outputs/handoff/` | 交接快照（覆盖式） |
| `docs/outputs/commit-history/` | 分支攒批摘要 |
| Preview 站 | **本仓不适用**（单产品；无资产 Gallery） |
| Showcase | 产品主链路实机截图（`showcase-*.png`，可占位） |
| README 预览壳 | `preview-readme.html`，端口 4317 |
