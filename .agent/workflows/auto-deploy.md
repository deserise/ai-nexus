---
description: 一键自动将当前项目部署到 GitHub (使用 gh CLI)
---

1. **检查 Git 初始化状态**
   - 运行 `git status` 检查是否已初始化。
   - 如果未初始化，运行 `git init -b main`。

2. **提交代码**
   // turbo
   - 运行 `git add .`
   - 运行 `git commit -m "chore: auto-deploy by agent"` (如果提交失败提示无变更，则忽略)

3. **创建并推送仓库**
   - 尝试运行 `gh repo create --public --source=. --push`
   - 注意：如果命令失败提示 "repository already exists"，则说明仓库已存在，直接运行 `git push` 即可。

4. **验证**
   - 运行 `gh repo view --web` 打开浏览器确认部署成功。
