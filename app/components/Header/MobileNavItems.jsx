import { Link } from '@remix-run/react';
import useNavStyles from '~/styles/components/useNavStyles';
import ROUTES from './constants/navData';

export default function MobileNavItems({ close, active, setActive }) {
  const { classes, cx } = useNavStyles();
  const { link, linkActive } = classes;

  console.log('active', active);

  return (
    <ul>
      {ROUTES.map((route) => (
        <li key={route.label}>
          <Link
            className={cx(link, { [linkActive]: route.link === active })}
            prefetch='intent'
            to={route.link}
            onClick={() => {
              setActive(route.link);
              close();
            }}
          >
            {route.label}
          </Link>
        </li>
      ))}
    </ul>
  );
}
