import { useState } from 'react';
import { useNavigate } from '@remix-run/react';

import useNavStyles from '~/Style/components/useNavStyles';

export default function NavMenu({ close }) {
  const navigate = useNavigate();
  const menus = [
    {
      link: '/md',
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
  const { classes, cx, theme } = useNavStyles();

  const { linkBox, link, linkActive } = classes;

  const items = menus.map((menu) => (
    <div
      className={linkBox}
      key={menu.label}
      onClick={(e) => {
        e.preventDefault();
        setActive(menu.link);
        close();
        navigate(menu.link);
      }}
    >
      <div className={cx(link, { [linkActive]: active === menu.link })}>
        {menu.label}
      </div>
    </div>
  ));

  return items;
}
