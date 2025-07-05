# 🌐 GitHub Pages Setup Guide

This guide will help you set up Storybook as a GitHub Pages site for your `useFetchWithCallbacks` package.

## 📋 Prerequisites

Before setting up GitHub Pages, ensure you have:

1. ✅ A GitHub repository for your project
2. ✅ The code committed and pushed to GitHub
3. ✅ GitHub Pages enabled in repository settings

## 🔧 Setup Steps

### 1. Enable GitHub Pages

1. Go to your repository on GitHub
2. Click on **Settings** tab
3. Scroll down to **Pages** section (left sidebar)
4. Under **Source**, select **GitHub Actions**
5. Save the settings

### 2. Configure Repository Settings

Make sure these settings are correct in your repository:

- **Public repository** (or GitHub Pro/Enterprise for private repos)
- **Actions enabled** in Settings → Actions → General

### 3. Update Configuration

Update the base path in `.storybook/main.ts`:

```typescript
viteFinal: async (config) => {
  if (process.env.NODE_ENV === 'production') {
    config.base = '/use-fetch-with-callbacks/'; // ← Change this to your actual repo name
  }
  return config;
},
```

### 4. Update Branding

Update the brand URL in `.storybook/manager.ts`:

```typescript
const theme = create({
  // ...
  brandUrl: 'https://github.com/asudbury/use-fetch-with-callbacks',
  // ...
});
```

## 🚀 Deployment

### Automatic Deployment

The site will automatically deploy when you:

1. Push to the `main` branch
2. The GitHub Action will build and deploy Storybook
3. Your site will be available at: `https://asudbury.github.io/use-fetch-with-callbacks/`

### Manual Deployment

You can also deploy manually:

```bash
# Install dependencies
npm install gh-pages http-server --save-dev

# Build and deploy
npm run deploy:storybook
```

## 📁 What Gets Deployed

The following files/folders are deployed to GitHub Pages:

```
storybook-static/
├── index.html              # Main Storybook entry point
├── iframe.html             # Story iframe
├── assets/                 # CSS, JS, and other assets
│   ├── *.js               # JavaScript bundles
│   ├── *.css              # Stylesheets
│   └── ...
└── sb-common-assets/      # Storybook common assets
```

## 🔗 Site Structure

Your GitHub Pages site will have this structure:

- **Landing Page**: Introduction and overview
- **Examples**: 
  - Basic Usage
  - CRUD Operations  
  - Request Chaining
  - Performance Optimization
- **Documentation**: Complete API reference

## 🎨 Customization

### Theming

The site uses a custom theme defined in `.storybook/manager.ts`:

- Primary colors: Blue gradient
- Typography: System fonts with fallbacks
- Layout: Bottom panel with controls tab selected

### Content Organization

Stories are organized hierarchically:

```
Introduction
├── Welcome
Examples
├── Basic Usage
├── CRUD Operations
├── Request Chaining
Advanced
├── Performance Optimization
Documentation
├── API Reference
```

## 📊 Site Features

Your Storybook GitHub Pages site includes:

### 🔍 **Interactive Examples**
- Live code playground
- Real API calls to JSONPlaceholder
- Editable parameters and controls

### 📱 **Responsive Design**
- Mobile, tablet, and desktop viewports
- Responsive story examples
- Optimized for all screen sizes

### ♿ **Accessibility Testing**
- Built-in a11y addon
- Accessibility violations detection
- WCAG compliance checking

### 🎯 **Performance Monitoring**
- Bundle size analysis
- Render count tracking
- Performance optimization examples

### 🔧 **Developer Tools**
- Measure tool for layouts
- Outline tool for debugging
- Viewport simulation

## 📈 Analytics & Monitoring

Consider adding:

### Google Analytics

Add to `.storybook/manager-head.html`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

### GitHub Pages Analytics

Monitor via:
- GitHub repository insights
- GitHub Pages traffic analytics
- External tools like Google Search Console

## 🚨 Troubleshooting

### Common Issues

**404 Errors**
- Check the base path in `main.ts`
- Ensure repository name matches the path

**Build Failures**
- Check GitHub Actions logs
- Verify all dependencies are installed
- Check for TypeScript errors

**Assets Not Loading**
- Verify base path configuration
- Check for CORS issues
- Ensure all assets are properly bundled

**Deployment Delays**
- GitHub Pages can take 5-10 minutes to update
- Check the Actions tab for build status
- Clear browser cache if needed

### Getting Help

- [Storybook Documentation](https://storybook.js.org/docs)
- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [GitHub Actions Documentation](https://docs.github.com/en/actions)

## ✅ Verification Checklist

After setup, verify:

- [ ] Site loads at the GitHub Pages URL
- [ ] All stories render correctly
- [ ] Interactive examples work
- [ ] API calls function properly
- [ ] Responsive design works on mobile
- [ ] Accessibility addon functions
- [ ] Navigation between stories works
- [ ] External links open correctly

## 🎯 Next Steps

After successful deployment:

1. **Update README**: Add the GitHub Pages link
2. **Social Sharing**: Share the interactive documentation
3. **SEO**: Add meta tags for better discovery
4. **Monitoring**: Set up analytics and performance monitoring
5. **Feedback**: Collect user feedback and iterate

Your Storybook documentation site is now live and ready to showcase your React hook! 🎉
