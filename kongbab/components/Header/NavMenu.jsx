import { useNavigate } from '@remix-run/react';
import { Group } from '@mantine/core';
import { useState } from 'react';
import useNavStyles from '~/Style/component/useNavStyles';

export default function NavMenu({ setOpened }) {
  const navigate = useNavigate();
  const menus = [
    {
      link: '/',
      label: '콩밥 소개',
    },
    {
      link: '/process',
      label: '진행 방법',
    },
    {
      link: '/pricing',
      label: '요금 안내',
    },
    {
      link: '/faq',
      label: '자주 묻는 질문',
    },
    {
      link: '/blog',
      label: '블로그',
    },
  ];

  const [active, setActive] = useState(menus[0].link);
  const { classes, cx, theme } = useNavStyles();

  const { links, linkBox, link, linkActive } = classes;

  const items = menus.map((menu) => (
    <div className={linkBox} key={menu.label}>
      <div
        className={cx(link, { [linkActive]: active === menu.link })}
        onClick={(e) => {
          e.preventDefault();
          setActive(menu.link);
          setOpened(false);
          navigate(menu.link);
        }}
      >
        {menu.label}
      </div>
    </div>
  ));

  return (
    <Group className={links} spacing={10}>
      {items}
    </Group>
  );
}
