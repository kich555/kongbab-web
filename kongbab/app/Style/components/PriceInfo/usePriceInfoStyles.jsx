import { createStyles } from '@mantine/core';

const usePriceInfoStyles = createStyles((theme) => ({
  header: {
    [theme.fn.smallerThan('md')]: {
      position: 'absolute',
      top: 0,
      left: 0,
      height: '45px',
      width: '100%',
      backgroundColor: theme.black,
      borderRadius: '20px 20px 0 0 ',
    },
  },
  box: {
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    width: '100%',
    textAlign: 'center',
    backgroundColor: theme.white,
  },

  deskTopBox: {
    maxWidth: '276px',
    padding: '30px 14px 25px 14px',
    '&:nth-of-type(-n+2)': {
      borderRight: '1px solid #EEEEEE',
      [theme.fn.smallerThan('sm')]: {
        borderRight: 'none',
      },
    },
  },
  list: {
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
    gap: '15px',
    textAlign: 'left',
  },
  listItem: {
    display: 'flex',
    width: '100%',
    height: '16px',
  },
}));

export default usePriceInfoStyles;
