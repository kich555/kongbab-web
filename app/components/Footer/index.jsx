import { Container, Text, Space, Group } from '@mantine/core';
import useFooterStyles from '~/Style/components/useFooterStyles';
import useResponsive from '~/hooks/useResponsive';
import MobileCompanyInfo from '~/components/Footer/Mobile/MobileCompanyInfo';
import CompanyInfo from '~/components/Footer/CompanyInfo';
import MultiLineText from '~/components/common/CustomMantine/MultiLineText';
import SNSGroup from './SNSGroup';

export default function Footer() {
  const { classes, theme } = useFooterStyles();
  const { wrapper, inner, links, alignSelfStart } = classes;
  const { white, colors } = theme;
  const { mobile, tablet } = useResponsive();

  return (
    <div className={wrapper}>
      <Container className={inner} px={tablet ? 25 : 0}>
        {mobile ? <MobileCompanyInfo /> : <CompanyInfo />}
        <div className={links}>
          <Space h={mobile ? 45 : 50} />
          <Text size='sm' color={white} weight={700}>
            상담센터
          </Text>
          <Space h={15} />
          <MultiLineText size='sm' color={colors.gray[4]}>
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
                <SNSGroup />
              </>
            )}
          </MultiLineText>
        </div>
        <Space h={mobile ? 40 : 50} />
      </Container>
    </div>
  );
}
