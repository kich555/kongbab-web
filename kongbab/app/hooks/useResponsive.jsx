import { useMantineTheme } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';

export default function useResponsive(params) {
  const theme = useMantineTheme();
  const { breakpoints } = theme;
  const mobile = useMediaQuery(`(max-width: ${breakpoints.sm}px)`, false);

  return mobile;
}
