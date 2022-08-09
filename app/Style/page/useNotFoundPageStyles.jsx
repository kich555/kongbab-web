import { createStyles } from '@mantine/core';

const useNotFoundPageStyles = createStyles((theme) => ({
  wrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
  },
  inner: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    fontSize: '20px',
    lineHeight: '150%',
  },
  link: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '128px',
    height: '44px',
    padding: '12px,0',
    borderRadius: '36px',
    backgroundColor: theme.black,
  },
}));

export default useNotFoundPageStyles;
