REM @echo off
REM This short script will only remove dlls from my project... or will it?
del /S *.js
REM find . -type d -name '.ver' -print -exec rm -rf {} \;
for /r ./ %%i in (*.grove) do ren "%%i" "%%~ni"
pause