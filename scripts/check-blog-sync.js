#!/usr/bin/env node

/**
 * Blog Post Validation Script
 * 
 * Script untuk memvalidasi format dan metadata blog post dari CMS.
 * 
 * Fungsi:
 * 1. Memastikan semua file blog post memiliki format yang benar
 * 2. Memvalidasi frontmatter yang diperlukan (title, date)
 * 3. Memeriksa gambar yang digunakan dalam blog post
 * 4. Log semua masalah yang ditemukan
 * 
 * Usage: node scripts/check-blog-sync.js
 */

const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');
const chalk = require('chalk');

// Konfigurasi direktori
const BLOG_DIR = path.join(process.cwd(), 'content/blog');
const IMAGES_DIR = path.join(process.cwd(), 'public/images/uploads');

// Counter untuk statistik
const stats = {
  total: 0,
  valid: 0,
  invalid: 0,
  warnings: 0,
  missingImages: 0
};

// Daftar field yang wajib ada
const REQUIRED_FIELDS = ['title', 'date'];

// Fungsi utama
function main() {
  console.log(chalk.cyan('🔍 Memeriksa sinkronisasi blog dan validasi konten...\n'));
  
  // Periksa apakah direktori blog ada
  if (!fs.existsSync(BLOG_DIR)) {
    console.error(chalk.red(`❌ Error: Direktori blog tidak ditemukan di ${BLOG_DIR}`));
    console.log(chalk.yellow('ℹ️ Membuat direktori blog...'));
    
    try {
      fs.mkdirSync(BLOG_DIR, { recursive: true });
      console.log(chalk.green('✅ Direktori blog berhasil dibuat.'));
    } catch (err) {
      console.error(chalk.red(`❌ Gagal membuat direktori blog: ${err.message}`));
      process.exit(1);
    }
    
    return;
  }
  
  // Baca semua file di direktori blog
  const files = fs.readdirSync(BLOG_DIR);
  stats.total = files.length;
  
  if (files.length === 0) {
    console.log(chalk.yellow('⚠️ Tidak ada file blog ditemukan.'));
    return;
  }
  
  console.log(chalk.blue(`📄 Ditemukan ${files.length} file blog...\n`));
  
  // Validasi setiap file
  files.forEach(file => {
    const filePath = path.join(BLOG_DIR, file);
    validateBlogFile(filePath, file);
  });
  
  // Tampilkan statistik
  console.log(chalk.cyan('\n📊 Statistik:'));
  console.log(chalk.white(`  Total file: ${stats.total}`));
  console.log(chalk.green(`  Valid: ${stats.valid}`));
  console.log(chalk.red(`  Invalid: ${stats.invalid}`));
  console.log(chalk.yellow(`  Warnings: ${stats.warnings}`));
  console.log(chalk.magenta(`  Missing images: ${stats.missingImages}`));
  
  // Kesimpulan
  if (stats.invalid > 0) {
    console.log(chalk.red('\n❌ Beberapa file blog memiliki masalah yang perlu diperbaiki.'));
    process.exit(1);
  } else {
    console.log(chalk.green('\n✅ Semua file blog valid!'));
    if (stats.warnings > 0) {
      console.log(chalk.yellow('⚠️ Namun ada beberapa peringatan yang mungkin perlu diperhatikan.'));
    }
  }
}

// Fungsi untuk validasi file blog
function validateBlogFile(filePath, fileName) {
  console.log(chalk.white(`Memeriksa ${fileName}...`));
  
  try {
    // Periksa ekstensi file
    if (!fileName.endsWith('.md') && !fileName.endsWith('.mdx')) {
      console.log(chalk.red(`  ❌ Format file tidak valid. Hanya file .md dan .mdx yang didukung.`));
      stats.invalid++;
      return;
    }
    
    // Baca konten file
    const content = fs.readFileSync(filePath, 'utf8');
    
    // Parse frontmatter
    let parsed;
    try {
      parsed = matter(content);
    } catch (err) {
      console.log(chalk.red(`  ❌ Error parsing frontmatter: ${err.message}`));
      stats.invalid++;
      return;
    }
    
    const { data, content: markdown } = parsed;
    let isValid = true;
    let warnings = [];
    
    // Periksa field yang diperlukan
    for (const field of REQUIRED_FIELDS) {
      if (!data[field]) {
        console.log(chalk.red(`  ❌ Field wajib tidak ditemukan: ${field}`));
        isValid = false;
      }
    }
    
    // Validasi format tanggal
    if (data.date) {
      try {
        const date = new Date(data.date);
        if (isNaN(date.getTime())) {
          console.log(chalk.red(`  ❌ Format tanggal tidak valid: ${data.date}`));
          isValid = false;
        }
      } catch (err) {
        console.log(chalk.red(`  ❌ Format tanggal tidak valid: ${data.date}`));
        isValid = false;
      }
    }
    
    // Periksa thumbnail jika ada
    if (data.thumbnail) {
      const thumbnailPath = path.join(process.cwd(), 'public', data.thumbnail);
      if (!fs.existsSync(thumbnailPath)) {
        console.log(chalk.yellow(`  ⚠️ Thumbnail tidak ditemukan: ${data.thumbnail}`));
        warnings.push('thumbnail-missing');
        stats.missingImages++;
      }
    } else {
      console.log(chalk.yellow(`  ⚠️ Tidak ada thumbnail ditentukan`));
      warnings.push('no-thumbnail');
    }
    
    // Periksa konten markdown
    if (markdown.trim().length < 100) {
      console.log(chalk.yellow(`  ⚠️ Konten artikel terlalu pendek (${markdown.trim().length} karakter)`));
      warnings.push('short-content');
    }
    
    // Periksa field SEO
    if (!data.seo || !data.seo.metaTitle) {
      console.log(chalk.yellow(`  ⚠️ Tidak ada meta title SEO (akan menggunakan fallback otomatis)`));
      warnings.push('no-seo-title');
    }
    
    if (!data.seo || !data.seo.metaDescription) {
      console.log(chalk.yellow(`  ⚠️ Tidak ada meta description SEO (akan menggunakan fallback otomatis)`));
      warnings.push('no-seo-description');
    }
    
    // Periksa excerpt
    if (!data.excerpt) {
      console.log(chalk.yellow(`  ⚠️ Tidak ada excerpt ditentukan (akan digenerate otomatis)`));
      warnings.push('no-excerpt');
    }
    
    // Perbarui statistik
    if (isValid) {
      stats.valid++;
      console.log(chalk.green(`  ✅ File valid${warnings.length > 0 ? ' dengan peringatan' : ''}`));
    } else {
      stats.invalid++;
      console.log(chalk.red(`  ❌ File tidak valid`));
    }
    
    if (warnings.length > 0) {
      stats.warnings += warnings.length;
    }
    
  } catch (err) {
    console.log(chalk.red(`  ❌ Error memproses file: ${err.message}`));
    stats.invalid++;
  }
}

// Jalankan fungsi utama
main(); 