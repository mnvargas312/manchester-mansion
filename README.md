# Manchester Mansion - Cheney Mansion

A React application for Cheney Mansion website, designed to be hosted on GitHub Pages.

## Features

- Responsive design with black and gold color scheme
- Hero section with call-to-action buttons
- About section with content columns
- Footer with contact information and newsletter signup
- Smooth scrolling navigation
- Scroll-to-top functionality

## Setup

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm start
```

3. Build for production:
```bash
npm run build
```

## Deployment to GitHub Pages

1. Update the `homepage` field in `package.json` with your GitHub username:
```json
"homepage": "https://yourusername.github.io/manchester-mansion"
```

2. Deploy to GitHub Pages:
```bash
npm run deploy
```

This will create a `gh-pages` branch and deploy your app to GitHub Pages.

## Adding Images

Replace the placeholder image divs with actual image tags:

1. **Hero Section** (`src/components/Hero.js`):
   - Replace the `.hero-image-placeholder` div with:
   ```jsx
   <img src="/images/hero-image.jpg" alt="Mansion" className="hero-image" />
   ```

2. **About Section** (`src/components/About.js`):
   - Replace `.about-image-placeholder` with:
   ```jsx
   <img src="/images/building.jpg" alt="Building" className="about-image" />
   ```
   - Replace `.about-interior-image-placeholder` with:
   ```jsx
   <img src="/images/interior.jpg" alt="Interior" className="about-interior-image" />
   ```

3. Place your images in the `public/images/` directory.

## Customization

- Update text content in the component files
- Modify colors in the CSS files (currently using black `#000000` and gold `#d4af37`)
- Replace the placeholder logo with your actual logo image
- Update contact information in the Header and Footer components

## Technologies

- React 18
- React Scripts
- CSS3
- GitHub Pages
