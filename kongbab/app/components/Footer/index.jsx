import {
  Center,
  Container,
  Divider,
  Image,
  Text,
  Space,
  Group,
} from '@mantine/core';
import Kakao from '~/asset/icon/Kakao';
import Naver from '~/asset/icon/Naver';
import useFooterStyles from '~/Style/components/useFooterStyles';
import KakaoSvg from '~/asset/icon/Kakao.svg';
import NaverSvg from '~/asset/icon/Naver.svg';
import useResponsive from '~/hooks/useResponsive';
export default function Footer(params) {
  // const { isTop } = useDetectTopNav();
  // const [opened, setOpened] = useBooleanToggle(false);
  // const scroll = useWindowScroll()[0];
  const { classes, cx, theme } = useFooterStyles();
  const {
    footer,
    container,
    lineHeight150,
    title,
    marginTop20,
    links,
    iconWrapper,
    menuItems,
    menuItem,
  } = classes;
  const { colors } = theme;
  const { mobile } = useResponsive();
  return (
    <div className={footer}>
      <Container className={container} px={36}>
        <div>
          <Space h={mobile ? 40 : 60} />
          <Text size='sm' weight={700}>
            법률사무소 이소
          </Text>
          <Space h={20} />
          <Text size='sm' color={colors.blue[0]} className={lineHeight150}>
            대표 김서영 | 서울 강남구 테헤란로2길 27, 11층 (역삼동)
            |광고책임변호사 김서영
            <br />
            사업자등록번호 770-31-00160 | 통신판매업 2016-서울서초-1999호
            <br />
            문의/제휴 team@esolaw.com | 상담 10:00~18:00 (평일)
            <Space h={20} />© 2016-2022. ESO LAW. All rights reserved.
          </Text>
        </div>
        <div className={links}>
          <Space h={30} />
          <Group spacing={10}>
            <Kakao />
            <Image src={KakaoSvg} />
          </Group>
          <Space h={mobile ? 30 : 20} />
          <ul className={menuItems}>
            <li className={menuItem}>개인정보처리방침</li>
            <li className={menuItem}>면책약관</li>
          </ul>
        </div>
      </Container>
      <Space h={mobile ? 40 : 50} />
    </div>
  );
}
