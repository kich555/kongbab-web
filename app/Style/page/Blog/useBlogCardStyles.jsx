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
    // height: '180px !important',
    // [theme.fn.smallerThan('sm')]: {
    //   height: '180px !important',
    // },
  },
  descText: {
    lineHeight: '150%',
    textOverflow: 'ellipsis',
    [theme.fn.smallerThan('sm')]: {
      display: 'none',
    },
  },
}));

export default useBlogCardStyles;
