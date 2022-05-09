@ECHO OFF
TITLE Convert script
cd %~dp0
CALL yarn convert
ECHO.
ECHO done!
ECHO.
PAUSE