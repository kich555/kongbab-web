import { createStyles } from '@mantine/core';

const useMiddleBannerStyles = createStyles((theme) => ({
  section: {
    backgroundColor: theme.black,
  },
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
}));

export default useMiddleBannerStyles;
