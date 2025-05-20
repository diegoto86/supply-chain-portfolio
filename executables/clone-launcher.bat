@echo off
:: clone-launcher.bat
:: Ejecuta el script PowerShell para clonar el repositorio desde GitHub

echo Clonando el repositorio desde GitHub...
powershell -ExecutionPolicy Bypass -File "..\scripts\clone-from-github.ps1"
pause