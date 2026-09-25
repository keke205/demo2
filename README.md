# 家底 Demo

按《家底_Demo制作任务书_队友版_最终优化版》完成的 5 页半静态网页。

## 运行

Windows 双击项目上一级的「启动家底.cmd」，浏览器访问 http://localhost:3000 。首次运行需要联网安装依赖。
也可以在本目录执行 npm.cmd install，然后 npm.cmd run dev。

## 页面

- / 家庭财务首页
- /assets 家庭资产全景
- /checkup 家庭财务体检
- /simulation 提前还贷情景模拟
- /assistant 财务解释助手

所有数据为固定模拟数据，无真实 OCR、AI 或银行连接；解释助手仅切换预设问题。没有登录、注册或后台页。

## 开发与验证

npm.cmd run build 生成生产产物；npx.cmd tsc --noEmit 校验类型。
交付说明、数据核对表和演示稿在上一级 deliverables 目录。
