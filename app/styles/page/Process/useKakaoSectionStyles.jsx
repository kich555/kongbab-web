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

  lineHeight150: { lineHeight: '150%' },

  underLine: {
    position: 'relative',
    '&:after': {
      content: '""',
      display: 'block',
      position: 'absolute',
      bottom: '-4px',
      left: '0px',
      width: '100%',
      height: '8px',
      backgroundColor: '#fbea53',
    },
  },
}));

export default useKakaoSectionStyles;
