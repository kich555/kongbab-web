import { createStyles } from '@mantine/core';

const useProblemCardStyles = createStyles((theme) => ({
  wrapper: {
    maxWidth: '344px',
    width: '100%',
    overflow: 'hidden',
    borderRadius: '20px',
    boxShadow: '0px 4px 10px #2D2D2D0D',
    backgroundColor: theme.white,
  },
  inner: {
    padding: '24px 32px',
  },
  footer: {
    padding: '35px 0',
    backgroundColor: theme.colors.blue[5],
  },
  font20: {
    fontSize: '20px',
  },
  font30: {
    fontSize: '30px',
  },
  lineHeight150: {
    lineHeight: '150%',
  },
}));

export default useProblemCardStyles;
