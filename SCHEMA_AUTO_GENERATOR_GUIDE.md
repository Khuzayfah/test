# Panduan Penggunaan Schema Auto Generator

Dokumen ini menjelaskan cara menggunakan fitur otomatis generasi schema markup JSON-LD di CMS SingRank. Fitur ini memungkinkan Anda menghasilkan structured data yang valid untuk artikel blog tanpa perlu menulis kode JSON-LD secara manual.

## Daftar Isi
1. [Apa Itu Schema Auto Generator?](#apa-itu-schema-auto-generator)
2. [Cara Menggunakan Fitur Auto-Generate](#cara-menggunakan-fitur-auto-generate)
3. [Tipe Schema yang Didukung](#tipe-schema-yang-didukung)
4. [Menggabungkan dengan FAQ Schema](#menggabungkan-dengan-faq-schema)
5. [Memeriksa Schema yang Dihasilkan](#memeriksa-schema-yang-dihasilkan)
6. [Troubleshooting](#troubleshooting)

## Apa Itu Schema Auto Generator?

Schema Auto Generator adalah fitur di CMS SingRank yang secara otomatis menghasilkan structured data (JSON-LD) berdasarkan informasi yang sudah Anda isi di form artikel. Structured data ini membantu mesin pencari memahami konten Anda dengan lebih baik dan dapat menghasilkan rich snippets di hasil pencarian.

Alih-alih menulis kode JSON-LD yang rumit secara manual, fitur ini menghasilkannya berdasarkan:
- Judul artikel
- Meta description
- Tanggal publikasi
- Tanggal modifikasi
- Penulis
- Tipe artikel
- URL artikel
- Kategori dan tag
- Fokus keyword

## Cara Menggunakan Fitur Auto-Generate

1. **Aktifkan Auto-Generate Schema**:
   - Saat membuat artikel baru, buka bagian "Structured Data"
   - Isi "Article Type" dengan tipe artikel yang sesuai
   - Pastikan opsi "Auto-Generate Schema" dalam keadaan aktif (default: aktif)

2. **Isi Field Penting**:
   - Judul artikel (wajib)
   - URL Slug (wajib)
   - Meta Title dan Meta Description (sangat direkomendasikan)
   - Featured Image (direkomendasikan)
   - Fokus Keywords (direkomendasikan)
   - Kategori dan Tag (direkomendasikan)

3. **Simpan Artikel**:
   - Saat Anda menyimpan artikel, schema akan otomatis dihasilkan
   - Notifikasi "Schema data berhasil dihasilkan secara otomatis" akan muncul
   - Schema ini akan dimasukkan otomatis ke halaman artikel

## Tipe Schema yang Didukung

Auto Generator mendukung beberapa tipe schema artikel:

1. **BlogPosting**: Untuk artikel blog umum
   - Properties: headline, description, author, datePublished, dateModified, image, publisher, dll.

2. **NewsArticle**: Untuk artikel berita
   - Semua properties BlogPosting
   - Tambahan: dateline, printEdition, printPage, printSection

3. **TechArticle**: Untuk tutorial dan artikel teknis
   - Semua properties BlogPosting
   - Tambahan: proficiencyLevel, dependencies

4. **HowTo**: Untuk panduan langkah demi langkah
   - Properties khusus: name, description, step items, totalTime
   
Untuk hasil terbaik, pilih tipe artikel yang paling sesuai dengan konten Anda.

## Menggabungkan dengan FAQ Schema

Auto Generator dapat digabungkan dengan FAQ Schema jika Anda memiliki bagian FAQ di artikel:

1. **Tambahkan FAQ**:
   - Atur "Main Entity" menjadi "FAQ"
   - Tambahkan item pertanyaan dan jawaban di bagian "FAQ Items"

2. **Hasil Penggabungan**:
   - Generator akan menghasilkan schema artikel yang dipilih
   - FAQ schema akan ditambahkan sebagai schema terpisah
   - Kedua schema akan ditambahkan ke halaman artikel

## Memeriksa Schema yang Dihasilkan

Anda dapat memeriksa schema yang dihasilkan dengan beberapa cara:

1. **Menggunakan SEO Debug Panel**:
   - Klik tombol "SEO Debug Panel" di bagian bawah kiri layar
   - Panel akan menampilkan schema JSON-LD yang terakhir dihasilkan

2. **Google Rich Results Test**:
   - Kunjungi [Google Rich Results Test](https://search.google.com/test/rich-results)
   - Masukkan URL artikel Anda yang sudah dipublikasikan
   - Verifikasi bahwa schema dideteksi dengan benar tanpa error

3. **Inspect Element di Browser**:
   - Buka artikel yang dipublikasikan
   - Klik kanan dan pilih "Inspect Element" atau "Inspect"
   - Cari tag `<script type="application/ld+json">` untuk melihat schema

## Troubleshooting

### Schema Tidak Dihasilkan

**Penyebab Potensial**:
- Field judul kosong (wajib diisi)
- Opsi "Auto-Generate Schema" tidak aktif
- Error JavaScript di browser

**Solusi**:
- Pastikan judul artikel terisi
- Aktifkan opsi "Auto-Generate Schema"
- Periksa Console di developer tools browser untuk melihat error
- Clear cache browser dan coba lagi

### Schema Tidak Valid

**Penyebab Potensial**:
- Data yang diisi tidak lengkap
- Format URL atau tanggal tidak sesuai

**Solusi**:
- Lengkapi data artikel, terutama bagian SEO Settings
- Gunakan Google Rich Results Test untuk memeriksa validitas
- Perbaiki error yang ditemukan dan regenerate schema

### Schema Tidak Muncul di Rich Results Test

**Penyebab Potensial**:
- Halaman belum diindeks
- Schema tidak terimplementasi dengan benar
- Schema valid tetapi tidak memenuhi syarat minimal Google

**Solusi**:
- Pastikan halaman dapat diakses oleh mesin pencari
- Verifikasi implementasi schema di kode halaman
- Tambahkan informasi yang lebih lengkap dan spesifik

## Kesimpulan

Schema Auto Generator adalah fitur yang sangat membantu untuk mengimplementasikan structured data tanpa perlu menulis kode secara manual. Dengan mengikuti panduan ini, Anda dapat memastikan bahwa artikel blog Anda memiliki schema markup yang valid dan bermanfaat untuk SEO.

Untuk pertanyaan lebih lanjut, silakan hubungi tim editorial di editorial@singrank.com. 