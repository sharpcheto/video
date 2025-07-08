# GitHub Setup Guide

Follow these steps to commit your Video Creator Portfolio to GitHub.

## Quick Setup (Manual)

1. **Open Terminal/Command Prompt** in your project directory

2. **Run the setup script:**
   ```bash
   ./git-setup.sh
   ```

   Or run these commands manually:

3. **Add all files:**
   ```bash
   git add .
   ```

4. **Create initial commit:**
   ```bash
   git commit -m "feat: add video creator portfolio website"
   ```

5. **Add GitHub repository:**
   ```bash
   git remote add origin https://github.com/sharpcheto/Game.git
   ```

6. **Push to GitHub:**
   ```bash
   git push -u origin main
   ```

## Alternative: GitHub Desktop

1. Open GitHub Desktop
2. Click "Add an Existing Repository from your Hard Drive"
3. Select your project folder
4. Click "Publish repository"
5. Choose "sharpcheto/Game" as the repository name
6. Click "Publish Repository"

## Alternative: VS Code

1. Open VS Code in your project folder
2. Click the Source Control icon (Ctrl+Shift+G)
3. Click "Initialize Repository"
4. Stage all files by clicking the + icon
5. Enter commit message: "feat: add video creator portfolio website"
6. Click "Commit"
7. Click "Publish to GitHub"
8. Select your existing repository "sharpcheto/Game"

## Verify Success

After pushing, visit: https://github.com/sharpcheto/Game

You should see:
- All your project files
- README.md with setup instructions
- Portfolio website code
- Documentation files

## Next Steps

1. **Update Repository Description** on GitHub:
   - Go to your repository settings
   - Add description: "Modern video creator portfolio website with lead generation"
   - Add topics: `portfolio`, `video-creator`, `react`, `typescript`, `social-media`

2. **Enable GitHub Pages** (optional):
   - Go to Settings → Pages
   - Select source branch (main)
   - Your site will be available at: https://sharpcheto.github.io/Game

3. **Set up deployment** using the DEPLOYMENT.md guide

## Troubleshooting

**Permission denied:**
```bash
git remote set-url origin https://github.com/sharpcheto/Game.git
```

**Repository already exists:**
```bash
git remote remove origin
git remote add origin https://github.com/sharpcheto/Game.git
```

**Authentication issues:**
- Use GitHub CLI: `gh auth login`
- Or use personal access token instead of password