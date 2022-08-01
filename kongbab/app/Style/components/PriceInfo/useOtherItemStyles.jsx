import { createStyles } from '@mantine/core';

const useOtherItemStyles = createStyles((theme) => ({
  wrapper: {
    maxWidth: '252px',
    width: '100%',
    height: '499px',
    borderRadius: '24px',
    boxShadow: '0px 4px 10px rgba(54, 75, 96, 0.05)',
    overflow: 'hidden',
    backgroundColor: theme.white,
    [theme.fn.smallerThan('sm')]: {
      maxWidth: '325px',
    },
  },
  inner: {
    flexDirection: 'column',
    height: '100%',
  },
  title: {
    paddingTop: '14px',
    paddingBottom: '14px',
    background: theme.colors.dark[1],
  },
  desc: { padding: '0 16px 0 16px', lineHeight: '150%' },
}));

export default useOtherItemStyles;
