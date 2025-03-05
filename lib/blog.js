// Use server-only imports to avoid issues in browser
let fs;
let path;
let matter;
let remarkModule;
let htmlModule;

// Use dynamic imports for ESM packages
async function loadModules() {
  if (typeof window === 'undefined') {
    // Only import on the server side
    fs = require('fs');
    path = require('path');
    matter = require('gray-matter');
    
    // Use dynamic imports for ESM packages
    try {
      remarkModule = (await import('remark')).default;
      htmlModule = (await import('remark-html')).default;
    } catch (error) {
      console.error('Error loading ESM modules:', error);
    }
  }
}

// Initialize modules
loadModules();

// Directory where blog posts are stored (on server)
let postsDirectory;
if (typeof window === 'undefined') {
  postsDirectory = path.join(process.cwd(), 'content/blog');
}

// Sample post data for client-side (when fs is not available)
const samplePosts = [
  {
    id: 'complete-seo-guide-for-nextjs-blog',
    title: 'Complete SEO Guide for Next.js Blog: Boost Your Visibility',
    date: '2023-07-15',
    author: {
      name: 'John Doe',
      title: 'SEO Specialist',
      image: '/images/authors/john-doe.jpg'
    },
    excerpt: 'Learn how to implement advanced SEO techniques for Next.js blogs to improve your search engine rankings and increase organic traffic.',
    thumbnail: '/images/blog/seo-guide-cover.jpg',
    category: 'SEO',
    tags: ['SEO', 'Next.js', 'Blogging', 'Marketing', 'Web Development'],
    seo: {
      metaTitle: 'Complete SEO Guide for Next.js Blog in 2023 | SingRank',
      metaDescription: 'Discover the most effective SEO strategies for Next.js blogs. Learn how to optimize metadata, implement structured data, and boost your search rankings.',
      focusKeywords: 'Next.js SEO, blog SEO, structured data, technical SEO, metadata optimization',
      canonical: 'https://singrank.com/blog/complete-seo-guide-for-nextjs-blog',
      noIndex: false
    },
    socialSharing: {
      ogTitle: 'The Ultimate SEO Guide for Next.js Blogs to Maximize Visibility',
      ogDescription: 'Learn proven SEO strategies specifically tailored for Next.js blog platforms. From basic metadata to advanced structured data implementation.',
      ogImage: '/images/blog/seo-guide-social.jpg',
      twitterTitle: 'Next.js Blog SEO: Complete Guide to Higher Rankings',
      twitterDescription: 'Discover our comprehensive guide to optimizing your Next.js blog for search engines. Includes implementation tips and best practices.',
      twitterCardType: 'summary_large_image'
    },
    structuredData: {
      articleType: 'TechArticle',
      dateModified: '2023-08-10',
      mainEntity: 'WebPage',
      faq: [
        {
          question: 'What is Next.js SEO?',
          answer: 'Next.js SEO refers to search engine optimization techniques specifically tailored for Next.js applications. It includes server-side rendering for better indexing, optimized metadata implementation, and structured data for rich search results.'
        },
        {
          question: 'How does Next.js help with SEO?',
          answer: 'Next.js enhances SEO through server-side rendering (SSR) and static site generation (SSG), which provide pre-rendered HTML to search engines. It also offers built-in head management for meta tags and an optimized image component for faster loading times.'
        }
      ]
    },
    readTime: '8 min read',
    contentHtml: '<h1>Complete SEO Guide for Next.js Blog</h1><p>This is a sample content</p>'
  }
];

/**
 * Gets all blog posts with sorting
 * @param {Object} options - Options for filtering and sorting
 * @returns {Array} Array of blog posts
 */
