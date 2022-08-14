import { useState } from 'react';
import { Link, useParams } from '@remix-run/react';

import useNavStyles from '~/Style/components/useNavStyles';

import ROUTES from '~/constants/NavData';

export default function NavMenu({ close }) {
  // const [active, setActive] = useState(ROUTES[0].link);
  const { classes, cx } = useNavStyles();
  const { link, linkActive } = classes;
  const active = useParams();
  console.log('active', active);

  const items = ROUTES.map((route) => (
    <li key={route.label}>
      <Link
        className={cx(link, { [linkActive]: true })}
        prefetch='intent'
        to={route.link}
        onClick={() => {
          // setActive(route.link);
          close();
        }}
      >
        {route.label}
      </Link>
    </li>
  ));

  return items;
}
