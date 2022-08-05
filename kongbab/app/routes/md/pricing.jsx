import FeatureList from '~/components/common/FeatureList';
import EventSection from '~/components/page/Pricing/EventSection';
import FeaturedFAQSection from '~/components/page/Pricing/FeaturedFAQSection';
import PRICING_CONSTANTS from '~/constants/page/pricingPageData';

import PriceInfoListSection from '~/components/common/PriceInfo/PriceInfoListSection';
import { useMantineTheme } from '@mantine/core';

export default function Pricing(params) {
  const { RATE_PLANS, FEATURES, FEATURED_FAQ } = PRICING_CONSTANTS;
  const theme = useMantineTheme();
  return (
    <>
      <section style={{ backgroundColor: theme.colors.gray[0] }}>
        <PriceInfoListSection plans={RATE_PLANS} />
        <FeatureList />
      </section>
      <EventSection />
      <FeaturedFAQSection questions={FEATURED_FAQ} />
    </>
  );
}
