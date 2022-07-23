import { Burger, Button, Container, Header, Transition } from '@mantine/core';
import { HeaderLogo } from '../Logo';
import NavMenu from './NavMenu';
import { useBooleanToggle, useWindowScroll } from '@mantine/hooks';
import useNavStyles from '~/Style/component/useNavStyles';

export default function Nav(params) {
  // const { isTop } = useDetectTopNav();
  const [opened, setOpened] = useBooleanToggle(false);
  const scroll = useWindowScroll()[0];
  const { classes, cx, theme } = useNavStyles();
  const { header, headerActive, container, menuWrapper, button } = classes;
  console.log('theme.y', theme);
  return (
    <Header
      className={cx(header, { [headerActive]: scroll.y !== 0 })}
      height={scroll.y === 0 ? 100 : 80}
    >
      <Container className={container}>
        <HeaderLogo />
        <div className={menuWrapper}>
          <NavMenu setOpened={setOpened} />
          <Button
            sx={(theme) => ({
              backgroundColor: theme.colors.dark[1],
            })}
            className={button}
            variant='filled'
            radius={36}
            onClick={() => console.log('test')}
          >
            카톡 상담 신청
          </Button>
        </div>
        {/* <Burger
            opened={opened}
            onClick={() => setOpened()}
            // className={burger}
            size='sm'
          />
          <Transition>

          </Transition> */}
      </Container>
    </Header>
  );
}
