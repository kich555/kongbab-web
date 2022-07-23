import { createStyles } from '@mantine/core';

const useFeatureListStyles = createStyles((theme) => ({
  warpper: {
    padding: '200px 0 150px 0 ',
  },
  root: {
    listStyle: 'none',
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    gap: '24px',
    paddingTop: '100px',
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
