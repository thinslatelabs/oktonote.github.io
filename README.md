# OktoNote Landing Page

A fast-loading, single-page static website for oktonote.app with links to the iOS App Store, Google Play Store, and web application.

## Features

- ⚡ **Ultra-fast loading** - Critical CSS inlined, minimal JavaScript
- 📱 **Fully responsive** - Works perfectly on all devices
- 🎨 **Consistent design** - Uses exact same colors and typography as the main app
- 🚀 **Static site** - No build process needed, can be served by any file server
- 🔗 **App store links** - Direct links to iOS and Android apps (placeholders for now)
- 🌐 **Web app integration** - Links to app.oktonote.app

## Design System

Uses the same design tokens as the main OktoNote app:

- **Typography**: Courier Prime (heading & body)
- **Colors**: PrinterDesignSystem palette
- **Primary**: #4B5EAA
- **Background**: #E8EAED (paper-like)
- **Text**: #2C3E50 (headings), #34495E (body)

## Quick Start

### Development
```bash
cd landing-page
npm install
npm run dev
```

Visit http://localhost:3000

### Production Deployment

Since this is a static site, simply upload `index.html` to any static hosting service:

- **Netlify**: Drag and drop the file
- **Vercel**: Deploy from Git or drag and drop
- **AWS S3**: Upload to S3 bucket with static hosting
- **GitHub Pages**: Commit to repository
- **Any web server**: Serve the file directly

### Domain Setup

This site should be hosted at **oktonote.app** (the main domain).

## File Structure

```
landing-page/
├── index.html          # Complete single-page site (self-contained)
├── package.json        # Development dependencies
└── README.md          # This file
```

## Links Configuration

- **Web App**: https://app.oktonote.app
- **App Store**: Placeholder (update when iOS app is published)
- **Google Play**: Placeholder (update when Android app is published)
- **Support Email**: support@oktonote.app

## Performance Features

1. **Critical CSS inlined** - No external stylesheets to block rendering
2. **Preloaded fonts** - Courier Prime loaded optimally
3. **Minimal JavaScript** - Only for scroll animations and smooth scrolling
4. **Optimized images** - Uses emoji icons for fast loading
5. **Mobile-first responsive** - Perfect on all screen sizes

## Updating App Store Links

When the mobile apps are ready:

1. Replace the placeholder App Store link in `index.html`
2. Replace the placeholder Google Play link in `index.html`
3. Remove the `onclick="alert(...)"` attributes
4. Add the actual store URLs

Example:
```html
<!-- Replace this -->
<a href="#" class="app-btn" onclick="alert('Coming soon!')">

<!-- With this -->
<a href="https://apps.apple.com/app/oktonote/idXXXXXXX" class="app-btn">
```

## SEO Optimized

- Semantic HTML structure
- Meta description included
- Proper heading hierarchy
- Fast loading for better search rankings