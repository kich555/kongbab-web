import { createStyles } from '@mantine/core';

const useLitigationInfoStyles = createStyles((theme) => ({
  box: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    maxWidth: '252px',
    width: '100%',
    height: '175px',
    borderRadius: '24px',
    padding: '0 36px',
    margin: 0,
    backgroundColor: theme.colors.gray[0],
    [theme.fn.smallerThan('sm')]: {
      flexDirection: 'row-reverse',
      maxWidth: '324px',
    },
  },
  content: {
    lineHeight: '150%',
    fontSize: '20px',
    [theme.fn.smallerThan('sm')]: {
      fontSize: theme.fontSizes.md,
      margin: '0',
    },
    margin: '0 42px',
  },
  lineHeight150: { lineHeight: '150%' },
  font40: { fontSize: '40px' },
  maxWidth: { width: '100%' },
}));

export default useLitigationInfoStyles;
