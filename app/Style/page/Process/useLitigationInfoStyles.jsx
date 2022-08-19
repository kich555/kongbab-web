import { createStyles } from '@mantine/core';

const useLitigationInfoStyles = createStyles((theme) => ({
  box: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    height: '175px',
    margin: 0,
    padding: '20px 0 ',
    borderRadius: '24px',
    backgroundColor: theme.colors.gray[0],
    [theme.fn.smallerThan('sm')]: {
      flexDirection: 'row-reverse',
      justifyContent: 'center',
      alignItems: 'center',
      height: '120px',
      maxWidth: '324px',
    },
  },

  lineHeight150: { lineHeight: '150%' },
  maxWidth: { width: '100%' },
}));

export default useLitigationInfoStyles;
