# Project Installation Guide

This guide will help you set up this project on your computer, even if you've never done programming before! 🚀

## Step 1: Install Required Software

### Installing Node.js
1. Go to [Node.js website](https://nodejs.org/)
2. Download the "LTS" (Long Term Support) version for your operating system
3. Run the installer you downloaded
4. To verify installation:
   - Open Terminal (Mac/Linux) or Command Prompt (Windows)
   - Type `node --version` and press Enter
   - You should see a version number (like v18.0.0)

### Installing Bun
Bun is a fast package installer we'll use for this project.

#### For Mac or Linux:
1. Open Terminal
2. Copy and paste this command:
```bash
curl -fsSL https://bun.sh/install | bash
```
3. Press Enter and wait for installation to complete
4. Close and reopen your Terminal
5. Type `bun --version` to verify installation

#### For Windows:
First, you'll need to set up WSL (Windows Subsystem for Linux):
1. Open PowerShell as Administrator
2. Copy and paste this command:
```powershell
wsl --install
```
3. Restart your computer
4. After restart, open PowerShell and run the Bun installation command:
```bash
curl -fsSL https://bun.sh/install | bash
```

## Step 2: Download the Project

### If you're using Git:
1. Open Terminal/Command Prompt
2. Navigate to where you want to save the project
3. Run:
```bash
git clone [your-repository-url]
cd [project-name]
```

### If you're downloading manually:
1. Download the project as a ZIP file
2. Extract it to your desired location
3. Open Terminal/Command Prompt
4. Navigate to the project folder:
   - On Windows: `cd C:\path\to\your\project`
   - On Mac/Linux: `cd /path/to/your/project`

## Step 3: Install Project Dependencies

1. Make sure you're in the project directory in Terminal/Command Prompt
2. Run this command:
```bash
bun install
```
3. Wait for installation to complete (this might take a few minutes)

## Step 4: Start the Project

After installation is complete, you can start the development server:
```bash
bun run dev
```

The project should now be running! You can view it by opening your web browser and going to:
```
http://localhost:3000
```

## Troubleshooting

### If you see "command not found":
- Try closing and reopening your Terminal/Command Prompt
- Make sure you installed Node.js and Bun as described above

### If installation fails:
1. Delete these folders/files if they exist:
   - `node_modules` folder
   - `bun.lockb` file
2. Try installing again:
```bash
bun install
```

### Still having problems?
1. Make sure you have a good internet connection
2. Try running:
```bash
bun install --force
```

## Need Help?

If you're stuck or something isn't working:
1. Make sure you followed each step exactly
2. Try closing and reopening your Terminal/Command Prompt
3. Contact the project maintainer for help

## Additional Notes

- Don't close the Terminal window while the project is running
- To stop the project, press Ctrl+C in the Terminal
- Always make sure you're in the project directory when running commands
