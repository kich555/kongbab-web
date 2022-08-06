import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from '@remix-run/react';
import { MantineProvider } from '@mantine/core';
import { StylesPlaceholder } from '@mantine/remix';
import BASIC_THEME from '~/constants/theme';
import { json } from '@remix-run/node';
import styles from '~/Style/reset.css';
import Layout from '~/components/common/Layout';
import { NotificationsProvider } from '@mantine/notifications';
// import { getEnv } from './env.server';

export async function loader() {
  return json({
    ENV: {
      EMAIL_JS_ID: process.env.EMAIL_JS_ID,
      EMAIL_JS_TEMPLETE_ID: process.env.EMAIL_JS_TEMPLETE_ID,
      EMAIL_JS_PUBLIC_KEY: process.env.EMAIL_JS_PUBLIC_KEY,
    },
  });
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
  const data = useLoaderData();

  return (
    <MantineProvider theme={BASIC_THEME} withGlobalStyles withNormalizeCSS>
      <NotificationsProvider>
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
              <script
                dangerouslySetInnerHTML={{
                  __html: `window.ENV = ${JSON.stringify(data.ENV)}`,
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
      </NotificationsProvider>
    </MantineProvider>
  );
}
