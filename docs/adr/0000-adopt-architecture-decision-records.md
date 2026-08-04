# ADR-0000：采用 Architecture Decision Records

- 状态：Accepted
- 日期：2026-08-05
- 决策者：threetwoa

## 背景

二开仓需持续同步 upstream，并在采集适配器、AI 降级、通知通道与数据模型上做本地决策。口头约定易丢失，README 不适合承载决策链。

## 决策

1. 在 `docs/adr/` 使用顺序编号 ADR（`000N-kebab-title.md`）。
2. 跨模块协议、公共 API、数据模型、采集/通知拓扑、部署形态变更必须先 ADR 再实施。
3. ADR 记录背景、决策、后果；状态用 Proposed / Accepted / Superseded / Deprecated。
4. 领域事实仍以根 `CONTEXT.md` 为唯一入口；ADR 只记决策，不复制术语表。

## 后果

优点：决策可追溯、upstream 合并时有对照。代价：小改也需判断是否触及 ADR 门槛（见 `AGENTS.md` 变更边界）。
