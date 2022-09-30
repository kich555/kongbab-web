import { Link } from '@remix-run/react';
import useNavStyles from '~/styles/components/useNavStyles';
import ROUTES from './constants/navData';

export default function NavItems({ close, active, setActive }) {
  const { classes, cx } = useNavStyles();
  const { link, linkActive } = classes;
  const NewItems = ROUTES.slice(1);

  return (
    <>
      {NewItems.map((route) => (
        <Link
          key={route.label}
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
      ))}
    </>
  );
}
