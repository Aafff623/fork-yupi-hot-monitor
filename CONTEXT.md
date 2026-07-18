# Threetwoa Hot Monitor · Context

## 一句话定位

把多平台内容流转化为可订阅、可解释热点信号的监控系统。

## 产品主链路

关键词 → 账号检测/查询扩展 → 多源并行采集 → 去重与时效过滤 → AI 审核 → 通知。

## 代码边界

server/ Express、Prisma 与采集任务；client/ React 仪表盘；skills/hot-monitor/ 独立技能；docs/ 运维说明。

## 技术与运行环境

Node.js、TypeScript、Express、Prisma、Socket.IO、React、OpenRouter。

## 当前事实

- 当前二开维护者为 `threetwoa`。
- `origin` 指向增强仓，`upstream` 指向原始项目。
- 最近二开提交 `906bce3` 完成身份迁移、营销清理、核心注释和 README 重构。
- 上游里程碑：c0ffee0：加入独立 Agent Skill；a4fd062：加入关键词感知、查询扩展和预匹配。

## 关键风险

平台抓取受限流和页面结构影响；AI 不可用时必须保守降级；定时与手动任务可能并发；邮件只用于高优先级信号。

## 推荐阅读顺序

1. README：产品定位与启动入口。
2. 本文件与 `docs/agents/domain.md`：边界和术语。
3. 入口模块与主链路服务。
4. 配置、持久化、测试和部署文件。
5. `docs/adr/` 与 `docs/output/handoff/`：决策和已交付变更。
