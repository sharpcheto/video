# Video Creator Portfolio Website

## Overview

This is a full-stack web application for a video content creator specializing in short-form social media content. The application features a modern, responsive portfolio website with a contact form system. It's built with React on the frontend and Express.js on the backend, using PostgreSQL for data persistence.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS with custom CSS variables for theming
- **UI Components**: Radix UI primitives with shadcn/ui component library
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: React Query (TanStack Query) for server state management
- **Form Handling**: React Hook Form with Zod validation
- **Animations**: Framer Motion for smooth page transitions and animations
- **Icons**: Lucide React icons and React Icons for social media icons

### Backend Architecture
- **Framework**: Express.js with TypeScript
- **Database**: PostgreSQL with Drizzle ORM
- **Validation**: Zod for request/response validation
- **Session Management**: Connect-pg-simple for PostgreSQL-based sessions
- **Development**: Vite for development server and hot reloading

### Build System
- **Bundler**: Vite for frontend, esbuild for backend
- **Development**: Single command development with concurrent frontend/backend
- **Production**: Optimized builds with static file serving

## Key Components

### Database Schema
- **Contacts Table**: Stores contact form submissions with fields for personal information, company details, budget, and messages
- **Schema Definition**: Located in `shared/schema.ts` using Drizzle ORM with Zod validation

### API Endpoints
- `POST /api/contacts` - Submit contact form
- `GET /api/contacts` - Retrieve all contacts (admin functionality)

### Frontend Pages
- **Home Page**: Complete portfolio website with sections for hero, about, services, portfolio, testimonials, and contact
- **404 Page**: Custom not found page

### UI Components
- **Navigation**: Fixed navigation with smooth scrolling
- **Hero Section**: Eye-catching landing area with call-to-action buttons
- **About Section**: Personal introduction with skills showcase
- **Services Section**: Three-column service offerings with gradient backgrounds
- **Portfolio Section**: Grid layout showcasing work samples with platform-specific branding
- **Testimonials Section**: Client testimonials with rating displays
- **Contact Section**: Comprehensive contact form with validation
- **Footer**: Links and social media integration

## Data Flow

1. **User Interaction**: Users browse the portfolio website and fill out the contact form
2. **Form Submission**: Contact form data is validated client-side using React Hook Form and Zod
3. **API Request**: Form data is sent to the Express.js backend via POST request
4. **Server Validation**: Backend validates the request using the same Zod schema
5. **Data Storage**: Currently using in-memory storage (MemStorage class) for development
6. **Response**: Success/error response sent back to frontend
7. **User Feedback**: Toast notifications inform users of submission status

## External Dependencies

### Frontend Dependencies
- **UI Framework**: React, ReactDOM
- **Styling**: Tailwind CSS, PostCSS, Autoprefixer
- **UI Components**: Radix UI primitives, shadcn/ui components
- **State Management**: TanStack React Query
- **Form Handling**: React Hook Form, Hookform Resolvers
- **Validation**: Zod, Drizzle-Zod
- **Animations**: Framer Motion
- **Routing**: Wouter
- **Icons**: Lucide React, React Icons
- **Utilities**: clsx, class-variance-authority, date-fns

### Backend Dependencies
- **Server Framework**: Express.js
- **Database**: Drizzle ORM, @neondatabase/serverless
- **Validation**: Zod
- **Session Management**: Connect-pg-simple
- **Development**: tsx, esbuild

### Development Tools
- **Build System**: Vite, esbuild
- **Type Checking**: TypeScript
- **Database Migrations**: Drizzle Kit
- **Development Enhancement**: Replit-specific plugins for error handling and development experience

## Deployment Strategy

### Development Environment
- **Command**: `npm run dev` starts both frontend and backend concurrently
- **Frontend**: Vite dev server with HMR at client root
- **Backend**: Express server with tsx for TypeScript execution
- **Database**: PostgreSQL via environment variable DATABASE_URL

### Production Build
- **Frontend**: `vite build` creates optimized static files in `dist/public`
- **Backend**: `esbuild` bundles server code to `dist/index.js`
- **Static Serving**: Express serves built frontend files in production
- **Database**: PostgreSQL production database via DATABASE_URL

### Database Setup
- **Schema**: Defined in `shared/schema.ts`
- **Migrations**: Generated in `./migrations` directory
- **Push Command**: `npm run db:push` applies schema changes to database

## Changelog

```
Changelog:
- July 08, 2025. Initial setup and complete portfolio website implementation
- July 08, 2025. Fixed LSP error in storage.ts for company field handling
- July 08, 2025. Created comprehensive repository documentation (README, CONTRIBUTING, DEPLOYMENT, CHANGELOG)
- July 08, 2025. Added environment configuration and improved .gitignore
```

## User Preferences

```
Preferred communication style: Simple, everyday language.
```