export async function getAllPosts(options = {}) {
  // For client-side rendering, return sample data
  if (typeof window !== 'undefined') {
    console.log('Using sample posts for client-side');
    return sortPosts(samplePosts, options);
  }
  
  // Server-side handling
  try {
    // Check if directory exists
    if (!fs.existsSync(postsDirectory)) {
      console.warn(`Directory "${postsDirectory}" does not exist`);
      return [];
    }
  
    const fileNames = fs.readdirSync(postsDirectory);
    
    // Process all files
    const allPostsData = fileNames
      .filter(fileName => {
        // Only process .md and .mdx files
        return fileName.endsWith('.md') || fileName.endsWith('.mdx');
      })
      .map(fileName => {
        // Remove file extension to get id
        const id = fileName.replace(/\.mdx?$/, '');
        
        // Read file
        const fullPath = path.join(postsDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');
        
        // Parse frontmatter
        const matterResult = matter(fileContents);
        
        // Create excerpt if not provided
        let excerpt = matterResult.data.excerpt;
        if (!excerpt) {
          // Generate excerpt from content
          excerpt = matterResult.content
            .replace(/^#+\s+.*$/gm, '') // Remove headings
            .replace(/!\[.*\]\(.*\)/g, '') // Remove images
            .replace(/\[.*\]\(.*\)/g, '$1') // Replace links with just text
            .replace(/\*\*|\*|~~|`/g, '') // Remove formatting
            .replace(/\n+/g, ' ') // Replace newlines with spaces
            .trim()
            .slice(0, 200) + '...'; // Limit to 200 chars
        }
        
        // Return combined data - but not the full content to keep it lightweight
        return {
          id,
          excerpt,
          ...matterResult.data
        };
      });
    
    // Apply sorting and filtering
    return sortPosts(allPostsData, options);
  } catch (error) {
    console.error('Error getting all posts:', error);
    return [];
  }
}

/**
 * Get data for a specific post by ID
 */
export async function getPostData(id) {
  // For client-side rendering, return sample data if ID matches
  if (typeof window !== 'undefined') {
    const samplePost = samplePosts.find(post => post.id === id);
    if (samplePost) {
      return samplePost;
    }
    console.warn(`Post with ID ${id} not found in sample data`);
    return null;
  }

  // Server-side handling
  try {
    const mdFilePath = path.join(postsDirectory, `${id}.md`);
    const mdxFilePath = path.join(postsDirectory, `${id}.mdx`);
    
    let fullPath;
    if (fs.existsSync(mdFilePath)) {
      fullPath = mdFilePath;
    } else if (fs.existsSync(mdxFilePath)) {
      fullPath = mdxFilePath;
    } else {
      console.warn(`File not found for post with ID: ${id}`);
      return null;
    }

    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const matterResult = matter(fileContents);

    // Use the dynamic imported modules
    const processedContent = await remarkModule()
      .use(htmlModule)
      .process(matterResult.content);
    
    const contentHtml = processedContent.toString();

    return {
      id,
      contentHtml,
      ...matterResult.data,
    };
  } catch (error) {
    console.error(`Error getting post data for ID ${id}:`, error);
    return null;
  }
}

/**
 * Calculate estimated reading time for content
 * @param {string} content - The blog post content
 * @returns {string} - Estimated read time
 */
function calculateReadTime(content) {
  const wordsPerMinute = 200;
  const wordCount = content.trim().split(/\s+/).length;
  const readTime = Math.ceil(wordCount / wordsPerMinute);
  
  return readTime === 1 ? '1 min read' : `${readTime} min read`;
}

/**
 * Generate article schema based on post data
 * Used as fallback when schema is not manually provided
 */
function generateArticleSchema(
  title,
  id,
  date,
  author,
  image,
  excerpt,
  categories,
  tags,
  seo,
  structuredData
) {
  // Base schema for all article types
  const baseSchema = {
    '@context': 'https://schema.org',
    '@type': structuredData.articleType || 'BlogPosting',
    'headline': seo.metaTitle || title,
    'name': seo.metaTitle || title,
    'description': seo.metaDescription || excerpt,
    'author': {
      '@type': 'Person',
      'name': author
    },
    'publisher': {
      '@type': 'Organization',
      'name': 'SingRank',
      'logo': {
        '@type': 'ImageObject',
        'url': `${process.env.NEXT_PUBLIC_SITE_URL || ''}/images/singrank-logo.png`
      }
    },
    'datePublished': date,
    'dateModified': structuredData.dateModified || date,
    'mainEntityOfPage': {
      '@type': 'WebPage',
      '@id': seo.canonical || `${process.env.NEXT_PUBLIC_SITE_URL || ''}/blog/${id}`
    }
  };
  
  // Add image if available
  if (image) {
    baseSchema.image = {
      '@type': 'ImageObject',
      'url': `${process.env.NEXT_PUBLIC_SITE_URL || ''}${image}`,
      'width': '1200',
      'height': '630'
    };
  }
  
  // Add keywords if available
  if (seo.focusKeywords || (tags && tags.length > 0)) {
    baseSchema.keywords = seo.focusKeywords || tags.join(', ');
  }
  
  // Add article section if categories are available
  if (categories && categories.length > 0) {
    baseSchema.articleSection = categories.join(', ');
  }
  
  // Extend schema based on article type
  switch (structuredData.articleType) {
    case 'NewsArticle':
      // Add news-specific properties
      baseSchema.dateline = ''; // Optional: Location where the article was written
      baseSchema.printEdition = ''; // Optional: Print edition name
      break;
      
    case 'TechArticle':
      // Add tech article specific properties
      baseSchema.proficiencyLevel = 'Beginner'; // Default proficiency level
      break;
      
    case 'HowTo':
      // For HowTo schema, complete structure would require steps
      // This is a simple version without steps
      baseSchema['@type'] = 'HowTo';
      baseSchema.step = [
        {
          '@type': 'HowToStep',
          'text': 'This is a how-to article. Steps would typically be extracted from the content'
        }
      ];
      break;
  }
  
  // Add FAQ schema if applicable
  if (structuredData.mainEntity === 'FAQ' && structuredData.faq && structuredData.faq.length > 0) {
    const faqSchema = {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': structuredData.faq.map(item => ({
        '@type': 'Question',
        'name': item.question,
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': item.answer
        }
      }))
    };
    
    // Return both schemas as an array
    return [baseSchema, faqSchema];
  }
  
  // Return only the article schema
  return baseSchema;
}

/**
 * Sorts and filters posts based on provided options
 * @param {Array} posts - Array of posts to sort
 * @param {Object} options - Sorting and filtering options
 * @returns {Array} Sorted and filtered posts
 */
function sortPosts(posts, options = {}) {
  let result = [...posts];
  
  // Apply filtering
  if (options.category) {
    result = result.filter(post => 
      post.category === options.category || 
      (post.categories && post.categories.includes(options.category))
    );
  }
  
  if (options.tag) {
    result = result.filter(post => 
      post.tags && post.tags.includes(options.tag)
    );
  }
  
  if (options.author) {
    result = result.filter(post => {
      if (typeof post.author === 'string') {
        return post.author === options.author;
      } else if (post.author && post.author.name) {
        return post.author.name === options.author;
      }
      return false;
    });
  }
  
  // Apply sorting
  const sortBy = options.sortBy || 'date';
  const sortOrder = options.sortOrder || 'desc';
  
  result.sort((a, b) => {
    let valueA = a[sortBy];
    let valueB = b[sortBy];
    
    // Handle undefined values
    if (valueA === undefined) return sortOrder === 'asc' ? -1 : 1;
    if (valueB === undefined) return sortOrder === 'asc' ? 1 : -1;
    
    // Handle date comparisons
    if (sortBy === 'date') {
      valueA = new Date(valueA).getTime();
      valueB = new Date(valueB).getTime();
    }
    
    // Sort based on order
    if (valueA < valueB) {
      return sortOrder === 'asc' ? -1 : 1;
    }
    if (valueA > valueB) {
      return sortOrder === 'asc' ? 1 : -1;
    }
    return 0;
  });
  
  // Apply pagination
  if (options.limit) {
    const start = options.offset || 0;
    const end = start + options.limit;
    result = result.slice(start, end);
  }
  
  return result;
}

export default {
  getAllPosts,
  getPostData
}; 