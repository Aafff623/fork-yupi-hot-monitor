# master · 2026-07 · Repository Rebrand

## Status
shipped

## Commits

| 日期 | 分支 | commit hash | 类型 | 主题 | 描述 |
|---|---|---|---|---|---|
| 2026-07 | master | 906bce3 | refactor | rebrand for threetwoa | 身份迁移、清理营销、建立协作资产入口 |
| 2026-07 | master | 5d46061 | docs | initialize repository experience | 初始化 README / 协作体验 |

## 做了什么

建立清晰的二开身份、移除营销干扰，让新维护者能通过 README 和上下文资产快速理解工程；保留 upstream、第三方事实与可同步边界。

## 关联

- ADR：`docs/adr/0001-maintain-upstream-compatible-rebrand.md`
- Handoff：`docs/outputs/handoff/readme-refresh/2026-07-18-master-rebrand-and-readme.md`

## 回滚

- revert 相关 rebrand commits；注意包名与文档身份需一并回滚
