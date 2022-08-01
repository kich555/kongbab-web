import { createStyles } from '@mantine/core';

const usePriceInfoListStyles = createStyles((theme) => ({
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  mobileWrapper: {
    gap: '30px',
    width: '100%',
  },

  list: {
    maxWidth: '822px',
    width: '100%',
    borderRadius: '24px',
    overflow: 'hidden',
    boxShadow: '0px 4px 10px rgba(54, 75, 96, 0.05)',
    backgroundColor: theme.white,
  },
  box: {
    display: 'flex',
  },
  title: {
    paddingTop: '14px',
    paddingBottom: '14px',
  },
  listTitle: {
    background: theme.colors.carrot,
  },

  lineHeight150: {
    lineHeight: '150%',
  },
  footer: {
    alignSelf: 'flex-start',
    [theme.fn.smallerThan('md')]: {
      maxWidth: '325px',
      marginLeft: 0,
    },
  },
  maxWidth: { width: '100%' },
}));

export default usePriceInfoListStyles;
