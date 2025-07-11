# Storybook Documentation Site

This directory contains the configuration for the Storybook documentation site that gets deployed to GitHub Pages.

## 🌐 Live Site

The Storybook documentation is automatically deployed to GitHub Pages and available at:
**https://asudbury.github.io/use-fetch-with-callbacks/**

## 🚀 Local Development

To run Storybook locally:

```bash
npm run storybook
```

This will start the development server at `http://localhost:6006`

## 📦 Building for Production

To build Storybook for production:

```bash
npm run build-storybook
```

This creates a static build in the `storybook-static` directory.

## 🔧 Configuration Files

- **`main.ts`** - Main Storybook configuration
- **`preview.ts`** - Global parameters and decorators
- **`manager.ts`** - UI theme and manager configuration

## 📚 Stories Organization

Stories are organized in the following structure:

```
├── Introduction.stories.tsx       # Landing page and overview
├── BasicUsage.stories.tsx        # Simple examples
├── CrudOperations.stories.tsx    # REST API operations
├── RequestChaining.stories.tsx   # Sequential operations
├── Performance.stories.tsx       # Optimization techniques
└── Documentation.stories.tsx     # API reference
```

## 🎨 Theming

The Storybook site uses a custom theme defined in `manager.ts` with:

- Custom brand colors
- Typography settings
- Layout configuration
- Logo and branding

## 🚢 Deployment

Deployment happens automatically via GitHub Actions when pushing to the main branch. The workflow:

1. Builds the Storybook static site
2. Deploys to GitHub Pages
3. Makes it available at the GitHub Pages URL

## 📱 Features

The Storybook site includes:

- **Interactive Examples** - Live code examples with controls
- **API Documentation** - Complete API reference
- **Accessibility Testing** - Built-in a11y checks
- **Responsive Design** - Mobile, tablet, and desktop viewports
- **Performance Metrics** - Bundle size and optimization info
- **Search Functionality** - Easy navigation through content

## 🔗 Links

- [Storybook Documentation](https://storybook.js.org/docs)
- [GitHub Pages Setup](https://docs.github.com/en/pages)
- [Deployment Workflow](../.github/workflows/deploy-storybook.yml)
