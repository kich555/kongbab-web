import { Container, Group, Text, Space } from '@mantine/core';
import Title from 'components/Title';
import useFeatureListStyles from '~/Style/page/Pricing/useFeatureListStyles';

export default function FeatureList({ features }) {
  const { classes } = useFeatureListStyles();
  const { item } = classes;

  const items = features.map((feature, idx) => (
    <Container key={feature.title} className={item}>
      <Text size='xl' color={feature.color} weight={700}>
        {idx + 1}
      </Text>
      <Space h={30} />
      <Text size='lg' weight={700}>
        {feature.title}
      </Text>
      <Space h={19} />
      <Text size='md' style={{ lineHeight: '150%' }}>
        {feature.desc}
      </Text>
    </Container>
  ));

  return (
    <Container px={0}>
      <Space h={80} />
      <Title title='요금 안내' />
      <Space h={100} />
      <Group spacing={24}>{items}</Group>
      <Space h={150} />
    </Container>
  );
}
