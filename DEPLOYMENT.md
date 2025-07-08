# Deployment Guide

This guide covers deploying your Video Creator Portfolio website to various hosting platforms.

## 🚀 Quick Deploy Options

### Replit Deployment (Recommended)
1. Open your project in Replit
2. Click the "Deploy" button in the top bar
3. Configure your environment variables
4. Your site will be live at `https://your-project-name.replit.app`

### Vercel Deployment
1. Install Vercel CLI: `npm i -g vercel`
2. Run `vercel` in your project directory
3. Follow the prompts to deploy
4. Configure environment variables in Vercel dashboard

### Netlify Deployment
1. Connect your Git repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `dist/public`
4. Add environment variables in Netlify dashboard

## 🔧 Environment Setup

### Required Environment Variables
```bash
DATABASE_URL=your_postgresql_connection_string
NODE_ENV=production
PORT=5000
```

### Database Setup
1. Create a PostgreSQL database (recommended: Neon, Supabase, or Railway)
2. Run migrations: `npm run db:push`
3. Verify tables are created correctly

## 📦 Build Configuration

### Production Build
```bash
npm run build
```

This creates:
- `dist/public/` - Frontend static files
- `dist/index.js` - Backend server bundle

### Static File Serving
The Express server automatically serves built frontend files in production.

## 🔍 Pre-Deployment Checklist

- [ ] Database connection string is valid
- [ ] Environment variables are set
- [ ] Build process completes successfully
- [ ] Contact form submits correctly
- [ ] All images load properly
- [ ] Social media links work
- [ ] Mobile responsiveness tested
- [ ] SSL certificate is configured

## 🛠️ Platform-Specific Instructions

### Heroku
1. Create `Procfile`:
```
web: npm start
```

2. Set environment variables:
```bash
heroku config:set DATABASE_URL=your_connection_string
heroku config:set NODE_ENV=production
```

3. Deploy:
```bash
git push heroku main
```

### Railway
1. Connect your GitHub repository
2. Set environment variables in Railway dashboard
3. Deploy automatically on git push

### DigitalOcean App Platform
1. Create new app from GitHub repository
2. Configure build settings:
   - Build command: `npm run build`
   - Run command: `npm start`
3. Add environment variables

## 📊 Monitoring & Analytics

### Performance Monitoring
- Use Lighthouse for performance audits
- Monitor Core Web Vitals
- Set up error tracking (Sentry recommended)

### Analytics Setup
Add analytics tracking to `client/src/main.tsx`:
```typescript
// Google Analytics example
import { GoogleAnalytics } from 'your-analytics-package';

// Initialize in your app
```

## 🔒 Security Considerations

### Production Security
- Use HTTPS only
- Set secure headers
- Validate all user inputs
- Use environment variables for secrets
- Regular dependency updates

### Database Security
- Use connection pooling
- Implement proper backups
- Monitor for suspicious activity
- Use read replicas for scalability

## 🚨 Troubleshooting

### Common Issues

**Build Fails**
- Check Node.js version compatibility
- Verify all dependencies are installed
- Review build logs for specific errors

**Database Connection Issues**
- Verify connection string format
- Check network connectivity
- Ensure database server is running

**Static Files Not Loading**
- Verify build output in `dist/public/`
- Check server static file configuration
- Ensure correct file paths

**Form Submissions Failing**
- Check API route configuration
- Verify database schema matches
- Review server logs for errors

### Debug Mode
Enable debug logging:
```bash
DEBUG=* npm start
```

## 📱 Mobile Optimization

### Performance
- Image optimization
- Code splitting
- Lazy loading
- CDN usage

### Testing
- Test on real devices
- Use browser dev tools
- Check loading speeds
- Verify touch interactions

## 🔄 Continuous Deployment

### GitHub Actions Example
```yaml
name: Deploy
on:
  push:
    branches: [main]
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Deploy to production
        run: |
          npm install
          npm run build
          # Your deployment commands
```

## 📞 Support

For deployment issues:
- Check the troubleshooting section
- Review platform-specific documentation
- Open an issue in the repository
- Email hello@videocreator.com

## 🎉 Post-Deployment

### Final Steps
1. Test all functionality on live site
2. Submit to search engines
3. Set up monitoring alerts
4. Share your new portfolio!

### Maintenance
- Regular security updates
- Monitor performance metrics
- Backup database regularly
- Update content as needed