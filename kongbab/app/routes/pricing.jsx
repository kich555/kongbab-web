import FeatureList from 'components/page/Pricing/FeatureList';
import EventSection from 'components/page/Pricing/EventSection';
import FeaturedFAQSection from 'components/page/Pricing/FeaturedFAQSection';
import PRICING_CONSTANTS from '~/constants/page/pricingPageData';
import { Space } from '@mantine/core';
import PriceInfoListSection from 'components/page/Pricing/PriceInfoListSection';

export default function pricing(params) {
  const { RATE_PLANS, FEATURES, FEATURED_FAQ } = PRICING_CONSTANTS;

  return (
    <>
      <section style={{ backgroundColor: '#F2F4F7' }}>
        <PriceInfoListSection plans={RATE_PLANS} />
        <FeatureList features={FEATURES} />
      </section>
      <section>
        <Space h={150} />
        <EventSection />
      </section>
      <section>
        <FeaturedFAQSection questions={FEATURED_FAQ} />
      </section>
    </>
  );
}
