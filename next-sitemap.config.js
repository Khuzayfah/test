/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://singrank.com',
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
    additionalSitemaps: [
      'https://singrank.com/server-sitemap.xml',
    ],
  },
  exclude: ['/server-sitemap.xml'],
  generateIndexSitemap: true,
  changefreq: 'weekly',
  priority: 0.7,
  autoLastmod: true,
} 