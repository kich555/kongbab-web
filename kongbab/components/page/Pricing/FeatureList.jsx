import { Container, List } from '@mantine/core';
import FeatureInfo from './FeatureInfo';
import Title from 'components/Title';
import useFeatureListStyles from '~/Style/page/Pricing/useFeatureListStyles';

export default function FeatureList({ features }) {
  const { classes } = useFeatureListStyles();
  const { warpper, root, item } = classes;
  const items = features.map((feature, idx) => (
    <FeatureInfo
      key={feature.title}
      index={idx}
      color={feature.color}
      title={feature.title}
      desc={feature.desc}
    />
  ));
  return (
    <Container className={warpper}>
      <Title title='요금 안내' style={{ marginTop: '200px' }} />
      <List classNames={{ root, item }}>{items}</List>
    </Container>
  );
}
