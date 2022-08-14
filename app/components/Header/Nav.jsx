import { useNavigate } from '@remix-run/react';
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
import NavItems from '~/components/Header/NavItems';

export default function Nav() {
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
  const items = NavItems({ close });
  const deskTopItems = items.slice(1);
  const navigate = useNavigate();

  return (
    <Header
      className={header}
      // className={cx(header, { [headerActive]: scroll.y !== 0 })}
      height={80}
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
                  backgroundColor: theme.colors[theme.primaryColor],
                })}
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
              <ul>{items}</ul>
              <div onClick={close} className={outer} />
            </Paper>
          )}
        </Transition>
      </Container>
    </Header>
  );
}
