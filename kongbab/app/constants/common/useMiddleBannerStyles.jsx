import { createStyles } from '@mantine/core';

const useMiddleBannerStyles = createStyles((theme) => ({
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.colors.dark[1],
  },
  font18: {
    fontSize: '18px',
  },
  font40: {
    fontSize: '40px',
    lineHeight: '150%',
  },
}));

export default useMiddleBannerStyles;
