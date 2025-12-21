export async function GET() {
  const robots = `User-agent: *
Allow: /

Sitemap: https://evanalvarez.dev/sitemap.xml`;

  return new Response(robots, {
    headers: {
      'Content-Type': 'text/plain'
    }
  });
}
