import parse from 'html-react-parser';
import { Space } from '@mantine/core';
import FeatureList from '~/components/common/FeatureList';
import MiddleBanner from '~/components/common/MiddleBanner';
import PriceInfoListSection from '~/components/common/PriceInfo/PriceInfoListSection';
import useThirdSectionStyles from '~/Style/page/Main/useThirdSectionStyles';
import MAIN_CONSTANTS from '../../../constants/page/mainPageData';

export default function MainThirdSection() {
  const { classes } = useThirdSectionStyles();
  const { wrapper } = classes;
  const { MIDDLE_BANNER } = MAIN_CONSTANTS;
  return (
    <section className={wrapper}>
      <Space h={150} />
      <FeatureList />
      <MiddleBanner
        title={MIDDLE_BANNER.title}
        desc={parse(MIDDLE_BANNER.desc)}
      >
        소송도 얼마든지
        <br />
        간편하고 합리적인 요금으로 진행할 수 있습니다
      </MiddleBanner>
      <PriceInfoListSection />
      <Space h={150} />
    </section>
  );
}
