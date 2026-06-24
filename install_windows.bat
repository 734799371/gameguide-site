@echo off
REM Face Swap API 一键部署脚本（Windows）
REM 在服务器上直接运行此脚本

echo ====================================
echo   Face Swap API 自动部署
echo ====================================
echo.

REM 1. 检查Python
echo [1/6] 检查Python环境...
python --version >nul 2>&1
if errorlevel 1 (
    echo [错误] 未找到Python，请先安装Python 3.8+
    echo 下载地址: https://www.python.org/downloads/
    pause
    exit /b 1
)
echo [OK] Python已安装

REM 2. 创建目录
echo [2/6] 创建程序目录...
if not exist "C:\faceswap-api" mkdir "C:\faceswap-api"
cd /d "C:\faceswap-api"
echo [OK] 目录创建成功

REM 3. 安装依赖
echo [3/6] 安装Python依赖包...
python -m pip install --upgrade pip --quiet
python -m pip install flask flask-cors gradio-client --quiet
echo [OK] 依赖安装完成

REM 4. 配置防火墙
echo [4/6] 配置防火墙规则...
netsh advfirewall firewall delete rule name="FaceSwap API (5001)" >nul 2>&1
netsh advfirewall firewall add rule name="FaceSwap API (5001)" dir=in action=allow protocol=TCP localport=5001 >nul
echo [OK] 防火墙已开放端口5001

REM 5. 创建启动脚本
echo [5/6] 创建启动脚本...
(
echo @echo off
echo cd /d "C:\faceswap-api"
echo python api_server.py
) > start_api.bat
echo [OK] 启动脚本创建完成

REM 6. 启动服务
echo [6/6] 启动API服务器...
start "FaceSwap API" /min python api_server.py

echo.
echo ====================================
echo   部署完成！
echo ====================================
echo.
echo API地址: http://8.130.87.104:5001/api/faceswap
echo 健康检查: http://8.130.87.104:5001/health
echo.
echo 提示：
echo   - 按 Ctrl+C 可停止当前运行的服务器
echo   - 如需后台运行，请运行: start_api.bat
echo   - 阿里云控制台需要开放安全组端口5001
echo.
pause
