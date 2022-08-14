import { Link } from '@remix-run/react';
import useNavStyles from '~/Style/components/useNavStyles';
import ROUTES from '~/constants/NavData';

export default function NavItems({ close, active, setActive }) {
  const { classes, cx } = useNavStyles();
  const { link, linkActive } = classes;
  const NewItems = ROUTES.slice(1);

  return (
    <>
      {NewItems.map((route) => (
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
    </>
  );
}
