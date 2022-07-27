import { createStyles } from '@mantine/core';

const useFeatureListStyles = createStyles((theme) => ({
  item: {
    overflow: 'hidden',
    maxWidth: '252px',
    margin: 0,
    padding: '35px 35px 50px 35px',
    borderRadius: '20px',
    boxShadow: '0px 4px 10px rgba(54, 75, 96, 0.05)',
    backgroundColor: theme.white,
  },
}));

export default useFeatureListStyles;
