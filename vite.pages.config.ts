import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/postcss';
import { fileURLToPath } from 'node:url';
import { resolve } from 'node:path';
import { mkdirSync, writeFileSync } from 'node:fs';

const project = fileURLToPath(new URL('.', import.meta.url));
const root = resolve(project, 'github-pages');
const basePath = process.env.PAGES_BASE_PATH ?? '/demo2';
const base = `${basePath.replace(/\/$/, '')}/`;
const routes = ['', 'assets', 'checkup', 'simulation', 'assistant'];
const names = ['家庭财务首页', '家庭资产全景', '家庭财务体检', '提前还贷情景模拟', '财务解释助手'];

// Five genuine HTML entry points let GitHub Pages handle direct links and refreshes.
const input = routes.map((route, index) => {
  const dir = resolve(root, route);
  mkdirSync(dir, { recursive: true });
  const entry = resolve(dir, 'index.html');
  writeFileSync(entry, `<!doctype html>
<html lang="zh-CN"><head><meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<meta name="description" content="家底家庭财务工具，模拟数据 / 原型演示。" />
<link rel="icon" href="${base}favicon.svg" />
<title>${names[index]} · 家底</title></head><body>
<div id="root" data-page="${index}"></div>
<script type="module" src="${route ? '../' : './'}main.tsx"></script>
</body></html>`, 'utf8');
  return entry;
});

export default defineConfig({
  root,
  base,
  publicDir: resolve(project, 'public'),
  plugins: [react()],
  css: { postcss: { plugins: [tailwindcss()] } },
  resolve: {
    alias: {
      'next/link': resolve(root, 'link.tsx'),
      '@': project,
    },
  },
  build: {
    outDir: resolve(project, 'dist/github-pages'),
    emptyOutDir: true,
    rolldownOptions: { input },
  },
});
