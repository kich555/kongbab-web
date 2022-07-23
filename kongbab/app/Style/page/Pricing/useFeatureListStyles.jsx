import { createStyles } from '@mantine/core';

const useFeatureListStyles = createStyles((theme) => ({
  warpper: {
    paddingTop: '200px',
    backgroundColor: theme.colors.gray[0],
  },
  root: {
    listStyle: 'none',
    display: 'flex',
    flexWrap: 'wrap',
    gap: '24px',
    paddingTop: '100px',
    paddingBottom: '150px',
  },
  item: {
    overflow: 'hidden',
    maxWidth: '252px',
    padding: '35px 35px 50px 35px',
    borderRadius: '20px',
    boxShadow: '0px 4px 10px rgba(54, 75, 96, 0.05)',
    backgroundColor: theme.white,
  },
}));

export default useFeatureListStyles;
