import { Container } from '@mantine/core';
import useResponsive from '~/hooks/useResponsive';
import Title from '~/components/common/Title';
import PriceInfoList from '~/components/common/PriceInfo/PriceInfoList';
import MobilePriceInfoList from '~/components/common/PriceInfo/Mobile/MobilePriceInfoList';

export default function PriceInfoListSection() {
  const { tablet } = useResponsive();
  return (
    <Container px={tablet ? 26 : 0}>
      <Title title='요금 안내' />
      {tablet ? <MobilePriceInfoList /> : <PriceInfoList />}
    </Container>
  );
}
