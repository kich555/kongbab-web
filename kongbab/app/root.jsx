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
import BASIC_THEME from './constants/theme';
import Layout from 'components/Layout';

export const meta = () => ({
  charset: 'utf-8',
  title: 'New Remix App',
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
        <MantineProvider
          theme={BASIC_THEME}
          withGlobalStyles
          withNormalizeCSS
          defaultProps={{
            Container: {
              sizes: {
                xs: 540,
                sm: 712,
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
