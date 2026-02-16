@echo off
TITLE Quiz Battle Royal
ECHO Starting Quiz Battle Royal...
ECHO.
ECHO This window must remain open while playing the game.
ECHO.

:: Navigate to the source code directory
CD source_code
IF %ERRORLEVEL% NEQ 0 (
    ECHO Error: Could not find source_code folder.
    PAUSE
    EXIT /B
)

:: Open the browser effectively immediately, expecting the server to spin up
ECHO Opening default browser to http://localhost:3000 ...
START "" "http://localhost:3000"

:: Start the Next.js production server
ECHO Starting Next.js Server...
call npm start

PAUSE
