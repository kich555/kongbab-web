import { createStyles } from '@mantine/core';

const useBlogFilterStyles = createStyles((theme) => ({
  filter: {
    flexWrap: 'nowrap',
    minWidth: '534px',
  },
  category: {
    height: '44px',
    padding: '12px 20px',
    borderRadius: '6px',
    fontSize: '20px',
    color: theme.colors.gray[3],
    cursor: 'pointer',
    whiteSpace: 'nowrap',
    '&:hover': {
      backgroundColor: theme.colors.gray[0],
    },
  },
  categoryActive: {
    backgroundColor: theme.colors.gray[0],
    fontWeight: 500,
    color: theme.black,
  },
}));

export default useBlogFilterStyles;
