REM @echo off
REM This short script will only remove dlls from my project... or will it?
del /S *.js
REM find . -type d -name '.ver' -print -exec rm -rf {} \;
for /r ./ %%i in (*.grove) do ren "%%i" "%%~ni"
REM for /r ./ %%i in (*.ver) do echo ren "%%i" "%%~ni"
for /f "tokens=*" %%G in ('dir /b /s /a:d "*.ver"') do rmdir "%%G" /s /q
pause