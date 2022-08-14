import { createStyles } from '@mantine/core';

const useMiddleBannerStyles = createStyles((theme) => ({
  section: {
    backgroundColor: theme.black,
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
