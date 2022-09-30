import parse from 'html-react-parser';
import { Space } from '@mantine/core';
import FeatureList from '~/components/common/FeatureList';
import MiddleBanner from '~/components/common/MiddleBanner';
import PriceInfoListSection from '~/components/common/PriceInfo/PriceInfoListSection';
import useThirdSectionStyles from '~/styles/page/Main/useThirdSectionStyles';
import MAIN_CONSTANTS from '~/constants/page/mainPageData';

export default function MainThirdSection() {
  const { classes } = useThirdSectionStyles();
  const { wrapper } = classes;
  const { MIDDLE_BANNER } = MAIN_CONSTANTS;
  return (
    <section className={wrapper}>
      <FeatureList />
      <MiddleBanner
        title={MIDDLE_BANNER.title}
        desc={parse(MIDDLE_BANNER.desc)}
      />
      <PriceInfoListSection />
      <Space h={150} />
    </section>
  );
}
