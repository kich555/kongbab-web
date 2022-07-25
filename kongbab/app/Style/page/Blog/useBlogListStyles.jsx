import { createStyles } from '@mantine/core';

const useBlogCardListStyles = createStyles((theme) => ({
  center: {
    display: 'flex',
    flexDirection: 'column',
    padding: '0',
  },
  listWrapper: {
    display: 'inline-block',
    paddingLeft: '26px',
    paddingRight: '26px',
  },
  list: {
    display: 'flex',
    flexWrap: 'wrap',
    columnGap: '24px',
    rowGap: '50px',
    margin: 'auto',
    padding: '50px 0 200px 0 ',
  },
}));

export default useBlogCardListStyles;
