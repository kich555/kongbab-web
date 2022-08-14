import { useState } from 'react';
import { Link } from '@remix-run/react';

import useNavStyles from '~/Style/components/useNavStyles';

import ROUTES from '~/constants/NavData';

export default function NavMenu({ close }) {
  const [active, setActive] = useState(ROUTES[0].link);
  const { classes, cx } = useNavStyles();

  const { link, linkActive } = classes;

  const items = ROUTES.map((route) => (
    <li key={route.label}>
      <Link
        // className={cx(link, { [linkActive]: active === route.link })}
        className={link}
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
  ));

  return items;
}
