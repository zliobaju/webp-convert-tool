@ECHO OFF
TITLE Convert script

cd %~dp0
CALL npm run convert

ECHO.
ECHO done!
ECHO.

PAUSE