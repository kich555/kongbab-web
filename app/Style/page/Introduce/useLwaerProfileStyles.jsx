import { createStyles } from '@mantine/core';

const useLwaerProfileStyles = createStyles((theme) => ({
  imageWrapper: {
    borderRadius: '50%',
    overflow: 'hidden',
    width: '200px',
    height: '200px',
    [theme.fn.smallerThan('sm')]: {
      width: '150px',
      height: '150px',
    },
  },
  content: {
    fontSize: '18px',
    lineHeight: '150%',
    [theme.fn.smallerThan('sm')]: {
      fontSize: theme.fontSizes.sm,
    },
  },
  profileName: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: theme.fontSizes.lg,
    [theme.fn.smallerThan('sm')]: {
      fontSize: '20px',
      alignItems: 'end',
    },
  },
}));

export default useLwaerProfileStyles;
