import { redirect } from '@remix-run/node';
import {
  Links,
  Outlet,
  useLocation,
  useNavigate,
  useParams,
} from '@remix-run/react';

export async function loader() {
  // return redirect('/');
  // const { location } = useLocation();
  return null;
}

// export function links() {
//   return [
//     {
//       rel: 'canonical',
//       href: 'https://congbab.com/',
//     },
//   ];
// }

export default function MdRoute() {
  return <Outlet />;
}
