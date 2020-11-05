@ECHO OFF
TITLE Convert script

cd %~dp0
CALL npm run convert-mode-2

ECHO.
ECHO done!
ECHO.

PAUSE