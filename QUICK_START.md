# Quick Start Guide

Get your Video Creator Portfolio live in minutes!

## 🚀 1-Minute Setup

### Create GitHub Repository
1. Go to [github.com/new](https://github.com/new)
2. Repository name: `video-creator-portfolio`
3. Description: `Modern video creator portfolio with lead generation`
4. Set to **Public**
5. Click "Create repository"

### Push Your Code
```bash
git init
git add .
git commit -m "Initial commit: Video Creator Portfolio"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/video-creator-portfolio.git
git push -u origin main
```

## 🌐 Deploy in 3 Steps

### Option A: Vercel (Recommended)
1. Go to [vercel.com](https://vercel.com)
2. Click "New Project" → Import from GitHub
3. Select your repository → Deploy

### Option B: Netlify
1. Go to [netlify.com](https://netlify.com)
2. Drag your project folder or connect GitHub
3. Build command: `npm run build`
4. Publish directory: `dist/public`

### Option C: Replit Deploy
1. Click "Deploy" button in Replit
2. Configure environment variables
3. Your site is live at `your-project.replit.app`

## ✏️ Customize Your Content

### 1. Update Personal Information
Edit these files:
- `client/src/components/hero-section.tsx` - Your headline and stats
- `client/src/components/about-section.tsx` - Your bio and skills
- `client/src/components/contact-section.tsx` - Your contact info

### 2. Add Your Social Links
Replace placeholder URLs in:
- `client/src/components/contact-section.tsx`
- `client/src/components/footer.tsx`
- `client/src/components/portfolio-section.tsx`

### 3. Update Portfolio Examples
Edit `client/src/components/portfolio-section.tsx` with your actual work.

### 4. Add Real Testimonials
Edit `client/src/components/testimonials-section.tsx` with client reviews.

## 🎨 Brand Customization

### Colors
Edit `client/src/index.css`:
```css
:root {
  --brand-indigo: hsl(239, 84%, 67%);    /* Primary color */
  --brand-pink: hsl(327, 73%, 58%);      /* Accent color */
  --brand-amber: hsl(45, 93%, 47%);      /* CTA color */
}
```

### Logo/Brand Name
Update "VideoCreator" in:
- `client/src/components/navigation.tsx`
- `client/src/components/footer.tsx`

## 📧 Contact Form Setup

### Development (In-Memory)
Works immediately - submissions stored in memory.

### Production (Database)
1. Create PostgreSQL database (Neon, Supabase, etc.)
2. Set `DATABASE_URL` environment variable
3. Run: `npm run db:push`

## 🔧 Environment Variables

Create `.env` file:
```env
DATABASE_URL=your_postgresql_connection_string
NODE_ENV=production
PORT=5000
```

## 📱 Test Your Site

### Local Testing
```bash
npm run dev
```
Open `http://localhost:5000`

### Production Testing
- Test on mobile devices
- Check contact form submission
- Verify social media links
- Test navigation scrolling

## 🚀 Go Live Checklist

- [ ] Repository created and pushed
- [ ] Site deployed to hosting platform
- [ ] Personal content updated
- [ ] Social media links added
- [ ] Contact form tested
- [ ] Mobile responsiveness verified
- [ ] Custom domain configured (optional)

## 📈 Next Steps

1. **Analytics**: Add Google Analytics
2. **SEO**: Submit to search engines
3. **Content**: Add blog section
4. **Social**: Share on your platforms
5. **Monitor**: Track form submissions

Your professional video creator portfolio is now live and ready to attract clients!