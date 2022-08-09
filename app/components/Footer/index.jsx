import { Container, Image, Text, Space, Group } from '@mantine/core';
import Kakao from '~/asset/icon/Kakao';
import Naver from '~/asset/icon/Naver';
import useFooterStyles from '~/Style/components/useFooterStyles';
import KakaoSvg from '~/asset/icon/Kakao.svg';
import useResponsive from '~/hooks/useResponsive';
import MobileCompanyInfo from '~/components/Footer/Mobile/MobileCompanyInfo';
import CompanyInfo from '~/components/Footer/CompanyInfo';

export default function Footer() {
  const { classes, theme, cx } = useFooterStyles();
  const { footer, container, lineHeight150, links, alignSelfStart, gray } =
    classes;
  const { white } = theme;
  const { mobile } = useResponsive();

  return (
    <div className={footer}>
      <Container className={container} px={mobile ? 25 : 0}>
        {mobile ? <MobileCompanyInfo /> : <CompanyInfo />}
        <div className={links}>
          <Space h={mobile ? 45 : 50} />
          <Text size='sm' color={white} weight={700}>
            상담센터
          </Text>
          <Space h={15} />
          <Text size='sm' className={cx(gray, lineHeight150)}>
            카톡으로 상담신청하시면 가장 빠릅니다.
            <Space h={20} />
            <Group spacing={mobile ? 15 : 25}>
              <div className={alignSelfStart}>
                평일: 10:00 - 18:00
                <br />
                점심: 12:00 - 13:00
              </div>
              <div>
                메일: team@esolaw.com
                <br />
                전화: 02-6713-2461
                <br />
                팩스: 02-6919-2737
              </div>
            </Group>
            {mobile && (
              <>
                <Space h={20} />
                <Group spacing={10}>
                  <Kakao />
                  <Image src={KakaoSvg} width={40} height={40} />
                  {/* <Naver /> */}
                </Group>
              </>
            )}
          </Text>
        </div>
      </Container>
      <Space h={mobile ? 40 : 50} />
    </div>
  );
}
