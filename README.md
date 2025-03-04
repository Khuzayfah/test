# SingRank - Professional Digital Marketing Agency Website

This is a modern, professional website for a digital marketing agency built with Next.js and TailwindCSS. The design emphasizes trust, expertise, and results with a clean and professional aesthetic.

## Features

- **Professional Trust-Oriented Design**: Clean layout with blue color scheme that symbolizes trust and reliability
- **Responsive Design**: Fully responsive on all devices
- **Animated Elements**: Subtle animations using Framer Motion for enhanced engagement
- **Modern UI Components**: Professional cards, buttons, and form elements
- **Interactive Elements**: Hover effects and transitions for improved user experience
- **SEO Optimized**: Proper metadata and structure for better search engine visibility
- **Digital Loading Effect**: Welcome animation with "Welcome to SingRank! Dominate your Ranking now!" message
- **Performance Charts**: Interactive data visualizations showing SEO results and analytics
- **Mobile-Optimized Footer**: Specially designed compact footer for better mobile experience

## Recent Improvements

- **Enhanced Mobile Responsiveness**: Significantly improved layouts for smaller screens
- **Digital Loading Animation**: Added a sophisticated welcome animation with branding message
- **Performance Optimizations**: Implemented lazy loading for charts and heavy components
- **Button Component Refinements**: Improved type definitions and animation properties
- **SEO Title/Metadata Updates**: Optimized page metadata for better search visibility
- **Singapore-Inspired Color Scheme**: Updated design elements with Singapore-inspired colors

## Pages

- **Home**: Main landing page showcasing key services and value proposition
- **Services**: Detailed information about offered services
- **Projects**: Portfolio of successful projects and case studies
- **Blog**: Articles and insights about digital marketing
- **Contact**: Contact form and information

## Tech Stack

- **Next.js**: React framework for production
- **React**: JavaScript library for building user interfaces
- **TailwindCSS**: Utility-first CSS framework
- **Framer Motion**: Animation library for React
- **TypeScript**: Static type checking
- **Recharts**: Composable charting library for data visualization

## Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/your-username/singrank.git
```

2. Install dependencies
```bash
npm install
# or
yarn install
```

3. Run the development server
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Known Issues

- There are TypeScript errors related to React.ReactNode type compatibility in some components. These don't affect the functionality but will prevent a production build.
- Due to the presence of multiple source directories (`app/` and `singrank/`), there might be confusion about which is the primary source. The main source is in the `app/` directory.
- When developing, you may see multiple ports being used (3000-3004) if you start the development server multiple times without stopping previous instances.

## Customization

- Edit the color scheme in `globals.css`
- Modify content in the page files under `/app`
- Add or remove sections in the home page components

### Color Palette

The website uses the Singapore Government Design System (SGDS) color palette:

**Brand Colors:**
- Primary: #7857FF (Purple)
- Secondary: #1F69FF (Blue)

**System Colors:**
- Blue: #0F71BB
- Amber: #F79009
- Green: #0A8217
- Red: #D7260F

These colors are defined in both `tailwind.config.js` and `globals.css` for consistent use throughout the application.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Design inspiration from leading digital marketing agencies
- Icons from various free icon libraries

## Project Structure

```
NextJs/
├── app/               # Next.js app router
│   ├── components/    # Reusable UI components
│   │   ├── ui/        # Base UI components
│   │   ├── Navbar.tsx # Navigation component
│   │   └── Footer.tsx # Footer component
│   ├── sections/      # Page sections
│   │   └── home/      # Home page sections
│   ├── styles/        # Global styles
│   ├── globals.css    # Global CSS
│   ├── layout.tsx     # Root layout
│   └── page.tsx       # Home page
├── public/            # Static assets
├── .gitignore         # Git ignore file
├── next.config.js     # Next.js configuration
├── package.json       # Project dependencies
├── README.md          # Project documentation
└── tsconfig.json      # TypeScript configuration
```

## UI Components

### Card Component

A versatile card component with hover effects, gold borders, and icon support.

```tsx
<Card 
  hoverEffect={true} 
  goldBorder={true}
  icon={<span className="text-amber-500">✦</span>}
  iconPosition="top"
  darkBackground={true}
  className="p-6"
>
  Your content here
</Card>
```

#### Props

- `children`: React nodes to render inside the card (required)
- `className`: Additional CSS classes
- `hoverEffect`: Enable hover animation (default: `false`)
- `goldBorder`: Add gold border styling (default: `false`)
- `icon`: Icon to display (optional)
- `iconPosition`: Position of the icon - "top", "top-left", or "top-right" (default: `"top"`)
- `onClick`: Click handler function (optional)
- `darkBackground`: Use darker background for more contrast (default: `false`)

### Button Component

A customizable button component with multiple variants and animations.

```tsx
<Button 
  variant="primary" 
  size="md" 
  icon={<span>✦</span>}
  luxuryAnimation={true}
  onClick={() => handleAction()}
>
  Click Me
</Button>
```

#### Props

- `children`: Button text/content (required)
- `variant`: Button style - "primary", "secondary", or "outline" (default: `"primary"`)
- `size`: Button size - "sm", "md", or "lg" (default: `"md"`)
- `icon`: Icon to display in button (optional)
- `fullWidth`: Make button full width (default: `false`)
- `isLoading`: Show loading spinner (default: `false`)
- `luxuryAnimation`: Enable luxury hover animation (default: `false`)

### Navbar Component

A responsive navigation bar with mobile menu support.

```tsx
<Navbar />
```

The navbar uses a configuration array to define navigation items:

```tsx
const navigation = [
  { name: 'Home', href: '/', icon: '🏠' },
  { name: 'Services', href: '/services', icon: '⚙️' },
  { name: 'Projects', href: '/projects', icon: '📂' },
  { name: 'Blog', href: '/blog', icon: '📝' },
  { name: 'Contact', href: '/contact', icon: '📞' },
];
```

## CSS Utilities

### Glass Effect

Add a glass-like transparency effect to elements.

```html
<div className="glass-effect">
  Content with glass effect
</div>
```

### Gold Accents

Various gold accent classes for luxury styling.

```html
<span className="gold-text">Luxury gold text</span>
<a href="#" className="gold-link">Luxury link</a>
<div className="gold-border">Element with gold border</div>
<div className="gold-shimmer">Element with gold shimmer effect</div>
```

### Animations

Pre-defined animations classes for elements.

```html
<div className="luxury-entrance">Animated entrance</div>
<div className="fade-up">Fade up animation</div>
<div className="premium-hover">Hover effect</div>
<div className="scale-animation">Scale on hover</div>
```
## Building for Production

1. Build the application:
```bash
npm run build
# or
yarn build
```

2. Start the production server:
```bash
npm run start
# or
yarn start
```

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Credits

Created with ❤️ by [Khuzayfah] 
