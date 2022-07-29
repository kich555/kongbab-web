import { Container, Space, Text, Center } from '@mantine/core';
import usePriceInfoListStyles from '~/Style/page/Pricing/usePriceInfoListStyles';

import Title from 'components/Title';
import PriceInfoList from './PriceInfoList';
import MobilePriceInfoList from './Mobile/MobilePriceInfoList';
import useResponsive from '~/hooks/useResponsive';

export default function PriceInfoListSection({ plans }) {
  const { classes, cx } = usePriceInfoListStyles();

  const { box, lineHeight150, footer } = classes;
  const { tablet } = useResponsive();
  return (
    <Container px={0}>
      <Title title='요금 안내' />
      {tablet ? (
        <MobilePriceInfoList box={box} plans={plans} />
      ) : (
        <PriceInfoList plans={plans} />
      )}
      <Space h={30} />
      <Center>
        <Text size='sm' align='left' className={cx(footer, lineHeight150)}>
          * 수임료 외 인지대, 송달료, 집행신청비용, 보증보험료가 발생합니다.
          소송목적물가액에 따라 달라지나, 평균 30-50만원 내외입니다.
          <br />* 명도소송의 강제집행은 별도 요금이 부과됩니다.
        </Text>
      </Center>
    </Container>
  );
}
