import { Space, Text } from '@mantine/core';
import FeatureList from '~/components/common/FeatureList';
import PriceInfoListSection from '~/components/common/PriceInfo/PriceInfoListSection';
import useThirdSectionStyles from '~/Style/page/Main/useThirdSectionStyles';

export default function MainThirdSection() {
  const { classes, theme } = useThirdSectionStyles();
  const { wrapper, inner, title, desc } = classes;
  const { colors, primaryColor, white } = theme;
  return (
    <section className={wrapper}>
      <Space h={150} />
      <FeatureList />
      <div className={inner}>
        <Space h={100} />
        <Text
          color={colors[primaryColor]}
          align='center'
          weight={700}
          className={title}
        >
          온라인 명도소송
        </Text>
        <Space h={24} />
        <Text color={white} align='center' weight={700} className={desc}>
          소송도 얼마든지
          <br />
          간편하고 합리적인 요금으로 진행할 수 있습니다
        </Text>
        <Space h={100} />
      </div>
      <PriceInfoListSection />
      <Space h={150} />
    </section>
  );
}
