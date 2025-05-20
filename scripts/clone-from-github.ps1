# clone-from-github.ps1
# 🔹 Clona el proyecto desde GitHub a una carpeta nueva

# Usuario y nombre del repo
$githubUser = "diegoto86"
$repoName = "supply-chain-portfolio"

# Ruta destino
$targetFolder = Join-Path (Resolve-Path "..") "$repoName-clone_" + (Get-Date -Format "yyyy-MM-dd_HHmm")

git clone https://github.com/$githubUser/$repoName.git $targetFolder

Write-Host "✅ Proyecto clonado en: $targetFolder"