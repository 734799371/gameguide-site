# Face Swap API Server 部署指南

## 方案概述

使用 `gradio_client` 库在后端服务器调用 HuggingFace Spaces API，前端通过 HTTP 请求访问后端服务。

---

## 🚀 方案一：本地运行（开发测试）

### 1. 安装依赖
```bash
cd /Users/chenjun/.qclaw/workspace/gameguide-site
pip3 install -r requirements_api.txt
```

### 2. 启动服务器
```bash
python3 api_server.py
```

服务器将在 `http://localhost:5001` 运行

### 3. 修改前端代码
更新 `facewap.html` 中的 API 端点：
```javascript
const API_ENDPOINT = 'http://localhost:5001/api/faceswap';
```

---

## ☁️ 方案二：部署到云端（推荐）

### 选项 A：部署到 Railway（免费额度）

1. **注册 Railway**
   - 访问 https://railway.app
   - 使用 GitHub 登录

2. **创建新项目**
   ```bash
   # 安装 Railway CLI
   npm install -g @railway/cli
   
   # 登录
   railway login
   
   # 初始化项目
   railway init
   
   # 部署
   railway up
   ```

3. **添加环境变量**
   - 在 Railway 仪表盘添加：
     - `PORT=5001`

### 选项 B：部署到 Render（免费）

1. **创建 `render.yaml`**
   ```yaml
   services:
     - type: web
       name: faceswap-api
       env: python
       buildCommand: pip install -r requirements_api.txt
       startCommand: python api_server.py
       plan: free
   ```

2. **连接 GitHub 仓库**
   - 访问 https://render.com
   - 连接你的 GitHub 仓库
   - 选择 `gameguide-site` 项目

### 选项 C：部署到 Fly.io（免费额度）

```bash
# 安装 flyctl
brew install flyctl

# 登录
fly auth signup

# 部署
fly launch
fly deploy
```

---

## 🔧 选项 D：使用 Cloudflare Workers（Serverless）

创建 `worker.js`：

```javascript
export default {
  async fetch(request) {
    // 转发到 HuggingFace Spaces
    const response = await fetch('https://ss86910-faceswaper.hf.space/gradio_api/predict', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: await request.text()
    });
    
    return new Response(await response.text(), {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      }
    });
  }
}
```

---

## 🎯 推荐方案

### 对于你的情况，推荐使用 **Render.com**：

**优点：**
- ✅ 完全免费（每月 750 小时）
- ✅ 自动 HTTPS
- ✅ 自动部署
- ✅ 支持 Python
- ✅ 无需信用卡

**步骤：**
1. 将代码推送到 GitHub
2. 在 Render 创建新服务
3. 连接 GitHub 仓库
4. 自动部署
5. 获得免费的 HTTPS URL（如：`https://faceswap-api.onrender.com`）

---

## 📝 前端集成

部署完成后，更新前端代码：

```javascript
// 在 facewap.html 中修改
const API_ENDPOINT = 'https://你的域名/api/faceswap';

// 调用方式
const response = await fetch(API_ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
        source_image: sourceBase64,
        target_image: targetBase64,
        enhance_face: true
    })
});
```

---

## 🔒 安全性

建议添加：
- API Key 认证
- 速率限制（防止滥用）
- 文件大小限制（5MB）

---

## 💰 成本估算

| 平台 | 免费额度 | 适用场景 |
|------|---------|---------|
| Render | 750小时/月 | 低流量网站 ✅ |
| Railway | $5/月额度 | 中等流量 |
| Fly.io | 3个免费VM | 开发测试 |
| Cloudflare Workers | 10万请求/天 | 轻量API ✅ |

---

需要我帮你部署吗？告诉我你想用哪个平台！
