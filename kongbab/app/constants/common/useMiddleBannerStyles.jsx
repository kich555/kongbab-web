import { createStyles } from '@mantine/core';

const useMiddleBannerStyles = createStyles((theme) => ({
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: theme.colors.dark[1],
    background: 'linear-gradient(to left, white 50%, black 50%) right',
    backgroundSize: '200% 100%',
    transition: 'all 10s ease',
    // '&:hover': {
    //   backgroundPosition: 'left',
    // },
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
