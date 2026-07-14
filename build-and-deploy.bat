@echo off
cd /d "c:\Users\X\Desktop\siteuri\anuntul-master"
echo Building Next.js application...
call npm run build
if %ERRORLEVEL% EQU 0 (
    echo.
    echo Build completed successfully!
    echo.
    echo To deploy: Push your changes to the main branch on GitHub
    echo The automated workflow will build and deploy to your Hetzner server.
    echo.
    echo Deployment target: 178.104.33.34:3005
) else (
    echo Build failed with error code %ERRORLEVEL%
)
pause
