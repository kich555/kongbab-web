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
  carouselB: {
    [theme.fn.smallerThan('sm')]: {
      display: 'none',
    },
  },

  font18: {
    fontSize: '18px',
    [theme.fn.smallerThan('sm')]: {
      fontSize: theme.fontSizes.sm,
      textAlign: 'center',
    },
  },

  subTitle: {
    fontSize: '18px',
    [theme.fn.smallerThan('sm')]: {
      fontSize: theme.fontSizes.md,
      textAlign: 'center',
      maxWidth: '182px',
      margin: 'auto',
    },
  },

  font40: {
    fontSize: '40px',
    [theme.fn.smallerThan('sm')]: {
      fontSize: '28px',
      textAlign: 'center',
    },
  },
  lineHeight150: {
    lineHeight: '150%',
  },

  image: {
    [theme.fn.smallerThan('md')]: {
      height: '190px',
    },
  },
  backgorund: {
    backgroundColor: theme.colors.gray[0],
  },
  shadow: {
    boxShadow: '0px 10px 10px #2D2D2D0D',
  },
  flewRow: {
    display: 'flex',
  },
}));

export default useMainHeaderStyles;
