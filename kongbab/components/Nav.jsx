import { Burger, Button, Container, Header, Transition } from '@mantine/core';
import { HeaderLogo } from './Logo';
import NavMenu from './NavMenu';
import { useBooleanToggle, useWindowScroll } from '@mantine/hooks';
import useNavStyles from '~/Style/useNavStyles';
import useDetectTopNav from '~/hooks/useDetectTopNav';

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

export default function Nav(params) {
  // const { isTop } = useDetectTopNav();
  const [opened, setOpened] = useBooleanToggle(false);
  const scroll = useWindowScroll()[0];
  const { classes, cx } = useNavStyles();
  const { header, headerActive, container, menuWrapper, button } = classes;
  console.log('scroll.y', scroll.y);
  return (
    <Header
      className={cx(header, { [headerActive]: scroll.y !== 0 })}
      height={scroll.y === 0 ? 100 : 80}
    >
      <Container className={container}>
        <HeaderLogo />
        <div className={menuWrapper}>
          <NavMenu menus={menus} setOpened={setOpened} />
          <Button
            sx={(theme) => ({
              backgroundColor: theme.colors[theme.primaryColor],
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
