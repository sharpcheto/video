# Video Creator Portfolio Website

A modern, responsive portfolio website for video content creators specializing in short-form social media content. Built with React, TypeScript, and Express.js.

## 🚀 Features

- **Modern Design**: Clean, professional layout with smooth animations
- **Mobile-First**: Fully responsive across all devices
- **Social Media Integration**: Ready for Instagram, TikTok, Facebook links
- **Lead Generation**: Contact form with budget selection and project details
- **Portfolio Showcase**: Display your best work with platform-specific branding
- **Client Testimonials**: Build trust with social proof
- **Smooth Navigation**: Fixed header with smooth scrolling to sections

## 🛠️ Tech Stack

### Frontend
- **React 18** with TypeScript
- **Tailwind CSS** for styling
- **Framer Motion** for animations
- **React Query** for state management
- **React Hook Form** with Zod validation
- **Radix UI** components

### Backend
- **Express.js** with TypeScript
- **Drizzle ORM** for database operations
- **PostgreSQL** for data storage
- **Zod** for validation

## 📦 Quick Start

### Local Development
```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

### Deploy to Vercel
1. Push code to GitHub
2. Connect repository to Vercel
3. Deploy automatically

The application will be available at `http://localhost:5000`

## 🎨 Customization

### Brand Colors
Update the CSS variables in `client/src/index.css`:
```css
:root {
  --brand-indigo: hsl(239, 84%, 67%);
  --brand-pink: hsl(327, 73%, 58%);
  --brand-amber: hsl(45, 93%, 47%);
}
```

### Content Updates
- **Hero Section**: Update text and stats in `client/src/components/hero-section.tsx`
- **About Section**: Modify personal information in `client/src/components/about-section.tsx`
- **Services**: Update service offerings in `client/src/components/services-section.tsx`
- **Portfolio**: Add your work examples in `client/src/components/portfolio-section.tsx`
- **Testimonials**: Replace with real client reviews in `client/src/components/testimonials-section.tsx`

### Social Media Links
Update social media URLs in:
- `client/src/components/contact-section.tsx`
- `client/src/components/footer.tsx`
- `client/src/components/portfolio-section.tsx`

## 🚀 Vercel Deployment

This project is optimized for Vercel deployment:

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

Environment variables to set in Vercel:
- `DATABASE_URL`: PostgreSQL connection string (optional for demo)

## 📊 Database Schema

The contact form stores:
- Personal information (name, email, company)
- Project budget range
- Project details and timeline
- Submission timestamp

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.