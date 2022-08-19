import FeatureList from '~/components/common/FeatureList';
// import EventSection from '~/components/page/Pricing/EventSection';
import FeaturedFAQSection from '~/components/page/Pricing/FeaturedFAQSection';
import PRICING_CONSTANTS from '~/constants/page/pricingPageData';
import FAQ_CONSTANTS from '~/constants/page/faqPageData';
import PriceInfoListSection from '~/components/common/PriceInfo/PriceInfoListSection';
import { Space, useMantineTheme } from '@mantine/core';

export default function Pricing(params) {
  const { RATE_PLANS } = PRICING_CONSTANTS;
  const { PRICE_FAQ } = FAQ_CONSTANTS;
  const theme = useMantineTheme();
  return (
    <>
      <section style={{ backgroundColor: theme.colors.gray[0] }}>
        <PriceInfoListSection plans={RATE_PLANS} />
        <FeatureList />
      </section>
      {/* <EventSection /> */}
      <Space h={230} />
      <FeaturedFAQSection questions={PRICE_FAQ} />
    </>
  );
}
