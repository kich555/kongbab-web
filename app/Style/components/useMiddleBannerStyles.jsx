import { createStyles } from '@mantine/core';

const useMiddleBannerStyles = createStyles((theme) => ({
  section: {
    backgroundColor: theme.black,
  },
  lineHeight150: {
    lineHeight: '150%',
  },
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
}));

export default useMiddleBannerStyles;
