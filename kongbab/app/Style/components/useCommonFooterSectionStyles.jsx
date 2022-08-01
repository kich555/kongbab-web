import { createStyles } from '@mantine/core';

const useCommonFooterSectionStyles = createStyles((theme) => ({
  wrapper: {
    backgroundColor: theme.black,
  },
  inner: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.colors.dark[1],
  },
  subTitle: {
    fontSize: '20px',
  },
  title: {
    fontSize: '18px',
  },
  desc: {
    fontSize: '40px',
    lineHeight: '150%',
  },
}));

export default useCommonFooterSectionStyles;
