import { createStyles } from '@mantine/core';

const useEventSectionStyles = createStyles((theme) => ({
  warpper: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '42px 80px 28px 50px',
    borderRadius: '20px',
    backgroundColor: '#FF45000D',

    overflow: 'hidden',
    [theme.fn.smallerThan('md')]: {
      padding: '30px',
    },
  },
  font30: {
    fontSize: '30px',
    [theme.fn.smallerThan('md')]: {
      fontSize: theme.fontSizes.lg,
    },
  },
  buttonWrapper: {
    display: 'flex',
    [theme.fn.smallerThan('md')]: {
      flexDirection: 'column',
    },
  },

  horizontal: {
    padding: '0 26px',
  },
  justifyBetween: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  imageBox: {
    [theme.fn.smallerThan('sm')]: {
      display: 'none',
    },
  },
}));

export default useEventSectionStyles;
