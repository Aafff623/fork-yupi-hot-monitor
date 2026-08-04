# README Diagram Brief

日期：2026-08-05（细致 Review 补齐）  
产品：Threetwoa Hot Monitor（fork · threetwoa）

## 章节地图

| README 章节 | 配图 | 说明 |
|---|---|---|
| Header | `banner.png` | 3:1 页首横幅 |
| 功能矩阵 | `features.png` | 核心能力一览 |
| 主链路 | `workflow.png` | 订阅 → 采集 → AI → 交付 |
| 技术栈 | `tech-stack.png` | 分层技术选型 |
| 架构 | `architecture.png` | Client ↔ Server ↔ Adapters |
| 模块阅读顺序 | `structure.png` | 仓库地图（README 另有 Markdown 树直呈） |
| Preview | （省略独立 Gallery） | 单产品应用；用 README 预览壳 |
| Showcase | `showcase-*.png` | 真机截图待 Playwright 补齐 |

## 资产清单（契约文件名）

| 文件 | 状态 | 比例 / 方法 |
|---|---|---|
| `assets/images/readme/banner.png` | 已有 | 3:1 · 生图 |
| `assets/images/readme/features.png` (+ `.svg`) | 已有 | 16:9 · 生图 |
| `assets/images/readme/architecture.png` (+ `.svg`) | 已有 | 16:9 · 生图 |
| `assets/images/readme/tech-stack.png` (+ `.svg`) | 已有 | 16:9 · 生图 |
| `assets/images/readme/workflow.png` (+ `.svg`) | 已有 | 16:9 · 生图 |
| `assets/images/readme/structure.png` (+ `.svg`) | 已有 | 16:9 · 生图 |
| `assets/images/readme/preview-shell.png` | **省略** | 无 Preview 站可截 |
| `assets/images/readme/showcase-01.png` | 占位 | Playwright · 入口 / 主界面 |
| `assets/images/readme/showcase-02.png` | 占位 | Playwright · 核心流程 |
| `assets/images/readme/showcase-03.png` | 占位 | Playwright · 结果 / 交付 |

## 设计语言

深海墨蓝、精密网格与柔和玻璃材质，电光青为主强调，日落橙为项目强调色。大留白、清晰层级，兼顾 GitHub 深浅主题。

## 验收

- [x] 六契约图存在且 README 引用一致（细致轮 **不重生**）
- [x] Preview 独立小节已声明省略 Gallery + 预览壳端口 4317
- [x] Showcase 推荐路径 + 三槽位表
- [ ] Showcase 真机截图（待联调后 Playwright）
- [x] 目录树 / Key docs **直接呈现**（无 `<details>`）
