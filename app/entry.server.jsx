import { renderToString } from 'react-dom/server';
import { RemixServer } from '@remix-run/react';

import { injectStyles, createStylesServer } from '@mantine/remix';
import { getEnv } from './utils';

const server = createStylesServer();
global.env = getEnv();

export default function handleRequest(
  request,
  responseStatusCode,
  responseHeaders,
  remixContext
) {
  let markup = renderToString(
    <RemixServer context={remixContext} url={request.url} />
  );
  responseHeaders.set('Content-Type', 'text/html');

  return new Response(`<!DOCTYPE html>${injectStyles(markup, server)}`, {
    status: responseStatusCode,
    headers: responseHeaders,
  });
}
