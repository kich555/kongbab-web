import { createStyles } from '@mantine/core';

const usePriceInfoListStyles = createStyles((theme) => ({
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },

  list: {
    borderRadius: '24px',
    overflow: 'hidden',
    boxShadow: '0px 4px 10px rgba(54, 75, 96, 0.05)',
    backgroundColor: theme.white,
  },
  another: {
    width: '252px',
    height: '443px',
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
  },
}));

export default usePriceInfoListStyles;
