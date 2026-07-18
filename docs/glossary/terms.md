# Project Glossary

| 术语 | 含义 |
|---|---|
| Origin | `Aafff623/fork-yupi-hot-monitor`，当前二开远程仓库 |
| Upstream | 原始项目远程，仅用于同步来源与历史 |
| Product root | server/ Express、Prisma 与采集任务；client/ React 仪表盘；skills/hot-monitor/ 独立技能；docs/ 运维说明 |
| Main flow | 关键词 → 账号检测/查询扩展 → 多源并行采集 → 去重与时效过滤 → AI 审核 → 通知 |
| Handoff | 实施前后的任务合同，记录范围、验证、风险和回滚 |
| ADR | 影响长期维护的架构决策记录 |
| Mock | 演示或降级数据；必须显式标注，不等同真实执行 |
| Secret | API Key、私钥、数据库口令等不得提交的运行凭据 |
