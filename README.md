# demo2 · 家底家庭财务 Demo

在线演示：https://keke205.github.io/demo2/

面向普通家庭的五页财务原型：资产总览 → 资产全景 → 财务体检 → 提前还贷情景模拟 → 财务解释助手。

全部使用王先生家庭的固定模拟数据，不接入真实 AI、OCR 或银行接口，不构成投资、贷款或保险建议。

## 本地启动

需要 Node.js 24。

```sh
npm ci
npm run dev
```

打开终端显示的 localhost 地址。

## GitHub Pages 发布

仓库 Settings → Pages → Build and deployment → Source 选择 **GitHub Actions**。

每次推送到 main，工作流会自动安装依赖、生成 5 个静态 HTML 入口，并部署到 GitHub Pages。运行结果在仓库 Actions 标签页查看。

项目路径由 configure-pages 自动传入；当前地址前缀为 `/demo2/`。页面链接和资源路径均包含此前缀，子页面支持直接访问和刷新。

```sh
npm run build:pages
```

静态产物位于 `dist/github-pages`。此目录包含运行所需的 HTML、CSS、JavaScript 和图标，不需要 Node.js 服务。

```sh
npx vite preview --config vite.pages.config.ts --port 4173
```

本地访问 http://localhost:4173/demo2/ 检查发布版本。

## 更新网页

修改代码后提交并推送：

```sh
git add .
git commit -m "Update demo"
git push github main
```

如果自行从 GitHub 克隆仓库，远程名默认为 origin，则使用 `git push origin main`。

## 目录说明

- `app/dashboard.tsx`：共享的五页内容与预设问答。
- `app/globals.css`：视觉样式与窄屏适配。
- `github-pages/`：静态网站入口和适配普通链接的组件。
- `vite.pages.config.ts`：静态多页构建；HTML 入口在构建时生成。
- `.github/workflows/deploy-pages.yml`：自动发布。
- `npm run build`：保留原 Sites/Cloudflare 构建方式，与 Pages 构建独立。

## 验证

已验证 5 页直接打开、刷新、完整跳转和 4 个预设问答；静态测试无脚本或资源请求错误。`npx tsc --noEmit` 检查通过。
