import { Container, Image, Text, Space, Group } from '@mantine/core';
import Kakao from '~/asset/icon/Kakao';
import useFooterStyles from '~/Style/components/useFooterStyles';
import KakaoSvg from '~/asset/icon/Kakao.svg';
import useResponsive from '~/hooks/useResponsive';
import MobileCompanyInfo from './Mobile/MobileCompanyInfo';
import CompanyInfo from './companyInfo';
export default function Footer() {
  const { classes, theme } = useFooterStyles();
  const { footer, container, lineHeight150, links, alignSelfStart } = classes;
  const { colors, white } = theme;
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
          <Text size='sm' color={colors.gray[3]} className={lineHeight150}>
            카톡으로 상담신청하시면 가장 빠릅니다.
            <Space h={20} />
            <Group spacing={mobile ? 15 : 25}>
              <div className={alignSelfStart}>
                평일: 10:00 - 18:00
                <br />
                점심: 12:00 - 13:00
              </div>
              <div>
                전화: 02-6713-2461
                <br />
                메일: team@esolaw.com
                <br />
                팩스: 02-6919-2737
              </div>
            </Group>
            {mobile && (
              <>
                <Space h={20} />
                <Group spacing={10}>
                  <Kakao />
                  <Image src={KakaoSvg} />
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
