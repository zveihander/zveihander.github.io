export const prerender = true;

export async function GET() {
  const pages = [
    '',
    'writings',
    'projects',
  ];

  const postModules = import.meta.glob('/src/routes/writings/posts/*/+page.md', { eager: true });

  const posts = Object.entries(postModules).map(([path, module]) => ({
    url: `writings/posts/${path.split('/').at(-2)}`,
    lastmod: module.metadata?.date || new Date().toISOString()
  }));

  const allPages = [...pages, ...posts];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map(page => `  <url>
    <loc>https://evanalvarez.dev/${page}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${page === '' ? '1.0' : '0.8'}</priority>
  </url>`).join('\n')}
${posts.map(post => `  <url>
    <loc>https://evanalvarez.dev/${post.url}</loc>
    <lastmod>${post.lastmod}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>`).join('\n')}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'max-age=0, s-maxage=3600'
    }
  });
}
