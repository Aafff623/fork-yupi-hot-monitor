# Architecture Overview

## 系统定位

把多平台内容流转化为可订阅、可解释热点信号的监控系统。

## 主链路

```text
关键词 → 账号检测/查询扩展 → 多源并行采集 → 去重与时效过滤 → AI 审核 → 通知
```

## 模块边界

- server/ Express、Prisma 与采集任务
- client/ React 仪表盘
- skills/hot-monitor/ 独立技能
- docs/ 运维说明

## 技术栈

Node.js、TypeScript、Express、Prisma、Socket.IO、React、OpenRouter。

## 运行时依赖与失败模型

平台抓取受限流和页面结构影响；AI 不可用时必须保守降级；定时与手动任务可能并发；邮件只用于高优先级信号。外部依赖不可用时，系统应返回明确失败或采用文档化的保守降级；不得产生看似成功但不可审计的结果。

## 变更检查表

- 公共模型或接口是否影响多个模块？
- 配置键、扫描路径、Mapper namespace 或 SPI 文件是否同步？
- 新增外部调用是否有超时、限流和错误语义？
- 日志是否避开凭据与个人数据？
- README、CONTEXT 和 ADR 是否仍与实现一致？
