#!/bin/bash

# Git setup script for Video Creator Portfolio
# Run this script to commit your project to GitHub

echo "Setting up Git repository for Video Creator Portfolio..."

# Add all files to staging
git add .

# Create initial commit
git commit -m "feat: add video creator portfolio website

- Modern responsive design with mobile-first approach
- Hero section with compelling video content headline
- About section highlighting social media expertise
- Services section with three main offerings
- Portfolio section with platform-specific branding
- Client testimonials with star ratings
- Contact form with budget selection
- Social media integration ready
- Smooth animations and professional typography
- Complete documentation (README, deployment guide)
- TypeScript support throughout
- PostgreSQL database integration
- Express.js backend with React frontend"

# Add your GitHub repository as remote (replace with your actual repo URL)
git remote add origin https://github.com/sharpcheto/Game.git

# Push to GitHub
git push -u origin main

echo "Project committed and pushed to GitHub!"
echo "Visit: https://github.com/sharpcheto/Game"