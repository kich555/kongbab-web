import FeatureList from 'components/page/Pricing/FeatureList';
import PriceInfoList from 'components/page/Pricing/PriceInfoList';
import EventSection from 'components/page/Pricing/EventSection';
import PRICING_CONSTANTS from '~/constants/page/Pricing';

export default function pricing(params) {
  const { RATE_PLANS, FEATURES } = PRICING_CONSTANTS;

  return (
    <>
      <section style={{ backgroundColor: '#F2F4F7' }}>
        <PriceInfoList plans={RATE_PLANS} />
        <FeatureList features={FEATURES} />
      </section>
      <section>
        <EventSection />
      </section>
    </>
  );
}
