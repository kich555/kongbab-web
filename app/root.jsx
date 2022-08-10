import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useCatch,
  useLoaderData,
} from '@remix-run/react';
import { MantineProvider } from '@mantine/core';
import { StylesPlaceholder } from '@mantine/remix';
import BASIC_THEME from '~/constants/theme';
import { json } from '@remix-run/node';
import styles from '~/Style/reset.css';
import Layout from '~/components/common/Layout';
import { NotificationsProvider } from '@mantine/notifications';
import { getEnv } from './utils';
import { useEffect } from 'react';
import TagManager from 'react-gtm-module';
import NotFoundPage from './components/NotFoundPage';

export async function loader() {
  return getEnv();
}

export const meta = () => ({
  charset: 'utf-8',
  title: '콩밥',
  viewport: 'width=device-width,initial-scale=1',
  'naver-site-verification': 'd1c76b234d77669ee9f5db876831a0c14c7c8d46',
  'og:type': 'website',
  'og:url': 'http://congbab.com/md/home',
  'og:title': '명도소송 콩밥 | 빠르고 간편한 소송을 위한 법률서비스',
  'og:image': '/og/og-image.png',
  'og:site_name': '명도소송 콩밥 | 빠르고 간편한 소송을 위한 법률서비스',
  'og:locale': 'ko_KR',
  'og:image:width': '1200',
  'og:image:height': '630',
  'twitter:card': 'summary_large_image',
  'twitter:title': '명도소송 콩밥 | 빠르고 간편한 소송을 위한 법률서비스',
  'twitter:image': '/og/og-image.png',
});

export function links() {
  return [
    {
      rel: 'stylesheet',
      href: styles,
    },
    {
      rel: 'apple-touch-icon',
      sizes: '57x57',
      href: '/favicon/apple-icon-57x57.png',
    },
    {
      rel: 'apple-touch-icon',
      sizes: '60x60',
      href: '/favicon/apple-icon-60x60.png',
    },
    {
      rel: 'apple-touch-icon',
      sizes: '72x72',
      href: '/favicon/apple-icon-72x72.png',
    },
    {
      rel: 'apple-touch-icon',
      sizes: '76x76',
      href: '/favicon/apple-icon-76x76.png',
    },
    {
      rel: 'apple-touch-icon',
      sizes: '114x114',
      href: '/favicon/apple-icon-114x114.png',
    },
    {
      rel: 'apple-touch-icon',
      sizes: '120x120',
      href: '/favicon/apple-icon-120x120.png',
    },
    {
      rel: 'apple-touch-icon',
      sizes: '144x144',
      href: '/favicon/apple-icon-144x144.png',
    },
    {
      rel: 'apple-touch-icon',
      sizes: '152x152',
      href: '/favicon/apple-icon-152x152.png',
    },
    {
      rel: 'apple-touch-icon',
      sizes: '180x180',
      href: '/favicon/apple-icon-180x180.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '192x192',
      href: '/favicon/android-icon-192x192.png',
    },

    {
      rel: 'icon',
      type: 'image/png',
      sizes: '32x32',
      href: '/favicon/favicon-32x32.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '96x96',
      href: '/favicon/favicon-96x96.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '16x16',
      href: '/favicon/favicon-16x16.png',
    },
    {
      rel: 'manifest',
      href: '/favicon/manifest.json',
    },
  ];
}

export default function App() {
  const data = useLoaderData();
  const { ENV } = data;
  console.log('emv?', ENV.REACT_APP_KEY);

  // useEffect(() => {
  //   const tagManagerArgs = { gtmId: 'GTM-5D3HDWM' };

  //   TagManager.initialize(tagManagerArgs);
  // }, []);
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
              {/* <noscript>
                <iframe
                  src='[https://www.googletagmanager.com/ns.html?id=GTM-5D3HDWM](https://www.googletagmanager.com/ns.html?id=GTM-5D3HDWM)'
                  height='0'
                  width='0'
                  style={{ display: 'none', visibility: 'hidden' }}
                ></iframe>
              </noscript> */}

              <script src='https://developers.kakao.com/sdk/js/kakao.js'></script>
              <script
                async
                id='kakao-init'
                dangerouslySetInnerHTML={{
                  __html: `
              // Kakao.init(${ENV.REACT_APP_KEY});
              Kakao.init('466532c41cf682be6a1ce648d7e9c48d');
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
export function CatchBoundary() {
  const caught = useCatch();

  return (
    <html>
      <head>
        <Meta />
        <Links />
        <StylesPlaceholder />
        <title>404 Not found</title>
      </head>
      <MantineProvider theme={BASIC_THEME} withGlobalStyles withNormalizeCSS>
        <body>
          <NotFoundPage />
        </body>
      </MantineProvider>
    </html>
  );
}
