import { Container } from '@mantine/core';
import Kakao from '~/asset/icon/Kakao';
import Naver from '~/asset/icon/Naver';
import useFooterStyles from '~/Style/useFooterStyles';

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
    description,
    companyHistory,
    menuItems,
    menuItem,
    iconWrapper,
  } = classes;
  console.log('theme.y', theme);
  return (
    <div className={footer}>
      <Container className={container}>
        <div className={InfoWarpper}>
          <span className={title}>법률사무소 이소</span>
          <div className={description}>
            대표 김서영 | 서울 강남구 테헤란로2길 27, 11층 (역삼동)
            |광고책임변호사 김서영
            <br />
            사업자등록번호 770-31-00160 | 통신판매업 2016-서울서초-1999호
            <br />
            문의/제휴 team@esolaw.com | 상담 10:00~18:00 (평일)
          </div>
          <span className={companyHistory}>
            © 2016-2022. ESO LAW. All rights reserved.
          </span>
        </div>
        <div>
          <div className={iconWrapper}>
            <Kakao />
            <Naver />
          </div>
          <ul className={menuItems}>
            <li className={menuItem}>개인정보처리방침</li>
            <li className={menuItem}>면책약관</li>
          </ul>
        </div>
      </Container>
    </div>
  );
}
