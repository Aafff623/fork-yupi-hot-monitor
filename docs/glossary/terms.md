# Project Glossary

| 术语 | 含义 |
|---|---|
| Origin | `Aafff623/fork-yupi-hot-monitor`，当前二开远程仓库 |
| Upstream | 原作者李鱼皮（liyupi）的原始项目远程，用于同步来源、历史与许可证信息 |
| Product root | `server/` Express·Prisma·采集；`client/` React 仪表盘；`skills/hot-monitor/` 独立技能 |
| Hotspot / 热点信号 | 经采集与 AI 审核后入库的可解释信号（非泛称「资讯」） |
| 直接提及 | 内容明确出现关键词；区别于「同领域」 |
| 保守降级 | AI Key 未配置时使用保守评分，系统仍可演示 |
| Main flow | 关键词 → 账号检测/查询扩展 → 多源并行 → 去重时效 → AI → 通知 |
| Source priority | Twitter > 微博 > B站 > HN > 搜狗 > Bing… |
| Handoff | 实施前后的任务合同，记录范围、验证、风险和回滚 |
| ADR | 影响长期维护的架构决策记录 |
| Preview 站 | 本仓不适用（单产品；无资产 Gallery） |
| Showcase | 产品主链路真机截图（`showcase-*.png`） |
| README 预览壳 | `preview-readme.html`，端口 4317 |
| Mock | 演示或降级数据；必须显式标注，不等同真实执行 |
| Secret | API Key、私钥、数据库口令等不得提交的运行凭据 |
