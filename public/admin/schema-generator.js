/**
 * Schema Generator untuk Netlify CMS
 * 
 * Script ini menambahkan fungsi untuk menghasilkan schema data markup secara otomatis
 * berdasarkan field yang telah diisi di CMS.
 */

class SchemaGenerator {
  constructor() {
    this.baseUrl = window.location.origin || 'https://singrank.com';
  }

  /**
   * Menghasilkan schema data lengkap berdasarkan post data
   * 
   * @param {Object} postData - Data artikel dari CMS
   * @returns {Object} - JSON-LD schema yang siap digunakan
   */
  generateSchema(postData) {
    if (!postData.title) return null;
    
    // Tentukan tipe artikel yang akan digunakan
    const schemaType = postData.structuredData?.articleType || 'BlogPosting';
    
    // Generate schema berdasarkan tipe
    switch (schemaType) {
      case 'BlogPosting':
        return this.generateBlogPostingSchema(postData);
      case 'NewsArticle':
        return this.generateNewsArticleSchema(postData);
      case 'TechArticle':
        return this.generateTechArticleSchema(postData);
      case 'HowTo':
        return this.generateHowToSchema(postData);
      default:
        return this.generateBlogPostingSchema(postData);
    }
  }

  /**
   * Menghasilkan schema untuk artikel blog standar
   */
  generateBlogPostingSchema(postData) {
    const {
      title,
      date,
      slug,
      author,
      thumbnail,
      categories,
      tags,
      seo,
      structuredData
    } = postData;

    // Base URL untuk artikel
    const articleUrl = `${this.baseUrl}/blog/${slug || ''}`;
    
    // Schema dasar
    const schema = {
      '@context': 'https://schema.org',
      '@type': 'BlogPosting',
      'headline': seo?.metaTitle || title,
      'description': seo?.metaDescription || '',
      'image': thumbnail ? `${this.baseUrl}${thumbnail}` : '',
      'datePublished': date,
      'dateModified': structuredData?.dateModified || date,
      'url': seo?.canonical || articleUrl,
      'mainEntityOfPage': {
        '@type': 'WebPage',
        '@id': articleUrl
      },
      'author': {
        '@type': 'Person',
        'name': author || 'SingRank Team'
      },
      'publisher': {
        '@type': 'Organization',
        'name': 'SingRank',
        'logo': {
          '@type': 'ImageObject',
          'url': `${this.baseUrl}/images/singrank-logo.png`
        }
      }
    };
    
    // Tambahkan keywords jika ada
    if (seo?.focusKeywords) {
      schema.keywords = seo.focusKeywords;
    } else if (tags && tags.length) {
      schema.keywords = tags.join(', ');
    }
    
    // Tambahkan articleSection jika ada kategori
    if (categories && categories.length) {
      schema.articleSection = categories[0];
    }

    return schema;
  }

  /**
   * Menghasilkan schema untuk artikel berita
   */
  generateNewsArticleSchema(postData) {
    // Dapatkan schema dasar dari BlogPosting
    const schema = this.generateBlogPostingSchema(postData);
    
    // Ubah tipe
    schema['@type'] = 'NewsArticle';
    
    // Tambahkan property khusus NewsArticle
    schema.dateline = postData.dateline || 'Singapore';
    schema.printEdition = postData.printEdition || '';
    schema.printPage = postData.printPage || '';
    schema.printSection = postData.printSection || '';
    
    return schema;
  }

  /**
   * Menghasilkan schema untuk artikel teknis
   */
  generateTechArticleSchema(postData) {
    // Dapatkan schema dasar dari BlogPosting
    const schema = this.generateBlogPostingSchema(postData);
    
    // Ubah tipe
    schema['@type'] = 'TechArticle';
    
    // Tambahkan property khusus TechArticle
    schema.proficiencyLevel = postData.proficiencyLevel || 'Beginner';
    
    // Tambahkan dependencies/requirements jika ada
    if (postData.dependencies && Array.isArray(postData.dependencies)) {
      schema.dependencies = postData.dependencies.join(', ');
    }
    
    return schema;
  }

  /**
   * Menghasilkan schema untuk artikel how-to
   */
  generateHowToSchema(postData) {
    const {
      title,
      date,
      slug,
      author,
      thumbnail,
      seo,
      structuredData
    } = postData;

    // Base URL untuk artikel
    const articleUrl = `${this.baseUrl}/blog/${slug || ''}`;
    
    // Schema dasar untuk HowTo
    const schema = {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      'name': seo?.metaTitle || title,
      'description': seo?.metaDescription || '',
      'image': thumbnail ? `${this.baseUrl}${thumbnail}` : '',
      'datePublished': date,
      'dateModified': structuredData?.dateModified || date,
      'url': seo?.canonical || articleUrl,
      'author': {
        '@type': 'Person',
        'name': author || 'SingRank Team'
      },
      'publisher': {
        '@type': 'Organization',
        'name': 'SingRank',
        'logo': {
          '@type': 'ImageObject',
          'url': `${this.baseUrl}/images/singrank-logo.png`
        }
      }
    };
    
    // Tambahkan steps jika ada (akan diisi manual oleh editor)
    if (postData.steps && Array.isArray(postData.steps)) {
      schema.step = postData.steps.map((step, index) => ({
        '@type': 'HowToStep',
        'url': `${articleUrl}#step-${index + 1}`,
        'name': step.name || `Step ${index + 1}`,
        'itemListElement': {
          '@type': 'HowToDirection',
          'text': step.text || ''
        }
      }));
      
      // Perkiraan total waktu
      if (postData.totalTime) {
        schema.totalTime = postData.totalTime;
      }
    }
    
    return schema;
  }

  /**
   * Preview schema data dalam format yang mudah dibaca
   */
  getSchemaPreview(postData) {
    const schema = this.generateSchema(postData);
    if (!schema) return 'Belum cukup data untuk menghasilkan schema';
    
    return JSON.stringify(schema, null, 2);
  }
}

// Inisialisasi SchemaGenerator saat CMS loaded
window.addEventListener('load', () => {
  const schemaGenerator = new SchemaGenerator();
  
  // Register custom widget untuk preview schema
  if (window.CMS && window.CMS.registerPreviewTemplate) {
    window.CMS.registerPreviewTemplate('schemaPreview', ({ entry }) => {
      const data = entry.getIn(['data']).toJS();
      const schemaPreview = schemaGenerator.getSchemaPreview(data);
      
      return `
        <div style="background: #f4f4f4; padding: 20px; border-radius: 5px; font-family: monospace; white-space: pre-wrap;">
          <h3>Schema Data Preview</h3>
          <pre>${schemaPreview}</pre>
        </div>
      `;
    });
  }
});

// Ekspos fungsi untuk digunakan oleh CMS
window.schemaGenerator = new SchemaGenerator(); 