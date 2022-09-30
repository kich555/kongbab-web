import { createStyles } from '@mantine/core';

const useMainHeaderStyles = createStyles((theme) => ({
  wrapper: {
    height: '540px',
    overflow: 'hidden',
    [theme.fn.smallerThan('md')]: {
      height: '437px',
    },
  },
  inner: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '100%',
    [theme.fn.smallerThan('sm')]: {
      flexDirection: 'column',
      justifyContent: 'center',
    },
  },
  button: {
    [theme.fn.smallerThan('sm')]: {
      display: 'none',
    },
  },

  lineHeight150: {
    lineHeight: '150%',
  },

  backgorund: {
    backgroundColor: theme.colors.gray[0],
  },
  shadow: {
    boxShadow: '0px 10px 10px #2D2D2D0D',
  },
}));

export default useMainHeaderStyles;
