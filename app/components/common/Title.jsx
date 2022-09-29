import { Center, Text } from '@mantine/core';
import useResponsive from '~/hooks/useResponsive';

export default function Title({ title, style }) {
  const { mobile } = useResponsive();
  return (
    <Center mt={mobile ? 80 : 120}>
      <Text size={mobile ? 28 : 'xl'} sx={{ ...style }} weight={700}>
        {title}
      </Text>
    </Center>
  );
}
