export const loader = () => {
  // set up our text content that will be returned in the response
  const robotText = `
  User-agent: *
  Allow: /
  Sitemap: https://congbab.com/sitemap.xml
  #DaumWebMasterTool:66411e6ef2c0f87137f1ea3bb8821a88af6da6dfbf487e6e91d7b700a0b0b21b:H/JkSJL0h82lvpHWXH3uFA==
        
        `;
  // return the text content, a status 200 success response, and set the content type to text/plain
  return new Response(robotText, {
    status: 200,
    headers: {
      'Content-Type': 'text/plain',
    },
  });
};
