import { Center, Space, Text } from '@mantine/core';
import PriceInfo from '~/components/common/PriceInfo/PriceInfo';
import usePriceInfoListStyles from '~/Style/components/PriceInfo/usePriceInfoListStyles';
import PRICE_INFO from '~/constants/common/priceInfoData';
import OtherItem from '~/components/common/PriceInfo/OtherItem';

export default function MobilePriceInfoList() {
  const { classes, theme, cx } = usePriceInfoListStyles();
  const { colors } = theme;
  const { wrapper, mobileWrapper, footer, lineHeight150 } = classes;

  const items = PRICE_INFO.map((plan) => (
    <PriceInfo
      key={plan.title}
      subTitle={plan.subTitle}
      title={plan.title}
      price={plan.price}
      options={plan.options}
    />
  ));
  return (
    <>
      <Space h={60} />
      <ul className={cx(wrapper, mobileWrapper)}>
        {items}
        <OtherItem />
      </ul>
      <Space h={30} />
      <Center>
        <Text
          size='sm'
          align='left'
          className={cx(footer, lineHeight150)}
          color={colors.gray[3]}
        >
          * 카드 결제 가능, 부가세 별도
          <br />
          * 수임료 외 인지대, 송달료, 집행신청비용, 보증보험료가 발생합니다.
          소송목적물가액에 따라 달라지나, 평균 30-50만원 내외입니다.
          <br />* 명도소송의 강제집행은 별도 요금이 부과됩니다.
        </Text>
      </Center>
    </>
  );
}
