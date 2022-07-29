import { Container, Group, Text, Space, MediaQuery } from '@mantine/core';
import Title from 'components/Title';
import useResponsive from '~/hooks/useResponsive';
import useFeatureListStyles from '~/Style/page/Pricing/useFeatureListStyles';

export default function FeatureList({ features }) {
  const { classes, theme } = useFeatureListStyles();
  const { primaryColor, colors } = theme;
  const { item, lineHeight150 } = classes;
  const { tablet } = useResponsive();

  const mobileItem = {
    display: 'flex',
    maxWidth: '325px',
    padding: '30px 25px',
  };

  const items = features.map((feature, idx) => (
    <MediaQuery key={feature.title} smallerThan='md' styles={mobileItem}>
      <Container className={item}>
        <Text size='xl' color={colors[primaryColor]} weight={700}>
          {idx + 1}
        </Text>
        {tablet ? <Space w={26} /> : <Space h={30} />}
        <div>
          <Text size='lg' weight={700}>
            {feature.title}
          </Text>
          <Space h={tablet ? 15 : 19} />
          <Text size='md' className={lineHeight150}>
            {feature.desc}
          </Text>
        </div>
      </Container>
    </MediaQuery>
  ));

  return (
    <Container px={tablet ? 26 : 0}>
      <Space h={tablet ? 40 : 80} />
      <Title title='요금 안내' />
      <Space h={tablet ? 60 : 100} />
      <MediaQuery smallerThan='md' styles={{ justifyContent: 'center' }}>
        <Group spacing={tablet ? 30 : 24}>{items}</Group>
      </MediaQuery>
      <Space h={tablet ? 60 : 150} />
    </Container>
  );
}
