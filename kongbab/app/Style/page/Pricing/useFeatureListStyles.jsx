import { createStyles } from '@mantine/core';

const useFeatureListStyles = createStyles((theme) => ({
  root: {
    listStyle: 'none',
    display: 'flex',
    flexWrap: 'wrap',
    gap: '24px',
    borderRadius: '20px',
  },
  item: {
    maxWidth: '252px',
    padding: '35px 35px 50px 35px',
    boxShadow: '0px 4px 10px rgba(54, 75, 96, 0.05)',
  },
}));

export default useFeatureListStyles;
