import { createStyles } from '@mantine/core';

const useMainCardSectionStyles = createStyles((theme) => ({
  font40: {
    fontSize: '40px',
    [theme.fn.smallerThan('sm')]: {
      maxWidth: '252px',
      margin: 'auto',
      fontSize: theme.fontSizes.lg,
    },
  },
  font20: {
    fontSize: '20px',
    [theme.fn.smallerThan('sm')]: {
      fontSize: theme.fontSizes.md,
      lineHeight: '150%',
    },
  },
}));

export default useMainCardSectionStyles;
