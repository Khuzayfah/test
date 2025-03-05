import React from 'react';
import Head from 'next/head';

interface FAQItem {
  question: string;
  answer: string;
}

interface SEOProps {
  title: string;
  description?: string;
  canonical?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  twitterTitle?: string;
  twitterDescription?: string;
  twitterImage?: string;
  twitterCardType?: 'summary' | 'summary_large_image';
  noIndex?: boolean;
  article?: {
    publishedTime: string;
    modifiedTime?: string;
    section?: string;
    tags?: string[];
    author?: string;
  };
  structuredData?: {
    articleType?: 'BlogPosting' | 'NewsArticle' | 'TechArticle' | 'HowTo';
    faq?: FAQItem[];
    mainEntity?: string;
  };
}

const SEO: React.FC<SEOProps> = ({
  title,
  description,
  canonical,
  ogTitle,
  ogDescription,
  ogImage,
  twitterTitle,
  twitterDescription,
  twitterImage,
  twitterCardType = 'summary_large_image',
  noIndex = false,
  article,
  structuredData,
}) => {
  // For debugging SEO settings in development
  React.useEffect(() => {
    if (process.env.NODE_ENV === 'development') {
      console.log('SEO Settings:', {
        title,
        description,
        canonical,
        article,
        structuredData,
      });
    }
  }, [title, description, canonical, article, structuredData]);

  // Prepare structured data based on the type
  const getStructuredDataScript = () => {
    if (!structuredData) return null;

    const baseData = {
      '@context': 'https://schema.org',
    };

    // Article structured data
    if (structuredData.articleType) {
      const articleData = {
        '@type': structuredData.articleType,
        headline: title,
        description: description || '',
        image: ogImage ? [ogImage] : [],
        datePublished: article?.publishedTime || new Date().toISOString(),
        dateModified: article?.modifiedTime || article?.publishedTime || new Date().toISOString(),
        author: article?.author ? [
          {
            '@type': 'Person',
            name: article.author,
          }
        ] : [],
      };

      return JSON.stringify({ ...baseData, ...articleData });
    }

    // FAQ structured data
    if (structuredData.mainEntity === 'FAQ' && structuredData.faq?.length) {
      const faqData = {
        '@type': 'FAQPage',
        mainEntity: structuredData.faq.map(item => ({
          '@type': 'Question',
          name: item.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: item.answer,
          },
        })),
      };

      return JSON.stringify({ ...baseData, ...faqData });
    }

    return null;
  };

  const structuredDataScript = getStructuredDataScript();

  return (
    <Head>
      {/* Basic Metadata */}
      <title>{title}</title>
      {description && <meta name="description" content={description} />}
      {canonical && <link rel="canonical" href={canonical} />}
      
      {/* Robots Control */}
      {noIndex ? (
        <meta name="robots" content="noindex, nofollow" />
      ) : (
        <meta name="robots" content="index, follow" />
      )}

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={article ? 'article' : 'website'} />
      <meta property="og:title" content={ogTitle || title} />
      <meta property="og:description" content={ogDescription || description || ''} />
      {ogImage && <meta property="og:image" content={ogImage} />}
      {canonical && <meta property="og:url" content={canonical} />}
      
      {/* Article specific Open Graph */}
      {article && (
        <>
          <meta property="article:published_time" content={article.publishedTime} />
          {article.modifiedTime && (
            <meta property="article:modified_time" content={article.modifiedTime} />
          )}
          {article.section && (
            <meta property="article:section" content={article.section} />
          )}
          {article.tags?.map((tag, index) => (
            <meta property="article:tag" content={tag} key={`tag-${index}`} />
          ))}
        </>
      )}

      {/* Twitter */}
      <meta name="twitter:card" content={twitterCardType} />
      <meta name="twitter:title" content={twitterTitle || ogTitle || title} />
      <meta name="twitter:description" content={twitterDescription || ogDescription || description || ''} />
      {twitterImage && <meta name="twitter:image" content={twitterImage} />}

      {/* Structured Data */}
      {structuredDataScript && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: structuredDataScript }}
        />
      )}
    </Head>
  );
};

export default SEO; 