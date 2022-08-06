import { createStyles } from '@mantine/core';

export const useMainCardStyles = createStyles((theme) => ({
  wrapper: {
    flexGrow: '1',
    height: '500px',
    [theme.fn.smallerThan('sm')]: {
      height: '408px',
    },
    overflow: 'hidden',
    borderRadius: '20px',
    backgroundColor: theme.colors.gray[0],
  },
  font20: {
    fontSize: '20px',
    [theme.fn.smallerThan('sm')]: {
      fontSize: theme.fontSizes.md,
    },
  },
  lineHeight150: {
    lineHeight: '150%',
  },
  image: {
    width: '320px',
    height: 'auto',
    [theme.fn.smallerThan('sm')]: {
      width: '295px',
    },
  },
}));

export const useMainLargeCardStyles = createStyles((theme) => ({
  wrapper: {
    display: 'flex',
    justifyContent: 'space-between',
    borderRadius: '20px',
    backgroundColor: theme.colors.gray[0],
    padding: '48px 45px 57px 70px',
    [theme.fn.smallerThan('sm')]: {
      flexDirection: 'column',
      padding: '40px 36px 10px 36px',
    },
  },

  inner: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  contentWrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  font20: {
    fontSize: '20px',
    [theme.fn.smallerThan('sm')]: {
      fontSize: theme.fontSizes.md,
      textAlign: 'center',
    },
  },
  content: {
    fontSize: '20px',
    [theme.fn.smallerThan('sm')]: {
      fontSize: theme.fontSizes.sm,
      textAlign: 'center',
    },
  },
  lineHeight150: {
    lineHeight: '150%',
  },
  image: {
    width: '453px',
    [theme.fn.smallerThan('sm')]: {
      width: '271px',
    },
    height: 'auto',
  },
}));
