# Contributing to Video Creator Portfolio

Thank you for considering contributing to this project! Here's how you can help make this portfolio website even better.

## 🚀 Getting Started

### Development Setup

1. Fork and clone the repository
2. Install dependencies: `npm install`
3. Copy environment variables: `cp .env.example .env`
4. Set up your database connection in `.env`
5. Run database migrations: `npm run db:push`
6. Start development server: `npm run dev`

### Project Structure

```
├── client/                 # Frontend React application
│   ├── src/
│   │   ├── components/    # Reusable UI components
│   │   ├── pages/         # Page components
│   │   ├── hooks/         # Custom React hooks
│   │   └── lib/           # Utility functions
├── server/                # Backend Express application
│   ├── index.ts          # Server entry point
│   ├── routes.ts         # API routes
│   └── storage.ts        # Data storage layer
├── shared/                # Shared types and schemas
└── migrations/           # Database migrations
```

## 🎨 Design Guidelines

### Brand Colors
- Primary: `--brand-indigo` (Purple-blue gradient)
- Secondary: `--brand-pink` (Pink accent)
- Accent: `--brand-amber` (Yellow-orange)

### Typography
- Use font weights: 400 (normal), 600 (semibold), 700 (bold)
- Maintain consistent spacing with Tailwind classes
- Headlines should be large and impactful

### Animations
- Use Framer Motion for smooth transitions
- Keep animations subtle and professional
- Test on mobile devices for performance

## 📝 Code Standards

### TypeScript
- Use strict type checking
- Define interfaces for all data structures
- Avoid `any` types

### React Components
- Use functional components with hooks
- Implement proper error boundaries
- Follow component naming conventions

### CSS/Styling
- Use Tailwind CSS utility classes
- Custom styles should be in `index.css`
- Ensure mobile-first responsive design

## 🧪 Testing

### Manual Testing Checklist
- [ ] All forms validate correctly
- [ ] Responsive design works on mobile/tablet/desktop
- [ ] Navigation smooth scrolling functions
- [ ] Contact form submits successfully
- [ ] All animations perform smoothly
- [ ] Social media links are functional

### Browser Support
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## 🚀 Deployment

### Build Process
```bash
npm run build    # Creates production build
npm start       # Serves production build
```

### Environment Variables
Required for production:
- `DATABASE_URL`: PostgreSQL connection string
- `NODE_ENV`: Set to "production"

## 📋 Submission Guidelines

### Pull Request Process
1. Create a feature branch from `main`
2. Make your changes with clear, descriptive commits
3. Test thoroughly on multiple devices
4. Update documentation if needed
5. Submit PR with detailed description

### Commit Messages
Use conventional commit format:
- `feat: add new portfolio section`
- `fix: resolve mobile navigation issue`
- `docs: update setup instructions`
- `style: improve button hover effects`

### Code Review
- All PRs require review before merging
- Address feedback constructively
- Keep PRs focused and reasonably sized

## 🐛 Bug Reports

### Before Reporting
1. Check existing issues
2. Test on latest version
3. Verify it's not a configuration issue

### Bug Report Template
```
**Describe the bug**
A clear description of what went wrong.

**To Reproduce**
Steps to reproduce the behavior.

**Expected behavior**
What should have happened.

**Screenshots**
If applicable, add screenshots.

**Environment:**
- OS: [e.g. Windows 10, macOS 12]
- Browser: [e.g. Chrome 95, Safari 14]
- Node.js version: [e.g. 18.0.0]
```

## 💡 Feature Requests

### Request Template
```
**Feature Description**
Clear description of the requested feature.

**Use Case**
Why would this feature be useful?

**Suggested Implementation**
Any ideas on how to implement this?

**Additional Context**
Screenshots, mockups, or references.
```

## 📞 Questions?

- Open an issue for technical questions
- Email hello@videocreator.com for general inquiries
- Check existing documentation first

## 🙏 Recognition

Contributors will be acknowledged in:
- README.md contributors section
- Release notes for significant contributions
- Project documentation

Thank you for helping make this project better!