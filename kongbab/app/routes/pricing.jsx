import FeatureList from 'components/page/Pricing/FeatureList';
import PriceInfoList from 'components/page/Pricing/PriceInfoList';
import Title from 'components/Title';
import PRICING_CONSTANTS from '~/constants/page/Pricing';

export default function pricing(params) {
  const { RATE_PLANS, FEATURES } = PRICING_CONSTANTS;
  return (
    <>
      <Title title='요금 안내' />
      <PriceInfoList plans={RATE_PLANS} />
      <Title title='요금 안내' style={{ marginTop: '200px' }} />
      <FeatureList features={FEATURES} />
    </>
  );
}
