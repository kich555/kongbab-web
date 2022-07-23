import { Center, Text } from '@mantine/core';

export default function Title({ title }) {
  return (
    <Center>
      <Text size='xl' weight={700}>
        {title}
      </Text>
    </Center>
  );
}
