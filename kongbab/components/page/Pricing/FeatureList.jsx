import { Container, List } from '@mantine/core';
import FeatureInfo from './FeatureInfo';
import useFeatureListStyles from '~/Style/page/Pricing/useFeatureListStyles';
export default function FeatureList({ features }) {
  const { classes } = useFeatureListStyles();
  const { root, item } = classes;
  const items = features.map((feature, idx) => (
    <FeatureInfo
      key={feature.title}
      index={idx}
      color={feature.color}
      title={feature.title}
      desc={feature.desc}
    />
  ));
  console.log('features', features);
  return (
    <Container>
      <List classNames={{ root, item }}>{items}</List>
    </Container>
  );
}
