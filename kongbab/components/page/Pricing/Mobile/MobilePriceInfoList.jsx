import PriceInfo from '../PriceInfo';
import usePriceInfoListStyles from '~/Style/page/Pricing/usePriceInfoListStyles';
import { Space } from '@mantine/core';

export default function MobilePriceInfoList({ box, plans }) {
  const { classes, cx } = usePriceInfoListStyles();
  const { wrapper, mobileWrapper } = classes;

  const items = plans.map((plan) => (
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
