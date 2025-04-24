
@echo off
echo Starting Mumbai Naka Insights Project...

REM Check if npm is installed
where npm >nul 2>nul
if %errorlevel% neq 0 (
    echo Error: npm is not installed. Please install Node.js and npm.
    pause
    exit /b 1
)

REM Install dependencies
echo Installing project dependencies...
npm install

REM Start the development server
echo Starting development server...
npm run dev

pause
