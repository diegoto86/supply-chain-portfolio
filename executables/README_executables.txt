# 📁 Folder: executables

This folder contains `.bat` launchers that let you run PowerShell scripts with a simple double-click — no manual terminal use required.

---

## ▶️ Included files and when to use them

### 1. `backup-launcher.bat`
🛠 **Purpose:** Runs `backup.ps1`

**What it does:**
- Executes `git add .`
- Prompts you to enter a commit message
- Executes `git commit -m "message"`
- Pushes your changes to GitHub
- Creates a `.zip` backup of the entire project with a timestamp

**When to use it:**
➡️ Use this after making meaningful changes to your project (e.g. after finishing a feature, fixing a bug, or before trying a risky change). It ensures your progress is committed, pushed to GitHub, and backed up locally.

---

### 2. `restore-launcher.bat`
🔄 **Purpose:** Runs `restore-latest-backup.ps1`

**What it does:**
- Searches for the most recent backup `.zip` in the parent directory
- Extracts it into a new folder like `restored_2025-05-20_1430`

**When to use it:**
➡️ Use this if your project breaks, deletes files by mistake, or behaves unpredictably. It lets you quickly revert to the last known good state.

---

### 3. `clone-launcher.bat`
⬇️ **Purpose:** Runs `clone-from-github.ps1`

**What it does:**
- Clones your GitHub repo into a new folder like `supply-chain-portfolio-clone_2025-05-20_1430`

**When to use it:**
➡️ Use this if you're switching to a different machine, starting fresh, or need an extra copy of your latest repo without manually using `git clone`.

---

## ⚙️ Requirements

- PowerShell installed (included with Windows)
- Git installed and configured
- Remote GitHub repo already linked in your project (you've done this)

---

💡 Tip: Keep this folder organized and avoid renaming files unless you also update the references in the `.bat` launchers.