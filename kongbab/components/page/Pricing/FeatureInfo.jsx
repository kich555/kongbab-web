import { List, Text } from '@mantine/core';

export default function FeatureInfo({ index, color, title, desc }) {
  return (
    <List.Item>
      <Text size='xl' color={color} weight={700}>
        {index}
      </Text>
      <Text size='lg' weight={700} style={{ marginTop: '30px' }}>
        {title}
      </Text>
      <Text size='md' style={{ marginTop: '19px', lineHeight: '150%' }}>
        {desc}
      </Text>
    </List.Item>
  );
}
