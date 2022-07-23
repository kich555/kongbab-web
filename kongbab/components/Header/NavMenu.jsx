import { Group, Menu } from '@mantine/core';
import { useState } from 'react';
import useNavStyles from '~/Style/component/useNavStyles';

export default function NavMenu({ setOpened }) {
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
    <div className={linkBox}>
      <a
        className={cx(link, { [linkActive]: active === menu.link })}
        key={menu.label}
        href={menu.link}
        onClick={(e) => {
          e.preventDefault();
          setActive(menu.link);
          setOpened(false);
        }}
      >
        {menu.label}
      </a>
    </div>
  ));

  return (
    <Group className={links} spacing={5}>
      {items}
    </Group>
  );
}
