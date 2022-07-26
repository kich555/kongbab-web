import { createStyles } from '@mantine/core';

const useBlogCardListStyles = createStyles((theme) => ({
  listWrapper: {
    display: 'inline-block',
    paddingLeft: '26px',
    paddingRight: '26px',
  },
  list: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3,1fr)',
    columnGap: '24px',
    rowGap: '50px',
    padding: '50px 0 200px 0 ',
    [theme.fn.smallerThan('lg')]: {
      gridTemplateColumns: 'repeat(2,1fr)',
    },
    [theme.fn.smallerThan('sm')]: {
      gridTemplateColumns: 'repeat(1,1fr)',
      rowGap: '40px',
    },
  },
}));

export default useBlogCardListStyles;
