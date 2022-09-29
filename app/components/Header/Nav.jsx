import { useNavigate } from '@remix-run/react';
import { useState } from 'react';
import {
  Burger,
  Button,
  Container,
  Header,
  Transition,
  Group,
  Paper,
} from '@mantine/core';

import { useDisclosure } from '@mantine/hooks';
import useAddKakaoChannel from '~/hooks/useAddKakaoChannel';
import useNavStyles from '~/Style/components/useNavStyles';
import { HeaderLogo } from '~/asset/icon/Logo';
import MobileNavItems from '~/components/Header/MobileNavItems';
import NavItems from './NavItems';
import useResponsive from '~/hooks/useResponsive';
import ROUTES from './constants/navData';


export default function Nav() {
  const [active, setActive] = useState(ROUTES[0].link);
  const [opened, { toggle, close }] = useDisclosure(false);
  const { addKakaoChannel } = useAddKakaoChannel();
  const { classes } = useNavStyles(opened);
  const {
    header,
    container,
    menuWrapper,
    buttonWrapper,
    burger,
    links,
    dropdown,
    outer,
  } = classes;
  const { mobile } = useResponsive();
  const navigate = useNavigate();

  return (
    <Header className={header} height={mobile ? 60 : 80}>
      <Container className={container} px={26}>
        {!opened && <HeaderLogo onClick={() => navigate('/')} />}
        <div className={menuWrapper}>
          <Group className={links} spacing={10}>
            <NavItems close={close} active={active} setActive={setActive} />
          </Group>
          <Group spacing={20}>
            {!opened && (
              <Button
                className={buttonWrapper}
                variant='filled'
                radius={36}
                onClick={addKakaoChannel}
              >
                카톡 상담신청
              </Button>
            )}
            <Burger
              opened={opened}
              onClick={toggle}
              className={burger}
              size='md'
              color='#CACACA'
            />
          </Group>
        </div>
        <Transition transition='pop-top-right' duration={200} mounted={opened}>
          {(styles) => (
            <Paper className={dropdown} withBorder style={styles}>
              <MobileNavItems
                close={close}
                active={active}
                setActive={setActive}
              />
              <div onClick={close} className={outer} />
            </Paper>
          )}
        </Transition>
      </Container>
    </Header>
  );
}
