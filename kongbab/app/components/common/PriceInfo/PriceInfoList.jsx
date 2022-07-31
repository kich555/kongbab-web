import { Center, Space, Text, Group } from '@mantine/core';
import OtherItem from '~/components/common/PriceInfo/OtherItem';
import PRICE_INFO from '~/constants/common/priceInfoData';
import PriceInfo from '~/components/common/PriceInfo/PriceInfo';
import usePriceInfoListStyles from '~/Style/components/PriceInfo/usePriceInfoListStyles';

export default function PriceInfoList() {
  const { classes, cx } = usePriceInfoListStyles();
  const { footer, lineHeight150, maxWidth, list, box, title, listTitle } =
    classes;

  const items = PRICE_INFO.map((plan) => (
    <PriceInfo
      key={plan.title}
      title={plan.title}
      price={plan.price}
      options={plan.options}
    />
  ));

  const itemList = (
    <div className={list}>
      <Center className={cx(title, listTitle)}>
        <Text size='md' color='white' weight={700}>
          차임 연체 (주택, 상가)
        </Text>{' '}
      </Center>
      <ul className={box}>{items}</ul>
    </div>
  );

  return (
    <>
      <Space h={80} />
      <Group spacing={6} className={maxWidth}>
        {itemList}
        <OtherItem />
      </Group>
      <Space h={30} />
      <Text size='sm' align='left' className={cx(footer, lineHeight150)}>
        * 수임료 외 인지대, 송달료, 집행신청비용, 보증보험료가 발생합니다.
        소송목적물가액에 따라 달라지나, 평균 30-50만원 내외입니다.
        <br />* 명도소송의 강제집행은 별도 요금이 부과됩니다.
      </Text>
    </>
  );
}
