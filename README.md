# SingRank - Professional Digital Marketing Agency Website

This is a modern, professional website for a digital marketing agency built with Next.js and TailwindCSS. The design emphasizes trust, expertise, and results with a clean and professional aesthetic.

## Features

- **Professional Trust-Oriented Design**: Clean layout with blue color scheme that symbolizes trust and reliability
- **Responsive Design**: Fully responsive on all devices
- **Animated Elements**: Subtle animations using Framer Motion for enhanced engagement
- **Modern UI Components**: Professional cards, buttons, and form elements
- **Interactive Elements**: Hover effects and transitions for improved user experience
- **SEO Optimized**: Proper metadata and structure for better search engine visibility
- **SEO Auto Generator**: Intelligent fallback system that auto-generates SEO metadata and schema markup when fields are empty
- **Digital Loading Effect**: Welcome animation with "Welcome to SingRank! Dominate your Ranking now!" message
- **Performance Charts**: Interactive data visualizations showing SEO results and analytics
- **Mobile-Optimized Footer**: Specially designed compact footer for better mobile experience
- **Netlify CMS Integration**: Content management system for easy blog updates with Git-based workflow

## Recent Improvements

- **Enhanced Mobile Responsiveness**: Significantly improved layouts for smaller screens
- **Digital Loading Animation**: Added a sophisticated welcome animation with branding message
- **SEO Fallback System**: New intelligent system that auto-generates SEO metadata when editors forget to fill them in
- **Performance Optimizations**: Implemented lazy loading for charts and heavy components
- **Button Component Refinements**: Improved type definitions and animation properties
- **SEO Title/Metadata Updates**: Optimized page metadata for better search visibility
- **Singapore-Inspired Color Scheme**: Updated design elements with Singapore-inspired colors

## Pages

- **Home**: Main landing page showcasing key services and value proposition
- **Services**: Detailed information about offered services
- **About**: Information about the company, team, and mission
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

## CMS Integration

This project includes integration with Netlify CMS for content management:

### Features
- **Git-Based Workflow**: All content is stored in your Git repository
- **User-Friendly Interface**: Easy-to-use admin UI for content editing
- **Media Management**: Upload and manage images through the CMS
- **Netlify Identity Authentication**: Secure access to the admin area

### How to Access
1. Deploy the site to Netlify
2. Enable Netlify Identity in your Netlify dashboard
3. Enable Git Gateway for repository access
4. Access the CMS at `/admin` on your deployed site

### Content Structure
- Blog posts are stored in `content/blog` directory
- Media files are uploaded to `public/images/uploads`

For detailed setup instructions, refer to `NETLIFY_IDENTITY_SETUP.md`

## SEO Features

SingRank implements comprehensive SEO optimization for blog posts, making your content more visible to search engines and shareable on social media platforms.

### Key SEO Features

- **Metadata Optimization**: Each blog post can have custom meta title, description, focus keywords, and canonical URL.
- **Structured Data**: Support for Article and FAQ structured data (JSON-LD) to enhance search engine results.
- **Social Sharing**: Customizable Open Graph and Twitter Card metadata for optimal sharing experience.
- **Dynamic Metadata Generation**: Uses Next.js App Router metadata API for efficient, server-side generation.
- **SEO-Friendly URLs**: Clean, descriptive URLs for better search engine visibility.

### Using SEO Features

1. Add SEO metadata to your blog post frontmatter:

```yaml
seo:
  metaTitle: "Your SEO-Optimized Title | SingRank"
  metaDescription: "Your compelling meta description that encourages clicks (150-160 characters)."
  focusKeywords: "main keyword, secondary keyword, long-tail keyword"
  canonical: "https://singrank.com/blog/your-post-slug"
  noIndex: false
```

2. Add social sharing metadata:

```yaml
socialSharing:
  ogTitle: "Title for Facebook/LinkedIn Sharing"
  ogDescription: "Description for when your post is shared on social platforms"
  ogImage: "/path/to/social-image.jpg"
  twitterTitle: "Twitter-specific title"
  twitterDescription: "Twitter-specific description"
  twitterCardType: "summary_large_image"
```

3. Add structured data (optional):

```yaml
structuredData:
  articleType: "BlogPosting"
  dateModified: "2023-07-20"
  faq:
    - question: "Frequently asked question?"
      answer: "Answer to the frequently asked question."
```

For detailed documentation on SEO implementation, see [SEO_GUIDE.md](./SEO_GUIDE.md).

## Netlify CMS Integration

### Petunjuk Penggunaan CMS

Website ini terintegrasi dengan Netlify CMS, yang memungkinkan pengelolaan konten blog melalui antarmuka admin yang user-friendly. Semua artikel blog yang dibuat melalui CMS secara otomatis akan muncul di halaman blog website.

#### Mengakses Admin Panel

1. Buka `/admin` pada website (contoh: `https://singrank.com/admin`)
2. Login menggunakan akun yang telah diotorisasi

#### Membuat Artikel Baru

1. Klik "Blog Post" pada sidebar
2. Klik tombol "New Blog Post"
3. Isi formulir artikel dengan informasi yang relevan:
   - **Title**: Judul artikel
   - **URL Slug**: URL untuk artikel (otomatis diisi berdasarkan tanggal dan judul)
   - **Publish Date**: Tanggal publikasi
   - **Featured Image**: Gambar utama artikel
   - **Author**: Penulis artikel
   - **Excerpt**: Ringkasan singkat artikel (opsional, akan dibuat otomatis jika tidak diisi)
   - **Read Time**: Waktu baca (opsional, akan dihitung otomatis jika tidak diisi)
   - **Content**: Konten utama artikel dalam format Markdown
   - **SEO Settings**: Pengaturan SEO (opsional, akan dihasilkan otomatis jika tidak diisi)
   - **Tags & Categories**: Tag dan kategori untuk artikel

4. Klik "Save" untuk menyimpan sebagai draft
5. Klik "Publish" untuk mempublikasikan artikel langsung

#### Sinkronisasi dengan Blog

Semua artikel yang diterbitkan melalui CMS akan:

1. Disimpan sebagai file Markdown di direktori `content/blog/`
2. Secara otomatis muncul di halaman blog utama (`/blog`)
3. Memiliki halaman detail sendiri (`/blog/[slug]`)
4. Ditampilkan sebagai artikel terbaru di halaman beranda (3 artikel terkini)

#### Fitur Auto-Generate SEO

CMS ini dilengkapi dengan fitur Auto-Generate SEO yang memungkinkan:

1. Pembuatan otomatis SEO metadata jika tidak diisi manual
2. Pembuatan otomatis schema markup berdasarkan jenis artikel
3. Perhitungan waktu baca otomatis
4. Pembuatan excerpt otomatis dari konten artikel

Untuk detail lebih lanjut tentang fitur ini, silakan lihat [SEO_FALLBACK_GUIDE.md](./SEO_FALLBACK_GUIDE.md).

### Struktur File CMS

- **Konfigurasi**: `/public/admin/config.yml`
- **Admin Page**: `/public/admin/index.html`
- **Post Storage**: `/content/blog/`
- **Media Storage**: `/public/images/uploads/`

### Kustomisasi CMS

Untuk menyesuaikan tampilan atau fungsionalitas CMS:

1. Edit file `config.yml` untuk mengubah koleksi, field, atau konfigurasi backend
2. Edit file `index.html` untuk menyesuaikan tampilan admin
3. Tambahkan widget kustom di direktori `/public/admin/`

Untuk panduan lengkap tentang konfigurasi Netlify CMS, lihat [dokumentasi resmi Netlify CMS](https://www.netlifycms.org/docs/intro/).
