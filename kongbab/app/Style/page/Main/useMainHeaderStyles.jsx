import { createStyles } from '@mantine/core';

const useMainHeaderStyles = createStyles((theme) => ({
  wrapper: {
    height: '540px',
    overflow: 'hidden',
  },
  inner: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  button: {},
  font18: {
    fontSize: '18px',
  },
  font40: {
    fontSize: '40px',
  },
  lineHeight150: {
    lineHeight: '150%',
  },
  backgorund: {
    backgroundColor: theme.colors.gray[0],
  },
  shadow: {
    boxShadow: '0px 10px 10px #2D2D2D0D',
  },
  flewRow: {
    display: 'flex',
  },
}));

export default useMainHeaderStyles;
