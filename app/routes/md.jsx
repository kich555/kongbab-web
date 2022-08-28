import { redirect } from '@remix-run/node';
import { Links } from '@remix-run/react';

export async function loader() {
  return redirect('/');
}

export function links() {
  return [
    {
      rel: 'canonical',
      href: 'https://congbab.com/',
    },
  ];
}

export default function md() {
  return (
    <html lang='ko'>
      <head>
        <Links />
      </head>
    </html>
  );
}
