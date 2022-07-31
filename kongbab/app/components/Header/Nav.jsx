import {
  Burger,
  Button,
  Container,
  Header,
  Transition,
  Group,
  Paper,
} from '@mantine/core';
import { HeaderLogo } from '~/components/common/Logo';
import NavItems from './NavItems';
import { useDisclosure, useWindowScroll } from '@mantine/hooks';
import useNavStyles from '~/Style/component/useNavStyles';
import { useNavigate } from '@remix-run/react';
import useAddKakaoChannel from '~/hooks/useAddKakaoChannel';

export default function Nav(params) {
  const [opened, { toggle, close }] = useDisclosure(false);
  const scroll = useWindowScroll()[0];
  const { classes, cx, theme } = useNavStyles(opened);
  const {
    header,
    headerActive,
    container,
    menuWrapper,
    button,
    burger,
    links,
    dropdown,
    outer,
  } = classes;
  const items = NavItems({ close });
  const deskTopItems = items.slice(1);
  const navigate = useNavigate();

  const { addChannel } = useAddKakaoChannel();
  return (
    <Header
      className={cx(header, { [headerActive]: scroll.y !== 0 })}
      height={scroll.y === 0 ? 100 : 80}
    >
      <Container className={container} px={26}>
        {!opened && <HeaderLogo onClick={() => navigate('/')} />}
        <div className={menuWrapper}>
          <Group className={links} spacing={10}>
            {deskTopItems}
          </Group>
          <Group spacing={20}>
            {!opened && (
              <Button
                sx={(theme) => ({
                  backgroundColor: theme.colors.dark[1],
                })}
                className={button}
                variant='filled'
                radius={36}
                onClick={addChannel}
              >
                카톡 상담 신청
              </Button>
            )}

            <Burger
              opened={opened}
              onClick={toggle}
              className={burger}
              size='md'
            />
          </Group>
        </div>
        <Transition transition='pop-top-right' duration={200} mounted={opened}>
          {(styles) => (
            <Paper className={dropdown} withBorder style={styles}>
              {items}
              <div onClick={close} className={outer} />
            </Paper>
          )}
        </Transition>
      </Container>
    </Header>
  );
}
