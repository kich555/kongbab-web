import { createStyles } from '@mantine/core';

const useThirdSectionStyles = createStyles((theme) => ({
  wrapper: {
    backgroundColor: theme.colors.gray[0],
  },
  inner: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.colors.dark[1],
  },
  title: {
    fontSize: '18px',
  },
  desc: {
    fontSize: '40px',
    lineHeight: '150%',
  },
}));

export default useThirdSectionStyles;
