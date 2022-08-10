import { Center, MediaQuery, Text } from '@mantine/core';

export default function Title({ title, style }) {
  return (
    <Center>
      <MediaQuery
        smallerThan='sm'
        styles={{ fontSize: '28px', marginTop: '80px !important' }}
      >
        <Text size='xl' style={{ ...style, marginTop: '120px' }} weight={700}>
          {title}
        </Text>
      </MediaQuery>
    </Center>
  );
}
