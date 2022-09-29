import { createStyles } from '@mantine/core';
import type { MantineTheme } from '@mantine/core';

const errorHandlerStyles = createStyles(
  (theme: MantineTheme, pathname: string) => ({
    root: {
      backgroundColor: theme.colors.gray[3],
    },

    label: {
      lineHeight: 1,
      color: theme.colors[theme.primaryColor],
      fontSize: pathname.includes('/auth') ? 120 : 220,
      [theme.fn.smallerThan('sm')]: {
        fontSize: 120,
      },
    },

    title: {
      fontFamily: `Greycliff CF, ${theme.fontFamily}`,
      fontSize: pathname.includes('/auth') ? 32 : 38,
      [theme.fn.smallerThan('sm')]: {
        fontSize: 32,
      },
    },

    description: {
      maxWidth: 540,
      margin: 'auto',
    },

    button: {
      color: theme.colors[theme.primaryColor],
    },
  })
);

export default errorHandlerStyles;
