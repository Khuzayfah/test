# Changelog

Semua perubahan penting pada proyek ini akan didokumentasikan di file ini.

## [Unreleased]

### Added
- Integrasi Netlify CMS dengan Netlify Identity untuk manajemen konten blog
- File konfigurasi `netlify.toml` untuk pengaturan deploy dan Netlify Identity
- Dokumentasi setup Netlify Identity di `NETLIFY_IDENTITY_SETUP.md`
- Script Netlify Identity di layout utama aplikasi untuk autentikasi CMS
- Informasi CMS di README.md

### Changed
- Layout aplikasi untuk mendukung Netlify Identity widget
- Optimasi script dengan menggunakan next/script untuk menghindari peringatan linter

### Fixed
- Memperbaiki masalah synchronous script dengan menggunakan komponan Script dari Next.js
- Menerapkan strategy="afterInteractive" untuk script yang tidak kritis

## [1.0.0] - 2024-03-05

### Initial Release
- Website profesional untuk agen pemasaran digital
- Desain responsif dengan TailwindCSS
- Animasi dengan Framer Motion
- Komponen UI modern dan interaktif
- SEO optimization
- Performance charts dan visualisasi data
- Mobile-optimized footer 