import { createStyles } from '@mantine/core';

const useFeatureListStyles = createStyles((theme) => ({
  item: {
    overflow: 'hidden',
    maxWidth: '252px',
    width: '100%',
    margin: 0,
    padding: '35px 35px 50px 35px',
    borderRadius: '20px',
    boxShadow: '0px 4px 10px #2D2D2D0D',
    backgroundColor: theme.white,
  },
  lineHeight150: {
    lineHeight: '150%',
  },
}));

export default useFeatureListStyles;
