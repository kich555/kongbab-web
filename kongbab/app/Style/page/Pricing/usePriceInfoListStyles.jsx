import { createStyles } from '@mantine/core';

const usePriceInfoListStyles = createStyles((theme) => ({
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '120px 0 0 0',
  },
  listWrapper: {
    display: 'flex',
    marginTop: '80px',
  },
  list: {
    borderRadius: '24px',
    overflow: 'hidden',
    paddingLeft: 0,
    paddingRight: 0,
    boxShadow: '0px 4px 10px rgba(54, 75, 96, 0.05)',
    backgroundColor: theme.white,
  },
  another: {
    width: '252px',
    marginLeft: '6px',
    boxShadow: '0px 4px 10px rgba(54, 75, 96, 0.05)',
    backgroundColor: theme.white,
  },
  box: {
    display: 'flex',
  },
  title: {
    paddingTop: '14px',
    paddingBottom: '15px',
  },
  listTitle: {
    background: 'linear-gradient(90deg, #FF4545 0%, #FF9D66 100%)',
  },
  anotherTitle: {
    background: theme.colors.blue[0],
  },
  anotherDesc: {
    marginTop: '24px',
    padding: '0 16px 0 16px',
    textAlign: 'center',
    lineHeight: '150%',
  },
  notification: {
    maxWidth: '719px',
    marginTop: '30px',
    lineHeight: '150%',
  },
}));

export default usePriceInfoListStyles;
