import { createStyles } from '@mantine/core';

const useBlogCardStyles = createStyles((theme) => ({
  card: {
    width: '344px',
    padding: '0px !important',
    backgroundColor: theme.colors.dark[7],
    transition: 'transform 250ms',
    '&:hover': {
      transform: 'translateY(-5px)',
    },
  },
  cardSection: { margin: '0px' },

  image: {
    height: '170px !important',
    [theme.fn.smallerThan('sm')]: {
      height: '170px !important',
    },
  },
  titleText: {
    fontSize: '20px',
    paddingTop: '12px',
    [theme.fn.smallerThan('sm')]: {
      paddingTop: '8px',
    },
  },
  descText: {
    paddingTop: '18px',
    [theme.fn.smallerThan('sm')]: {
      display: 'none',
    },
  },
  content: {
    padding: '18px 0 40px 0',
    [theme.fn.smallerThan('sm')]: {
      padding: '18px 0 0 0',
    },
  },
}));

export default useBlogCardStyles;
