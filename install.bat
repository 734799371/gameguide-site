@echo off
chcp 65001 >nul 2>&1
REM Face Swap API One-click Deploy

echo ====================================
echo   Face Swap API Auto Deploy
echo ====================================
echo.

REM Step 1: Check Python
echo [1/6] Checking Python...
python --version >nul 2>&1
if errorlevel 1 (
    echo [ERROR] Python not found!
    pause
    exit /b 1
)
echo [OK] Python installed

REM Step 2: Create directory
echo [2/6] Creating directory...
if not exist "C:\faceswap-api" mkdir "C:\faceswap-api"
cd /d "C:\faceswap-api"
echo [OK] Directory created

REM Step 3: Copy files from desktop
echo [3/6] Copying files...
if exist "C:\Users\Administrator\Desktop\api_server.py" (
    copy "C:\Users\Administrator\Desktop\api_server.py" . >nul
    echo [OK] api_server.py copied
)
if exist "C:\Users\Administrator\Desktop\requirements_api.txt" (
    copy "C:\Users\Administrator\Desktop\requirements_api.txt" . >nul
    echo [OK] requirements copied
)

REM Step 4: Install dependencies
echo [4/6] Installing packages...
python -m pip install --upgrade pip --quiet
python -m pip install flask flask-cors gradio-client --quiet
echo [OK] Done

REM Step 5: Firewall
echo [5/6] Opening firewall port 5001...
netsh advfirewall firewall delete rule name="FaceSwapAPI" >nul 2>&1
netsh advfirewall firewall add rule name="FaceSwapAPI" dir=in action=allow protocol=TCP localport=5001 >nul
echo [OK] Port 5001 opened

REM Step 6: Start server
echo [6/6] Starting server...
start "FaceSwapAPI" /min python api_server.py

echo.
echo ====================================
echo   DEPLOYMENT COMPLETE!
echo ====================================
echo.
echo API: http://8.130.87.104:5001/api/faceswap
echo Health: http://8.130.87.104:5001/health
echo.
echo IMPORTANT: Open port 5001 in Alibaba Cloud Security Group!
echo.
pause
