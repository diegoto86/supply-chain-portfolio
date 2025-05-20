# 🧾 Instrucciones para los scripts en la carpeta `scripts/`

Este proyecto incluye 3 scripts de mantenimiento automatizado para Git y backups.

---

## 📦 1. backup.ps1

Este script realiza:

✅ `git add .`  
✅ Te pide un mensaje y hace `git commit -m "mensaje"`  
✅ `git push`  
✅ Crea un archivo `.zip` con el estado actual del proyecto (ej: `backup_2025-05-20_14-35.zip`)

📂 El `.zip` se guarda un nivel por encima de tu carpeta de proyecto.

### Cómo usarlo:

```powershell
cd C:\Users\diego\Projects\supply-chain-portfolio
.\scripts\backup.ps1
```

---

## 🔄 2. restore-latest-backup.ps1

Este script:

✅ Busca el archivo `.zip` más reciente llamado `backup_*.zip`  
✅ Lo descomprime en una nueva carpeta `restaurado_FECHA_HORA`  
✅ Útil para volver a una versión anterior si algo se rompe

📂 La carpeta restaurada se crea un nivel por encima del proyecto actual.

### Cómo usarlo:

```powershell
cd C:\Users\diego\Projects\supply-chain-portfolio
.\scripts\restore-latest-backup.ps1
```

---

## ⬇️ 3. clone-from-github.ps1

Este script:

✅ Clona tu repositorio desde GitHub  
✅ Crea una carpeta como: `supply-chain-portfolio-clone_2025-05-20_1430`

💡 Útil si necesitas trabajar desde otra máquina o empezar desde cero.

### Cómo usarlo:

```powershell
cd C:\Users\diego\Projects\supply-chain-portfolio
.\scripts\clone-from-github.ps1
```

✅ Asegúrate de tener Git instalado y haber iniciado sesión correctamente.

---

📁 Guarda estos scripts dentro de tu carpeta:

```
supply-chain-portfolio/scripts/
```

Así mantienes tu proyecto organizado y con versiones protegidas.