# Handoff · Rebrand and README

- 状态：completed
- 完成日期：2026-07-18
- 提交：`906bce3`
- 维护者：threetwoa

## 范围

身份/包名迁移、营销清理、核心注释重写、README 信息架构、初始化资产补全。

## 实施边界

没有主动改变产品主流程；第三方许可证、依赖坐标和 upstream 来源保留。需要外部服务的验证不伪造通过。

## 验证

`server: npm test && npm run build；client: npm run build`

## 风险

平台抓取受限流和页面结构影响；AI 不可用时必须保守降级；定时与手动任务可能并发；邮件只用于高优先级信号。

## 回滚

以提交 `906bce3` 为原子边界回退身份迁移；若仅回退文档，应确保包名和 README 不重新产生冲突身份。
