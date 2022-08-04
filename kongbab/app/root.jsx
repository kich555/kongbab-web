import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from '@remix-run/react';
import { MantineProvider } from '@mantine/core';
import { StylesPlaceholder } from '@mantine/remix';
import BASIC_THEME from '~/constants/theme';
import { json } from '@remix-run/node';
import styles from '~/Style/reset.css';
import Layout from '~/components/common/Layout';

export async function loader() {
  return json({ KAKAO_KEY: process.env.REACT_APP_KEY });
}

export const meta = () => ({
  charset: 'utf-8',
  title: 'cong-bab',
  viewport: 'width=device-width,initial-scale=1',
});

export function links() {
  return [
    {
      rel: 'stylesheet',
      href: styles,
    },
  ];
}

export default function App() {
  return (
    <MantineProvider theme={BASIC_THEME} withGlobalStyles withNormalizeCSS>
      <html lang='ko'>
        <head>
          <Meta />
          <Links />
          <StylesPlaceholder />
        </head>
        <body>
          <>
            <script src='https://developers.kakao.com/sdk/js/kakao.js'></script>
            <script
              async
              id='kakao-init'
              dangerouslySetInnerHTML={{
                __html: `
              Kakao.init('JAVASCRIPT_KEY');
              console.log(Kakao.isInitialized());
              `,
              }}
            />
          </>
          <Layout>
            <Outlet />
          </Layout>
          <ScrollRestoration />
          <Scripts />
          <LiveReload />
        </body>
      </html>
    </MantineProvider>
  );
}
