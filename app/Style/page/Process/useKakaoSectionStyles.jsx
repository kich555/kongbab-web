import { createStyles } from '@mantine/core';

const useKakaoSectionStyles = createStyles((theme) => ({
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    height: '560px',
    [theme.fn.smallerThan('sm')]: {
      height: '340px',
    },
    borderRadius: '24px',
    backgroundColor: theme.colors.gray[0],
  },

  font20: {
    fontSize: '20px',
    [theme.fn.smallerThan('sm')]: {
      fontSize: theme.fontSizes.md,
    },
  },
  lineHeight150: { lineHeight: '150%' },
  titleFont: {
    fontSize: theme.fontSizes.xl,
    [theme.fn.smallerThan('sm')]: {
      fontSize: '28px',
      lineHeight: '150%',
    },
  },
  underLine: {
    textDecorationColor: '#fbea53',
    textDecorationThickness: '5px',
  },
}));

export default useKakaoSectionStyles;
