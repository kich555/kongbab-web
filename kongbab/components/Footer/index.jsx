import { Center, Container, Divider, Image } from '@mantine/core';
import Kakao from '~/asset/icon/Kakao';
import Naver from '~/asset/icon/Naver';
import useFooterStyles from '~/Style/component/useFooterStyles';
import KakaoSvg from '~/asset/icon/Kakao.svg';
import NaverSvg from '~/asset/icon/Naver.svg';
export default function Footer(params) {
  // const { isTop } = useDetectTopNav();
  // const [opened, setOpened] = useBooleanToggle(false);
  // const scroll = useWindowScroll()[0];
  const { classes, cx, theme } = useFooterStyles();
  const {
    footer,
    container,
    InfoWarpper,
    title,
    marginTop20,
    links,
    iconWrapper,
    menuItems,
    menuItem,
  } = classes;
  console.log('theme.y', theme);
  return (
    <div className={footer}>
      <Container className={container}>
        <div className={InfoWarpper}>
          <span className={title}>법률사무소 이소</span>
          <div className={marginTop20}>
            대표 김서영 | 서울 강남구 테헤란로2길 27, 11층 (역삼동)
            |광고책임변호사 김서영
            <br />
            사업자등록번호 770-31-00160 | 통신판매업 2016-서울서초-1999호
            <br />
            문의/제휴 team@esolaw.com | 상담 10:00~18:00 (평일)
          </div>
          <div className={marginTop20}>
            © 2016-2022. ESO LAW. All rights reserved.
          </div>
        </div>
        <div className={links}>
          <div className={iconWrapper}>
            {/* <Image src={NaverSvg} /> */}
            <Kakao />
            {/* <Naver /> */}
            <Image src={KakaoSvg} />
          </div>
          <ul className={`${menuItems} ${marginTop20}`}>
            <li className={menuItem}>개인정보처리방침</li>
            <li className={menuItem}>면책약관</li>
          </ul>
        </div>
      </Container>
    </div>
  );
}
