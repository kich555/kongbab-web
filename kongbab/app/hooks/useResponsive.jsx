import { useMantineTheme } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';

export default function useResponsive(params) {
  const theme = useMantineTheme();
  const { breakpoints } = theme;

  const responsive = {
    tiny: useMediaQuery(`(max-width: ${breakpoints.xs}px)`, false),
    mobile: useMediaQuery(`(max-width: ${breakpoints.sm}px)`, false),
    tablet: useMediaQuery(`(max-width: ${breakpoints.md}px)`, false),
  };

  return responsive;
}
