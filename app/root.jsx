import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useCatch,
} from '@remix-run/react';
import { MantineProvider } from '@mantine/core';
import { StylesPlaceholder } from '@mantine/remix';
import BASIC_THEME from '~/constants/theme';

// import styles from '~/Style/reset.css';
import Layout from '~/components/common/Layout';
import { NotificationsProvider } from '@mantine/notifications';
import NotFoundPage from './components/NotFoundPage';
import { rootLink, rootMeta } from './constants/rootAsset';

export const meta = () => rootMeta;

export function links() {
  return rootLink;
}

export default function App() {
  return (
    <MantineProvider theme={BASIC_THEME} withGlobalStyles withNormalizeCSS>
      <NotificationsProvider>
        <html lang='ko'>
          <head>
            <Meta />
            <Links />
            <StylesPlaceholder />
            <script
              dangerouslySetInnerHTML={{
                __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                })(window,document,'script','dataLayer','GTM-5D3HDWM');`,
              }}
            />
          </head>
          <body>
            <>
              <noscript
                dangerouslySetInnerHTML={{
                  __html: `<iframe
                src='[https://www.googletagmanager.com/ns.html?id=GTM-5D3HDWM](https://www.googletagmanager.com/ns.html?id=GTM-5D3HDWM)'
                height='0'
                width='0'
                style={{ display: 'none', visibility: 'hidden' }}
              />`,
                }}
              />
              <script src='https://developers.kakao.com/sdk/js/kakao.js'></script>
              <script
                async
                id='kakao-init'
                dangerouslySetInnerHTML={{
                  __html: `
              
              Kakao.init('466532c41cf682be6a1ce648d7e9c48d');
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
      </NotificationsProvider>
    </MantineProvider>
  );
}
export function CatchBoundary() {
  const caught = useCatch();
  console.log('caught', caught);
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
          <Layout>
            <NotFoundPage />
          </Layout>
        </body>
      </MantineProvider>
    </html>
  );
}
