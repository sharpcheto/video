# Video Content Portfolio

## Overview

This is a Next.js-based video content portfolio website designed for a video content creator specializing in short-form videos for social media platforms like Instagram, TikTok, and Facebook. The site serves as a professional portfolio and business showcase to attract potential clients and demonstrate expertise in video content creation.

## System Architecture

### Frontend Architecture
- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript for type safety
- **Styling**: Tailwind CSS for utility-first styling
- **Animation**: Framer Motion for smooth page transitions and interactions
- **Icons**: Lucide React for consistent iconography

### Component Structure
The application follows a component-based architecture with:
- Single-page application (SPA) structure
- Modular components for each section
- Responsive design for mobile and desktop
- Client-side rendering for interactive elements

## Key Components

### Core Sections
1. **Header** - Navigation with scroll-based styling changes
2. **Hero** - Main landing section with call-to-action
3. **About** - Personal introduction and statistics
4. **Services** - Service offerings with detailed descriptions
5. **Portfolio** - Showcase of previous work and results
6. **Testimonials** - Client reviews and success stories
7. **Contact** - Contact form and information
8. **Footer** - Social links and additional information

### UI Features
- Smooth scrolling navigation
- Responsive mobile menu
- Interactive animations on scroll
- Gradient text effects
- Hover animations and transitions
- Form handling capabilities

## Data Flow

### Client-Side State Management
- React hooks for component state (useState, useEffect)
- Form state management for contact form
- Scroll position tracking for header styling
- Mobile menu toggle state

### Content Management
- Static content embedded in components
- Placeholder image API for development
- No external CMS integration (content is hardcoded)

## External Dependencies

### Core Dependencies
- **next**: 14.0.4 - React framework
- **react**: ^18 - UI library
- **framer-motion**: ^10.16.16 - Animation library
- **lucide-react**: ^0.303.0 - Icon library
- **tailwindcss**: ^3.3.0 - CSS framework

### Development Tools
- **TypeScript**: ^5 - Type checking
- **ESLint**: ^8 - Code linting
- **Autoprefixer**: ^10.0.1 - CSS vendor prefixing
- **PostCSS**: ^8 - CSS processing

## Deployment Strategy

### Platform Configuration
- **Vercel**: Configured for deployment with vercel.json
- **Port**: Application runs on port 5000 (dev and production)
- **Build**: Standard Next.js build process
- **Static Generation**: Uses Next.js static generation capabilities

### Environment Setup
- No environment variables required
- No database connections
- No external API integrations (except placeholder images)

## Changelog
- July 08, 2025. Initial setup
- July 08, 2025. Complete Bulgarian translation and personalization for Ivaylo Stoyanov with enhanced color contrast system

## Recent Changes
- Translated entire portfolio website to Bulgarian language
- Personalized all branding from "VideoPro" to "Ивайло Стоянов" 
- Enhanced color contrast system with CSS custom properties for better accessibility
- Updated all navigation, content, forms, and testimonials to Bulgarian
- Improved button styling with consistent brand colors (blue/orange theme)
- Added Bulgarian contact information (Sofia, Bulgaria location, Bulgarian phone/email)
- Enhanced CSS with brand-specific color variables and utility classes

## User Preferences

Preferred communication style: Simple, everyday language.