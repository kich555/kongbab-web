import { redirect } from '@remix-run/node';

export async function loader() {
  return redirect('/');
}

// export function links() {
//   return [
//     {
//       rel: 'canonical',
//       href: 'https://congbab.com/',
//     },
//   ];
// }

export default function MdIndexRoute() {
  return;
}
