import { useState } from 'react';
import { Link } from '@remix-run/react';

import useNavStyles from '~/Style/components/useNavStyles';

export default function NavMenu({ close }) {
  const menus = [
    {
      link: '/',
      label: '홈',
    },
    {
      link: '/md/introduce',
      label: '콩밥 소개',
    },
    {
      link: '/md/process',
      label: '진행 방법',
    },
    {
      link: '/md/pricing',
      label: '요금 안내',
    },
    {
      link: '/md/faq',
      label: '자주 묻는 질문',
    },
    {
      link: '/md/blog',
      label: '블로그',
    },
  ];

  const [active, setActive] = useState(menus[0].link);
  const { classes, cx } = useNavStyles();

  const { link, linkActive } = classes;

  const items = menus.map((menu) => (
    <li key={menu.label} style={{ listStyle: 'none' }}>
      <Link
        className={cx(link, { [linkActive]: active === menu.link })}
        prefetch='intent'
        to={menu.link}
        onClick={() => {
          setActive(menu.link);
          close();
        }}
      >
        {menu.label}
      </Link>
    </li>
  ));

  return items;
}
