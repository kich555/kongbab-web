import PriceInfoContainer from 'components/page/Pricing/PriceInfoList';
import Title from 'components/Title';
import PRICING_CONSTANTS from '~/constants/page/Pricing';

export default function pricing(params) {
  const { RATE_PLANS } = PRICING_CONSTANTS;
  return (
    <>
      <Title title='요금 안내' />
      <PriceInfoContainer plans={RATE_PLANS} />
    </>
  );
}
