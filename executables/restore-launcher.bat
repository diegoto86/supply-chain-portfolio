@echo off
:: restore-launcher.bat
:: Ejecuta el script PowerShell para restaurar el último backup

echo Restaurando el último backup disponible...
powershell -ExecutionPolicy Bypass -File "..\scripts\restore-latest-backup.ps1"
pause