---
description: Cloudflare Pages 部署流程 (GitHub)
---

### Cloudflare Pages 部署流程

1. **登录 Cloudflare Dashboard**
    - 转到 **Compute (Workers & Pages)** -> **Overview**。
    - 点击 **Create Application** -> **Connect to Git**。

2. **选择仓库**
    - 选择您的 GitHub 仓库 `ai-nexus`。

3. **配置构建 (Build Settings)**
    - **Framework Preset**: 选择 `Next.js`
    - **Build Command**: `npx @cloudflare/next-on-pages`
    - **Build Output Directory**: `.vercel/output/static`

4. **绑定数据库 (D1 Database)**
    - 第一次部署可能会失败，因为还没有绑定数据库，不用担心。
    - 转到项目的 **Settings** -> **Functions**。
    - 找到 **D1 Database Bindings**。
    - **Variable Name**: `DB` (必须是大写，与代码一致)。
    - **D1 Database**: 选择下拉菜单中的 `ai_nexus_db`。
    - 保存后，去 **Deployments** 页面点击最新一次部署的 **Retry deployment**。

5. **环境变量 (Environment Variables)**
    - 转到 **Settings** -> **Environment Variables**。
    - 添加 `AUTH_SECRET`: `super-secret-cyberpunk-key` (生成一个复杂的随机字符串)。
