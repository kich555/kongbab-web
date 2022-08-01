import FeatureList from '~/components/common/FeatureList';
import EventSection from '~/components/page/Pricing/EventSection';
import FeaturedFAQSection from '~/components/page/Pricing/FeaturedFAQSection';
import PRICING_CONSTANTS from '~/constants/page/pricingPageData';

import PriceInfoListSection from '~/components/common/PriceInfo/PriceInfoListSection';

export default function pricing(params) {
  const { RATE_PLANS, FEATURES, FEATURED_FAQ } = PRICING_CONSTANTS;

  return (
    <>
      <section style={{ backgroundColor: '#F2F4F7' }}>
        <PriceInfoListSection plans={RATE_PLANS} />
        <FeatureList />
      </section>
      <EventSection />
      <FeaturedFAQSection questions={FEATURED_FAQ} />
    </>
  );
}
