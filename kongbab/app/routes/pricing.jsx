import FeatureList from 'components/page/Pricing/FeatureList';
import PriceInfoList from 'components/page/Pricing/PriceInfoList';
import PRICING_CONSTANTS from '~/constants/page/Pricing';

export default function pricing(params) {
  const { RATE_PLANS, FEATURES } = PRICING_CONSTANTS;

  return (
    <>
      <PriceInfoList plans={RATE_PLANS} />
      <FeatureList features={FEATURES} />
    </>
  );
}
