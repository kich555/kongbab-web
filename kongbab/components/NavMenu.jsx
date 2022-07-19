import { Group, Menu } from '@mantine/core';
import { useState } from 'react';
import useNavStyles from '~/Style/useNavStyles';

export default function NavMenu({ menus, setOpened }) {
  const [active, setActive] = useState(menus[0].link);
  const { classes, cx, theme } = useNavStyles();
  console.log(theme);
  const { links, link, linkActive } = classes;
  console.log('active', active);
  const items = menus.map((menu) => (
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
  ));

  return (
    <Group className={links} spacing={5}>
      {items}
    </Group>
  );
}
