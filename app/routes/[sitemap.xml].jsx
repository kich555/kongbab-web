export const loader = () => {
  // separating xml content from Response to keep clean code.
  const content = `
      <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        <url>
          <loc>https://congbab.com/</loc>
          <lastmod>2022-08-15T00:15:16+01:00</lastmod>
          <priority>1.0</priority>
        </url>
        <url>
          <loc>https://congbab.com/md/introduce</loc>
          <lastmod>2022-08-28T14:35:25+00:00</lastmod>
          <priority>0.80</priority>
        </url>
        <url>
          <loc>https://congbab.com/md/process</loc>
          <lastmod>2022-08-28T14:35:25+00:00</lastmod>
          <priority>0.80</priority>
        </url>
        <url>
          <loc>https://congbab.com/md/pricing</loc>
          <lastmod>2022-08-28T14:35:25+00:00</lastmod>
          <priority>0.80</priority>
        </url>
        <url>
          <loc>https://congbab.com/md/faq</loc>
          <lastmod>2022-08-28T14:35:25+00:00</lastmod>
          <priority>0.80</priority>
        </url>
        <url>
          <loc>https://congbab.com/md/blog</loc>
          <lastmod>2022-08-28T14:35:25+00:00</lastmod>
          <priority>0.80</priority>
        </url>
      </urlset>
      `;
  // Return the response with the content, a status 200 message, and the appropriate headers for an XML page
  return new Response(content, {
    status: 200,
    headers: {
      'Content-Type': 'application/xml',
      'xml-version': '1.0',
      encoding: 'UTF-8',
    },
  });
};
