# Changelog

Semua perubahan penting pada proyek ini akan didokumentasikan di file ini.

## [Unreleased]

### Added
- Integrasi Netlify CMS dengan Netlify Identity untuk manajemen konten blog
- File konfigurasi `netlify.toml` untuk pengaturan deploy dan Netlify Identity
- Dokumentasi setup Netlify Identity di `NETLIFY_IDENTITY_SETUP.md`
- Script Netlify Identity di layout utama aplikasi untuk autentikasi CMS
- Informasi CMS di README.md
- Panel debug untuk Netlify CMS di halaman admin
- Fungsi debug Git Gateway (`netlify/functions/git-gateway-debug.js`)
- Dokumentasi troubleshooting Git Gateway di `GIT_GATEWAY_TROUBLESHOOTING.md`

### Changed
- Layout aplikasi untuk mendukung Netlify Identity widget
- Optimasi script dengan menggunakan next/script untuk menghindari peringatan linter
- Pengaturan backend di `public/admin/config.yml` untuk memperbaiki koneksi Git Gateway
- Konfigurasi redirects untuk Git Gateway dan Identity di `netlify.toml`

### Fixed
- Memperbaiki masalah synchronous script dengan menggunakan komponan Script dari Next.js
- Menerapkan strategy="afterInteractive" untuk script yang tidak kritis
- Menambahkan logging dan debugging untuk mempermudah identifikasi masalah Git Gateway
- Memperbarui endpoint API di konfigurasi untuk mengatasi masalah konektivitas

## [1.2.0] - 2024-03-07

### Added
- Implementasi SEO komprehensif untuk blog post
  - Komponen BlogSEO untuk structured data (JSON-LD)
  - Support untuk metadata SEO di markdown frontmatter
  - Integrasi dengan Next.js App Router metadata API
  - Dukungan untuk OpenGraph dan Twitter Cards
  - Structured data untuk artikel dan FAQ
- Contoh blog post dengan metadata SEO lengkap
- Penanganan error yang lebih baik di halaman blog

### Changed
- Fungsi blog.js diperbarui untuk mendukung field SEO
- Halaman blog post diperbarui untuk menggunakan metadata dan structured data
- Penambahan field excerpt, readTime, dan relatedPosts

### Fixed
- Perbaikan tipe data untuk komponen BlogSEO
- Penanganan kasus ketika post tidak ditemukan

## [1.1.0] - 2024-03-05

### Added
- Konfigurasi Git Gateway untuk Netlify CMS
- Dokumentasi troubleshooting untuk Git Gateway
- Logging yang lebih baik untuk debugging

### Changed
- Peningkatan konfigurasi Netlify CMS
- Optimasi layout untuk SEO

### Fixed
- Masalah autentikasi dengan Netlify Identity
- Perbaikan konfigurasi Netlify.toml

## [1.0.0] - 2024-03-01

### Initial Release
- Website profesional untuk agen pemasaran digital
- Desain responsif dengan TailwindCSS
- Animasi dengan Framer Motion
- Komponen UI modern dan interaktif
- SEO optimization
- Performance charts dan visualisasi data
- Mobile-optimized footer

## [2.1.0] - 2024-06-20

### Fitur Baru
- **SEO Auto Generator (Fallback Mode)**: Implementasi sistem otomatis yang menghasilkan metadata SEO, schema markup, dan data pendukung lainnya ketika editor lupa mengisinya secara manual.
- **Schema Markup Otomatis**: Dukungan otomatis untuk berbagai jenis schema (BlogPosting, NewsArticle, TechArticle, HowTo, FAQ).
- **Excerpt Generator**: Fitur untuk secara otomatis mengekstrak dan menghasilkan excerpt dari konten blog.
- **Read Time Calculator**: Penghitung waktu baca otomatis berdasarkan jumlah kata dalam artikel.

### Peningkatan
- **Improved Blog Layout**: Layout blog yang lebih baik dengan dukungan untuk tampilan author, read time, dan kategori.
- **TypeScript Interface Updates**: Pembaruan interface TypeScript untuk dukungan yang lebih baik untuk struktur data SEO.
- **Documentation**: Panduan lengkap tentang penggunaan fitur SEO Auto Generator dalam `SEO_FALLBACK_GUIDE.md`.

### Bug Fixes
- Perbaikan masalah dengan metadata yang tidak konsisten di halaman blog.
- Perbaikan kesalahan pada pemformatan tanggal di halaman blog.

## [2.0.0] - 2024-05-01

### Fitur Baru
- **Next.js App Router Migration**: Migrasi dari Pages Router ke App Router untuk performa dan fitur yang lebih baik.
- **BlogSEO Component**: Komponen khusus untuk menangani metadata dan structured data untuk posting blog.
- **Netlify CMS Integration**: Integrasi dengan Netlify CMS untuk manajemen konten yang lebih mudah.

### Peningkatan
- **Improved Page Load Times**: Waktu loading halaman yang lebih cepat dengan optimasi gambar dan kode.
- **Enhanced Mobile Responsiveness**: Responsivitas mobile yang lebih baik di semua halaman.
- **SEO Optimization**: Optimasi SEO untuk semua halaman dengan metadata yang lebih baik.

### Deprecated
- Pages Router yang lama (akan dihapus dalam versi mendatang).

## [1.0.0] - 2024-03-15

### Fitur Baru
- **Initial Release**: Rilis pertama website SingRank.
- **Core Pages**: Implementasi halaman utama: Home, About, Services, Blog, Contact.
- **Responsive Design**: Desain responsif untuk semua ukuran layar.
- **Contact Form**: Formulir kontak dengan validasi dan integrasi email.

### Teknologi
- Next.js
- React
- TailwindCSS
- TypeScript

## [1.3.0] - 2023-07-15

### Added
- Complete SEO implementation for blog posts
- BlogSEO.tsx component for structured data generation
- Added support for Article and FAQ structured data
- Comprehensive SEO metadata in blog frontmatter
- Social sharing optimization for Open Graph and Twitter Cards
- SEO documentation and guides
- Example blog post with full SEO implementation

### Changed
- Enhanced blog.js to support SEO metadata from frontmatter
- Updated blog post page to use Next.js App Router metadata API
- Improved image handling for social sharing

### Fixed
- Resolved metadata generation for dynamic routes
- Fixed canonical URL formatting issues
- Corrected structured data validation errors 