import FeatureList from 'components/page/Pricing/FeatureList';
import PriceInfoList from 'components/page/Pricing/PriceInfoList';
import EventSection from 'components/page/Pricing/EventSection';
import FeaturedFAQSection from 'components/page/Pricing/FeaturedFAQSection';
import PRICING_CONSTANTS from '~/constants/page/pricingPageData';

export default function pricing(params) {
  const { RATE_PLANS, FEATURES, FEATURED_FAQ } = PRICING_CONSTANTS;

  return (
    <>
      <section style={{ backgroundColor: '#F2F4F7' }}>
        <PriceInfoList plans={RATE_PLANS} />
        <FeatureList features={FEATURES} />
      </section>
      <section>
        <EventSection />
      </section>
      <section>
        <FeaturedFAQSection questions={FEATURED_FAQ} />
      </section>
    </>
  );
}
