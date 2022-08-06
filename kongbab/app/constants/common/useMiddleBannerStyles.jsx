import { createStyles } from '@mantine/core';

const useMiddleBannerStyles = createStyles((theme) => ({
  section: {
    background: 'linear-gradient(to left, white 50%, black 50%) right',
    backgroundSize: '200% 100%',
    transition: 'all 1.5s ease',
  },
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',

    // '&:hover': {
    //   backgroundPosition: 'left',
    // },
  },
  font18: {
    fontSize: '18px',
    [theme.fn.smallerThan('sm')]: {
      fontSize: theme.fontSizes.md,
    },
  },
  font40: {
    lineHeight: '150%',
    fontSize: '40px',
    [theme.fn.smallerThan('sm')]: {
      fontSize: theme.fontSizes.lg,
    },
  },
}));

export default useMiddleBannerStyles;
