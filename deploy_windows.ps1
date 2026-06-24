# Face Swap API Windows部署脚本
# 使用WinRM或PowerShell远程执行

$ErrorActionPreference = "Stop"

Write-Host "🎭 Face Swap API Windows Deployment" -ForegroundColor Cyan
Write-Host "=====================================" -ForegroundColor Cyan
Write-Host ""

# 1. 检查Python
Write-Host "🔍 Checking Python installation..." -ForegroundColor Yellow
$python = Get-Command python -ErrorAction SilentlyContinue
if (-not $python) {
    Write-Host "❌ Python not found. Please install Python 3.8+" -ForegroundColor Red
    Write-Host "   Download from: https://www.python.org/downloads/" -ForegroundColor Yellow
    exit 1
}

$pythonVersion = python --version
Write-Host "✅ Found: $pythonVersion" -ForegroundColor Green

# 2. 创建目录
$installDir = "C:\faceswap-api"
Write-Host "📁 Creating directory: $installDir" -ForegroundColor Yellow
New-Item -ItemType Directory -Force -Path $installDir | Out-Null
Set-Location $installDir

# 3. 安装依赖
Write-Host "📦 Installing Python packages..." -ForegroundColor Yellow
python -m pip install --upgrade pip --quiet
python -m pip install flask flask-cors gradio-client --quiet

Write-Host "✅ Dependencies installed" -ForegroundColor Green

# 4. 创建Windows服务脚本
$serviceScript = @'
@echo off
cd C:\faceswap-api
python api_server.py
'@

$serviceScript | Out-File -FilePath "$installDir\start.bat" -Encoding ASCII

# 5. 创建任务计划（开机自启）
Write-Host "⚙️  Creating scheduled task for auto-start..." -ForegroundColor Yellow
$action = New-ScheduledTaskAction -Execute "python" -Argument "api_server.py" -WorkingDirectory $installDir
$trigger = New-ScheduledTaskTrigger -AtStartup
$settings = New-ScheduledTaskSettingsSet -AllowStartIfOnBatteries -DontStopIfGoingOnBatteries -StartWhenAvailable

Register-ScheduledTask -TaskName "FaceSwapAPI" -Action $action -Trigger $trigger -Settings $settings -RunLevel Highest -Force | Out-Null

Write-Host "✅ Scheduled task created" -ForegroundColor Green

# 6. 添加防火墙规则
Write-Host "🔥 Configuring Windows Firewall..." -ForegroundColor Yellow
New-NetFirewallRule -DisplayName "FaceSwap API (5001)" -Direction Inbound -LocalPort 5001 -Protocol TCP -Action Allow -ErrorAction SilentlyContinue | Out-Null
Write-Host "✅ Firewall rule added" -ForegroundColor Green

# 7. 启动服务
Write-Host "🚀 Starting API server..." -ForegroundColor Yellow
Start-ScheduledTask -TaskName "FaceSwapAPI"

Start-Sleep -Seconds 3

# 8. 测试
Write-Host ""
Write-Host "Testing API..." -ForegroundColor Yellow
try {
    $response = Invoke-WebRequest -Uri "http://localhost:5001/health" -TimeoutSec 5 -UseBasicParsing
    Write-Host "✅ API is running!" -ForegroundColor Green
    Write-Host ""
    Write-Host "📡 API Endpoint: http://8.130.87.104:5001/api/faceswap" -ForegroundColor Cyan
    Write-Host "🏥 Health Check:  http://8.130.87.104:5001/health" -ForegroundColor Cyan
} catch {
    Write-Host "⚠️  API starting... please wait and check manually" -ForegroundColor Yellow
}

Write-Host ""
Write-Host "======================================" -ForegroundColor Cyan
Write-Host "✅ Deployment Complete!" -ForegroundColor Green
Write-Host ""
Write-Host "Manage the service:" -ForegroundColor Yellow
Write-Host "  Start:   Start-ScheduledTask -TaskName FaceSwapAPI" -ForegroundColor White
Write-Host "  Stop:    Stop-ScheduledTask -TaskName FaceSwapAPI" -ForegroundColor White
Write-Host "  Status:  Get-ScheduledTask -TaskName FaceSwapAPI" -ForegroundColor White
Write-Host "  Logs:    Get-WinEvent -LogName Application | Where-Object {`$_.Message -like '*FaceSwap*'}" -ForegroundColor White
