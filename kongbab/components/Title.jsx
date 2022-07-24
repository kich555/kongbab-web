import { Center, Text } from '@mantine/core';

export default function Title({ title, style }) {
  return (
    <Center>
      <Text size='xl' style={style} weight={700}>
        {title}
      </Text>
    </Center>
  );
}
