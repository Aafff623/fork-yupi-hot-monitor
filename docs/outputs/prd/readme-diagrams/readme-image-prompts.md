# README Image Prompts

> 细致 Review（2026-08-05）：六契约图 **已落盘，禁止重生**。  
> 本文件保留可投喂 Prompt，供日后重绘或变体；Showcase / Preview-shell **不走文生图**。

## §0 全局规范

| 项 | 值 |
|---|---|
| 定位 | 多源热点监控：关键词 → 采集 → AI 审核 → 实时/邮件交付 |
| 视觉总调 | 深海墨蓝底、精密网格、玻璃质感、电光青 + 日落橙强调 |
| 禁止 | 水印、假 Logo、密集小字、无关人物、伪造真实 App UI 冒充 Showcase |
| 命名契约 | `banner` / `features` / `architecture` / `tech-stack` / `workflow` / `structure` |
| 终稿目录 | `assets/images/readme/` |

### 给 GPT / MiniMax 的系统指令模板

```text
You are generating GitHub README diagram assets for “Threetwoa Hot Monitor”.
Style: deep navy, modular grid, glass panels, cyan + sunset-orange accents.
No watermarks, no tiny unreadable text, no fake brand logos, no photorealistic people.
Output clean infographic / hero art suitable for dark and light GitHub themes.
```

---

## banner.png（已有 · 勿重生）

- **一句话**：3:1 页首横幅，信号流汇聚为主题。
- **英文 Prompt**：Premium 3:1 GitHub README hero banner for “Threetwoa Hot Monitor”, visual metaphor for multi-source hotspot monitoring for creators, deep navy background, precise modular grid, luminous cyan with sunset-orange accent, elegant glass and soft volumetric light, generous negative space, high-end developer tool branding, crisp, balanced, no watermark, no tiny text, no logos, no people.

## features.png（已有 · 勿重生）

- **一句话**：六大能力卡片——订阅、多源、清洗、AI、实时、邮件。
- **英文 Prompt**：16:9 infographic of six feature panels for Hot Monitor: keyword subscription, multi-source crawl, signal cleaning, AI relevance gate, Socket.IO realtime, high-priority email; deep navy glass cards, cyan icons, sunset-orange highlights, readable short English labels only, no watermark.

## architecture.png（已有 · 勿重生）

- **一句话**：React Client ↔ Express Server ↔ Prisma / Search / AI / Cron。
- **英文 Prompt**：16:9 client-server architecture diagram: React Client left, Express Server center with Prisma SQLite, Search Adapters, AI Analysis, Scheduled Checker; arrows for REST + Socket.IO; deep navy grid, cyan connectors, no watermark.

## tech-stack.png（已有 · 勿重生）

- **一句话**：分层技术栈（Client / Server / Data / AI）。
- **英文 Prompt**：16:9 layered tech-stack poster: Client React Vite Tailwind; Server Node Express Socket.IO cron; Data Prisma SQLite; AI OpenRouter; clean layers, deep navy, cyan dividers, short labels, no watermark.

## workflow.png（已有 · 勿重生）

- **一句话**：关键词 → 扩展 → 多源 → 去重时效 → AI → 通知。
- **英文 Prompt**：16:9 horizontal workflow: Keywords → Account Detection → Query Expansion → Multi-source Search → Deduplicate → Freshness → AI Gate → Persist → WebSocket/Email; decision nodes visible, deep navy, cyan flow arrows, sunset-orange on AI gate, no watermark.

## structure.png（已有 · 勿重生）

- **一句话**：仓库地图 server / client / skills / docs / assets。
- **英文 Prompt**：16:9 repository structure map showing server, client, skills/hot-monitor, docs, assets/images/readme; tree-like panels, deep navy, cyan folder accents, minimal labels, no watermark.

## preview-shell.png（省略）

本仓单产品应用，**不建** Preview Gallery，故无壳图。README 已声明；本地排版用 `preview-readme.html`（端口 4317）。

## showcase-*.png（占位 · 禁止文生图）

| 文件 | 内容 | 方法 |
|---|---|---|
| `showcase-01.png` | 入口 / 主界面 | Playwright 真机 |
| `showcase-02.png` | 核心流程（关键词 + 列表） | Playwright 真机 |
| `showcase-03.png` | 结果 / 实时通知或邮件触发态 | Playwright 真机 |

禁止用 MiniMax / GenerateImage 伪造产品 UI。
