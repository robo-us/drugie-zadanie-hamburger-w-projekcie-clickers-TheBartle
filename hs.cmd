@IF EXIST "%~dp0\node.exe" (
  "%~dp0\node.exe"  "C:\Users\Programista Junior\AppData\Roaming\npm\node_modules\http-server\bin\http-server" %*
) ELSE (
  @SETLOCAL
  @SET PATHEXT=%PATHEXT:;.JS;=;%
  node  "C:\Users\Programista Junior\AppData\Roaming\npm\node_modules\http-server\bin\http-server" %*
)