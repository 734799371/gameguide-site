# Face Swap API Windows服务器部署指南

## 📦 部署包内容

- `api_server.py` - API服务器主程序
- `requirements_api.txt` - Python依赖列表
- `install_windows.bat` - 一键安装脚本（推荐）
- `deploy_windows.ps1` - PowerShell部署脚本（高级）

---

## 🚀 快速部署（3步）

### 步骤1：连接服务器

**Mac用户：**
1. 打开"Microsoft Remote Desktop"应用
2. 点击"+" → "Add PC"
3. 输入：
   - PC name: `8.130.87.104`
   - User name: `Administrator`
   - Password: `Cj960818.`
4. 双击连接

**Windows用户：**
1. 按 `Win + R`，输入 `mstsc`
2. 输入服务器地址：`8.130.87.104`
3. 用户名：`Administrator`
4. 密码：`Cj960818.`

---

### 步骤2：上传文件

连接成功后，将以下文件上传到服务器桌面：
- `api_server.py`
- `requirements_api.txt`
- `install_windows.bat`

**上传方式：**
- 在远程桌面中，使用"复制粘贴"直接从本地复制文件
- 或者通过浏览器下载（如果文件在网盘）

---

### 步骤3：运行安装脚本

1. 在服务器上打开PowerShell（右键"以管理员身份运行"）
2. 执行以下命令：

```powershell
# 进入桌面
cd C:\Users\Administrator\Desktop

# 运行安装脚本
.\install_windows.bat
```

等待安装完成（约1-2分钟）

---

## ✅ 验证部署

### 方法一：浏览器测试
在服务器或本地浏览器访问：
```
http://8.130.87.104:5001/health
```

看到 `{"status":"healthy"}` 表示成功

### 方法二：PowerShell测试
```powershell
Invoke-WebRequest -Uri "http://localhost:5001/health" -UseBasicParsing
```

---

## 🔧 手动部署（如果自动脚本失败）

### 1. 检查Python
```powershell
python --version
```
如果未安装，下载：https://www.python.org/downloads/

### 2. 创建目录
```powershell
mkdir C:\faceswap-api
cd C:\faceswap-api
# 复制 api_server.py 和 requirements_api.txt 到这里
```

### 3. 安装依赖
```powershell
pip install flask flask-cors gradio-client
```

### 4. 配置防火墙
```powershell
netsh advfirewall firewall add rule name="FaceSwap API" dir=in action=allow protocol=TCP localport=5001
```

### 5. 启动服务
```powershell
python api_server.py
```

---

## ☁️ 阿里云安全组配置

**必须步骤！否则外网无法访问**

1. 登录阿里云控制台：https://ecs.console.aliyun.com/
2. 找到实例 `8.130.87.104`
3. 点击"安全组" → "配置规则"
4. 点击"添加安全组规则"
5. 填写：
   - 规则方向：**入方向**
   - 授权策略：**允许**
   - 协议类型：**自定义TCP**
   - 端口范围：**5001/5001**
   - 授权对象：**0.0.0.0/0**
   - 描述：FaceSwap API
6. 点击"确定"

---

## 🎯 后台运行（开机自启）

### 方式一：任务计划（推荐）

```powershell
# 创建任务计划
$action = New-ScheduledTaskAction -Execute "python" -Argument "api_server.py" -WorkingDirectory "C:\faceswap-api"
$trigger = New-ScheduledTaskTrigger -AtStartup
Register-ScheduledTask -TaskName "FaceSwapAPI" -Action $action -Trigger $trigger -RunLevel Highest -Force

# 立即启动
Start-ScheduledTask -TaskName "FaceSwapAPI"
```

### 方式二：Windows服务（高级）

使用NSSM工具：
```powershell
# 下载NSSM
Invoke-WebRequest -Uri "https://nssm.cc/release/nssm-2.24.zip" -OutFile "nssm.zip"
Expand-Archive -Path "nssm.zip" -DestinationPath "C:\nssm"

# 安装服务
C:\nssm\nssm-2.24\win64\nssm.exe install FaceSwapAPI
# 在弹出窗口中配置：
# - Path: C:\Python39\python.exe（根据实际路径）
# - Arguments: api_server.py
# - Startup directory: C:\faceswap-api

# 启动服务
net start FaceSwapAPI
```

---

## 🔍 故障排查

### 问题1：端口被占用
```powershell
# 检查端口占用
netstat -ano | findstr :5001

# 结束占用进程（PID为上一步查到的数字）
taskkill /PID <PID> /F
```

### 问题2：防火墙阻止
```powershell
# 临时关闭防火墙测试（不推荐长期关闭）
netsh advfirewall set allprofiles state off

# 重新开启防火墙
netsh advfirewall set allprofiles state on
```

### 问题3：Python未找到
```powershell
# 添加Python到环境变量
setx PATH "%PATH%;C:\Python39;C:\Python39\Scripts"
```

---

## 📝 常用命令

```powershell
# 查看服务状态
Get-ScheduledTask -TaskName FaceSwapAPI

# 停止服务
Stop-ScheduledTask -TaskName FaceSwapAPI

# 查看日志（如果配置了日志文件）
Get-Content C:\faceswap-api\api.log -Tail 50

# 重启服务器
Restart-Computer
```

---

## 🎭 前端集成

部署成功后，更新网站代码：

```javascript
// 在 facewap.html 中修改 API 端点
const apiEndpoints = [
    'http://8.130.87.104:5001/api/faceswap'  // 你的服务器
];
```

---

## 📞 需要帮助？

- 检查日志：`C:\faceswap-api\api.log`
- 测试连接：`ping 8.130.87.104`
- 检查端口：`telnet 8.130.87.104 5001`

---

**部署成功后请告诉我，我会帮你更新前端代码！** 🎉
