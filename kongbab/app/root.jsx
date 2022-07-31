import { MantineProvider } from '@mantine/core';
import styles from '~/Style/reset.css';
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from '@remix-run/react';
import { json } from '@remix-run/node';
import BASIC_THEME from './constants/theme';
import Layout from 'components/Layout';

// export function loader() {
//   // process.env is available here because loader runs only on the server side
//   return {
//     KAKAO_KEY: process.env.REACT_APP_KEY,
//   };
// }

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
    <html lang='en'>
      <head>
        <Meta />
        <Links />
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
        <MantineProvider
          theme={BASIC_THEME}
          withGlobalStyles
          withNormalizeCSS
          defaultProps={{
            Container: {
              sizes: {
                xs: 428,
                sm: 980,
                md: 1080,
                lg: 1200,
                xl: 1440,
              },
            },
          }}
        >
          <Layout>
            <Outlet />
          </Layout>
          <ScrollRestoration />
          <Scripts />
          <LiveReload />
        </MantineProvider>
      </body>
    </html>
  );
}
