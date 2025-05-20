# restore-latest-backup.ps1
# 🔹 Restaura el backup ZIP más reciente en una nueva carpeta

# Ruta donde buscar backups (una carpeta arriba)
$backupFolder = Resolve-Path ".."

# Buscar ZIPs ordenados por fecha
$latestZip = Get-ChildItem -Path $backupFolder -Filter "backup_*.zip" | Sort-Object LastWriteTime -Descending | Select-Object -First 1

if ($null -eq $latestZip) {
    Write-Host "❌ No se encontró ningún archivo backup_*.zip"
    exit
}

# Carpeta destino
$restoreFolder = Join-Path $backupFolder "restaurado_" + (Get-Date -Format "yyyy-MM-dd_HHmm")
New-Item -ItemType Directory -Path $restoreFolder | Out-Null

# Extraer ZIP
Expand-Archive -Path $latestZip.FullName -DestinationPath $restoreFolder

Write-Host "✅ Backup restaurado en: $restoreFolder"