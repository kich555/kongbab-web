import PriceInfo from '../PriceInfo';
import usePriceInfoListStyles from '~/Style/page/Pricing/usePriceInfoListStyles';
import { Space } from '@mantine/core';
import PRICE_INFO from '~/constants/common/priceInfoData';

export default function MobilePriceInfoList() {
  const { classes, cx } = usePriceInfoListStyles();
  const { wrapper, mobileWrapper } = classes;

  const items = PRICE_INFO.map((plan) => (
    <PriceInfo
      key={plan.title}
      title={plan.title}
      price={plan.price}
      options={plan.options}
    />
  ));
  return (
    <>
      <Space h={60} />
      <ul className={cx(wrapper, mobileWrapper)}>{items}</ul>;
    </>
  );
}
