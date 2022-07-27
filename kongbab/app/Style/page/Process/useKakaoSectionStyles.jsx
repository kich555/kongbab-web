import { createStyles } from '@mantine/core';

const useKakaoSectionStyles = createStyles((theme) => ({
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    height: '560px',
    borderRadius: '24px',
    backgroundColor: theme.colors.gray[0],
  },
  phone: {
    width: '287px',
    height: '100%',
    borderRadius: '24px 24px 0 0 ',
    backgroundColor: theme.colors.blue[1],
  },
  font20: { fontSize: '20px' },
  lineHeight150: { lineHeight: '150%' },
  underLine: {
    textDecorationColor: '#fbea53',
    textDecorationThickness: '5px',
  },
}));

export default useKakaoSectionStyles;
