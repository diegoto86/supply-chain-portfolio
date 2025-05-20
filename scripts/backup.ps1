# 🛠 Script: backup.ps1
# 🔹 Descripción: Hace commit, push y backup en ZIP del proyecto Git

# Ruta actual del proyecto (asume que el script se ejecuta desde la raíz del proyecto)
$projectPath = Get-Location

# Obtener fecha y hora formateada para el nombre del ZIP
$timestamp = Get-Date -Format "yyyy-MM-dd_HH-mm"
$zipName = "backup_$timestamp.zip"
$zipPath = Join-Path $projectPath "..\$zipName"

# Preguntar mensaje de commit
$message = Read-Host "Escribe el mensaje del commit"

# Ejecutar git add, commit y push
Write-Host "`n✅ Ejecutando git add ."
git add .

Write-Host "✅ Haciendo commit..."
git commit -m "$message"

Write-Host "⬆️ Haciendo push a GitHub..."
git push

# Crear archivo ZIP de backup
Write-Host "💾 Creando backup ZIP: $zipName"
Compress-Archive -Path $projectPath\* -DestinationPath $zipPath

Write-Host "`n🎉 Listo. Backup guardado en: $zipPath"