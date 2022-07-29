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
  another: {
    maxWidth: '252px',
    width: '100%',
    height: '443px',
    boxShadow: '0px 4px 10px rgba(54, 75, 96, 0.05)',
    backgroundColor: theme.white,
    [theme.fn.smallerThan('sm')]: {
      maxWidth: '325px',
    },
  },
  box: {
    display: 'flex',
  },
  title: {
    paddingTop: '14px',
    paddingBottom: '14px',
  },
  listTitle: {
    background: 'linear-gradient(90deg, #FF4545 0%, #FF9D66 100%)',
  },
  anotherTitle: {
    background: theme.colors.blue[0],
  },
  anotherDesc: {
    padding: '0 16px 0 16px',
  },
  lineHeight150: {
    lineHeight: '150%',
  },
  footer: {
    alignSelf: 'flex-start',
    marginLeft: '24px',
    [theme.fn.smallerThan('md')]: {
      maxWidth: '325px',
      marginLeft: 0,
    },
  },
  maxWidth: { width: '100%' },
}));

export default usePriceInfoListStyles;
