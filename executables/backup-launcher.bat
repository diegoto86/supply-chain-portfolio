@echo off
:: backup-launcher.bat
:: Ejecuta el script PowerShell para crear backup, commit y push

echo Iniciando backup del proyecto...
powershell -ExecutionPolicy Bypass -File "..\scripts\backup.ps1"
pause