# Panduan SEO Auto Generator (Fallback Mode)

## Daftar Isi
1. [Pengenalan](#pengenalan)
2. [Cara Kerja Sistem Fallback](#cara-kerja-sistem-fallback)
3. [Field yang Dapat Digenerate Otomatis](#field-yang-dapat-digenerate-otomatis)
4. [Contoh Penggunaan](#contoh-penggunaan)
5. [Konfigurasi Lanjutan](#konfigurasi-lanjutan)
6. [FAQ](#faq)

## Pengenalan

Fitur SEO Auto Generator dalam mode fallback adalah sistem keamanan untuk memastikan setiap artikel blog di SingRank memiliki metadata dan schema markup yang diperlukan untuk SEO, bahkan jika author lupa mengisinya saat membuat artikel. Fitur ini hanya menghasilkan data secara otomatis untuk field yang kosong, tanpa menimpa data yang telah diisi secara manual.

## Cara Kerja Sistem Fallback

Sistem ini menggunakan pendekatan "safety net" dengan prinsip kerja:

1. **Periksa Ketersediaan**: Sistem memeriksa apakah field tertentu telah diisi secara manual
2. **Generate jika Kosong**: Hanya jika field kosong, sistem secara otomatis menghasilkan nilai berdasarkan konten artikel
3. **Prioritas Input Manual**: Data yang dimasukkan secara manual selalu diutamakan
4. **Log Aktivitas**: Sistem mencatat aktivitas auto-generate di development mode

## Field yang Dapat Digenerate Otomatis

Berikut field yang dapat digenerate secara otomatis jika kosong:

### Metadata SEO
- **Meta Title**: Digenerate dari judul artikel jika kosong
- **Meta Description**: Diambil dari excerpt artikel, dibatasi 160 karakter
- **Excerpt**: Dibuat dari paragraf awal konten artikel jika tidak disediakan
- **Read Time**: Dihitung berdasarkan jumlah kata dalam artikel

### Structured Data
- **Schema Markup**: Artikel, News, Tech Article atau HowTo (berdasarkan jenis artikel)
- **FAQ Schema**: Otomatis digabungkan jika ada data FAQ
- **Author Data**: Diambil dari data penulis dengan fallback ke default

## Contoh Penggunaan

### Skenario 1: Field SEO Tidak Diisi

```yaml
---
title: Panduan SEO untuk Pemula
date: 2023-05-15
author: John Doe
---

Artikel pengantar SEO untuk pemula...
```

Sistem akan secara otomatis membuat:
- Meta title: "Panduan SEO untuk Pemula"
- Meta description: Diambil dari awal artikel (150-160 karakter)
- Read time: Dihitung dari jumlah kata (misal: "5 min read")
- Schema markup: BlogPosting dengan data yang tersedia

### Skenario 2: Beberapa Field Diisi, Beberapa Kosong

```yaml
---
title: Panduan SEO untuk Pemula
date: 2023-05-15
author: John Doe
seo:
  metaTitle: Panduan Lengkap SEO untuk Pemula 2023
  metaDescription: 
structuredData:
  articleType: TechArticle
---

Artikel pengantar SEO untuk pemula...
```

Sistem akan:
- Menggunakan meta title yang sudah diisi: "Panduan Lengkap SEO untuk Pemula 2023"
- Generate meta description dari konten artikel
- Menggunakan articleType "TechArticle" yang sudah dispesifikasikan
- Generate schema markup TechArticle dengan proficiencyLevel default "Beginner"

## Konfigurasi Lanjutan

### Menonaktifkan Auto-Generate

Jika Anda ingin menonaktifkan auto-generate schema untuk artikel tertentu:

```yaml
---
structuredData:
  autoGenerate: false
---
```

### Menentukan Tipe Artikel

```yaml
---
structuredData:
  articleType: NewsArticle  # atau BlogPosting, TechArticle, HowTo
---
```

### Mengombinasikan dengan FAQ Manual

```yaml
---
structuredData:
  mainEntity: FAQ
  faq:
    - question: Apa itu SEO?
      answer: SEO adalah proses optimasi website...
    - question: Mengapa SEO penting?
      answer: SEO membantu meningkatkan visibilitas...
---
```

## FAQ

### Apakah data yang digenerate otomatis dapat menggantikan yang sudah diisi manual?
Tidak. Sistem auto-generator hanya mengisi field yang kosong, tidak akan pernah menimpa data yang sudah diisi secara manual.

### Apakah kualitas SEO sama antara yang diisi manual dan auto-generated?
Data yang diisi manual biasanya lebih baik karena ditargetkan secara spesifik. Auto-generated adalah pendekatan "better than nothing" untuk memastikan artikel tetap memiliki SEO dasar.

### Bagaimana dengan image untuk schema?
Sistem akan menggunakan featured image artikel jika tersedia. Jika tidak, schema akan digenerate tanpa image.

### Apakah semua jenis structured data didukung?
Saat ini sistem mendukung Article, BlogPosting, NewsArticle, TechArticle, HowTo dan FAQ. Tipe lain perlu diisi secara manual.

### Bagaimana cara memverifikasi schema yang digenerate?
Anda dapat menggunakan Google Rich Results Test untuk memeriksa schema markup yang digenerate pada artikel yang dipublikasikan.

---

**Penting**: Meski fitur auto-generate ini membantu memastikan SEO dasar tersedia, praktik terbaik tetap mengisi metadata SEO secara manual untuk hasil optimal. 