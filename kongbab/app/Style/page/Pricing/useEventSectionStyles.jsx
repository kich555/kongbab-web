import { createStyles } from '@mantine/core';

const useEventSectionStyles = createStyles((theme) => ({
  warpper: {
    padding: '50px 50px 29px 50px',
    borderRadius: '20px',
    backgroundColor: theme.colors.green[3],
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
  sticker: {
    display: 'flex',
    alignItems: 'center',
  },
  horizontal: {
    padding: '0 26px',
  },
}));

export default useEventSectionStyles;
