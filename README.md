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

## 📦 Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd video-creator-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env
```

4. Configure your database URL in `.env`:
```
DATABASE_URL=your_postgresql_connection_string
```

5. Run database migrations:
```bash
npm run db:push
```

6. Start the development server:
```bash
npm run dev
```

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

## 📱 Sections Overview

1. **Hero Section**: Compelling headline with call-to-action buttons
2. **About Section**: Personal introduction and skills showcase
3. **Services Section**: Three main service offerings with detailed features
4. **Portfolio Section**: Work examples with platform-specific branding
5. **Testimonials Section**: Client reviews with star ratings
6. **Contact Section**: Lead generation form with budget selection
7. **Footer**: Additional links and contact information

## 🚀 Deployment

### Development
```bash
npm run dev
```

### Production Build
```bash
npm run build
npm start
```

### Environment Variables
Required environment variables:
- `DATABASE_URL`: PostgreSQL connection string
- `NODE_ENV`: Set to 'production' for production builds

## 📊 Database Schema

The contact form stores:
- Personal information (name, email, company)
- Project budget range
- Project details and timeline
- Submission timestamp

## 🎯 SEO Optimization

- Semantic HTML structure
- Meta tags for social sharing
- Optimized images with alt text
- Fast loading with code splitting
- Mobile-friendly design

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📞 Support

For support, email hello@videocreator.com or create an issue in this repository.

## 🔗 Links

- [Live Demo](https://your-demo-url.com)
- [Documentation](https://your-docs-url.com)
- [Report Bug](https://github.com/yourusername/repo/issues)
- [Request Feature](https://github.com/yourusername/repo/issues)