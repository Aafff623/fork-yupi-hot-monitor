# project-init Full · 五维细致评估（2026-08-05）

> 对照 `project-init` SKILL：Phase A / B 查缺补齐。  
> 事实源：仓内实文件 + Cursor canvas `fork-yupi-hot-monitor-analysis.canvas.tsx`。  
> **未提交**业务 WIP；六契约图既有 **勿重生**；Showcase 无真机图 → 仅占位（禁止文生图伪造 UI）。

## 策略（全局默认）

| 项 | 取值 |
|---|---|
| Issue tracker | 本地 `.scratch/<feature>/` markdown |
| Triage | 五种 canonical 标签 |
| CONTEXT 形态 | 单文档：`CONTEXT.md` + `docs/adr/`（无 CONTEXT-MAP） |
| Handoff | 仅场景 A（覆盖式快照） |
| 输出语气 | 已建 `docs/agents/voice.md`（含回答格式） |
| 产品层根 | `server/` · `client/` · `skills/hot-monitor/` |
| Preview 站 | **省略**（单产品 Web；无资产 Gallery） |
| 配图 | 六契约图沿用；`preview-shell` 省略；Showcase 占位待 Playwright |

---

## Agent 1 · 项目结构

| 路径 | 职责 |
|---|---|
| `client/src` | 仪表盘、筛选排序、API 与 Socket.IO 连接 |
| `server/src/routes` | keywords / hotspots / notifications / settings |
| `server/src/jobs/hotspotChecker.ts` | 采集与筛选编排核心 |
| `server/src/services` | search / chinaSearch / twitter / ai / email |
| `server/prisma` | Keyword / Hotspot / Notification / Setting |
| `skills/hot-monitor` | 可独立调用的热点搜索技能 |
| `docs/agents|adr|glossary|knowledge|outputs/` | 协作与产物 |
| `assets/images/readme/` | README 契约图 |
| 根入口 | `AGENTS.md` · `CLAUDE.md` · `CONTEXT.md` · `LANGUAGES.md` · `README.md` |
| `preview-readme.{html,css,js}` | README 本地预览壳 · 端口 **4317** |

入口：`server` → `npm run db:push` → `npm run dev`（:3001）；`client` → `npm run dev`（:5173）。详见 `docs/LOCAL_SETUP.md`。

---

## Agent 2 · 技术栈

| 层 | 技术 |
|---|---|
| 服务端 | Node.js ≥18 · TypeScript · Express 5 · Prisma 6 + SQLite |
| 实时 / 任务 | Socket.IO · node-cron · nodemailer |
| AI / 抓取 | @openrouter/sdk · axios · cheerio |
| 客户端 | React 19 · Vite 7 · TypeScript · Tailwind CSS 4 · Framer Motion |
| 测试 | Vitest（`aiRelevance` / `sortHotspots`） |

---

## Agent 3 · 资产现状

| 资产 | 加速版状态 | 细致版结论 |
|---|---|---|
| `.cursor/rules/` 五份 MDC | 已同步 | 与用户级 hash 一致 ✅ |
| 根 AGENTS/CLAUDE/CONTEXT/LANGUAGES | 已覆盖 | humanizer + Windows + answer-format 引用齐全 ✅ |
| `docs/agents/*` | 七件齐全 | 无 `language.md` / `context.md` ✅；voice 补「回答格式」 |
| `docs/outputs/{report,prd,handoff,commit-history}` | 已迁 | 有真实产物 ✅ |
| `docs/adr/0000` | **缺失** | **本轮补齐** |
| `assets/images/readme/` 六契约图 | 已有 | **勿重生** ✅ |
| `preview-shell.png` | 未建 | 单产品声明省略 Gallery → **可省略** |
| `showcase-*.png` | 仅槽位 | 无历史真机图 → **继续占位**（禁止 AI 伪造） |
| `preview-readme.*` | 规范壳 + `__PREVIEW_README__` | 端口 4317 ✅ |
| 空槽 `.gitkeep` + `assets/theme/` | 违规范 | **本轮删除** |
| `readme-diagram-brief` / `image-prompts` | 残片 | **本轮补全契约** |
| 五维报告 | 加速薄评估 | **本文件** |
| commit-history 错位文件 | `commit-history/2026-07-rebrand.md` | **迁入 `master/`** |
| `.gitignore` 未忽略 `.scratch/` | 缺口 | **本轮补齐** |
| `LICENSE` | 根目录缺失 | 【待确认】上游许可证声明仍见 README |

---

## Agent 4 · 业务领域

- **定位**：多源热点监控——关键词订阅 → 采集 → 时效过滤 → AI 相关性审核 → Socket.IO / 邮件交付。
- **主链路**：账号检测 → 查询扩展 → 多源并行 → 去重 → 7 天新鲜度 → 来源优先级 → AI → 持久化 → WS/邮件。
- **来源**：Twitter、微博、Bilibili、搜狗、Bing、Hacker News；优先级 Twitter > 微博 > B站 > HN > 搜狗 > Bing…。
- **降级**：单来源失败隔离；AI 未配置时保守评分仍可用。
- **边界**：研究与辅助判断工具；不对真实性作最终背书；须遵守平台访问规则。
- **维护者**：`threetwoa`；upstream `liyupi/yupi-hot-monitor`。
- **术语**：见 `LANGUAGES.md` + `docs/glossary/terms.md`。

---

## Agent 5 · 规范差距（本轮修复清单）

| # | 差距 | 动作 |
|---|---|---|
| 1 | 五维报告过薄 | 本文件细化 |
| 2 | brief / prompts 仅 banner 残片 | 补齐六契约 + Preview/Showcase 槽位说明 |
| 3 | 缺少 ADR-0000 | 新建采用 ADR 决策 |
| 4 | 空目录 `.gitkeep` + 旧 `assets/theme/` | 删除（按需再建 `ppt/` `speeches/`） |
| 5 | commit-history 文件未按分支归位 | `2026-07-rebrand.md` → `master/` |
| 6 | Showcase 无真机图 | 保持占位；**不**调用 MiniMax/GenerateImage |
| 7 | voice 缺「回答格式」 | 链到 `answer-format.mdc` |
| 8 | `.scratch/` 未进 `.gitignore` | 补齐 |
| 9 | CONTEXT 偏薄 | 按五维与 canvas 充实 |
| 10 | 业务 WIP | 工作区仅 `.scratch/` 备份，**不纳入提交** |

---

## Phase A / B 验收快照（细致后）

### Phase A

- [x] 五份 MDC · alwaysApply
- [x] 根入口 + humanizer / Windows / answer-format
- [x] agents 无 language/context 冗余
- [x] outputs / adr / knowledge / glossary
- [x] assets README；空 gitkeep 清除
- [x] ADR-0000
- [x] Full 调研填充 CONTEXT（本报告 + canvas）

### Phase B

- [x] README 结构 · Preview（声明省略 Gallery）· Showcase 占位
- [x] 六契约图存在且引用一致（不重生）
- [x] brief + image-prompts 契约完整
- [x] preview-readme 壳绑定端口 4317
- [ ] Gate：等人 Review 后再开业务 theme
- [ ] Showcase 真机全链路截图（待 Playwright）

## 遗留

1. Gate 后才开大规模业务 theme。  
2. 根 `LICENSE` 文件缺失【待确认】——README 已声明遵循上游与第三方条款。  
3. Showcase 真机图待本地联调后 Playwright 截取。  
4. 抓取脆弱性 / 任务并发 / SQLite 扩展性见 canvas 风险表，另开 theme。
