import { createStyles } from '@mantine/core';

const useIntroduceBannerStyles = createStyles((theme) => ({
  wrapper: {
    position: 'relative',
    maxHeight: '320px',
    height: '100%',
    overflow: 'hidden',
    margin: '0px auto',
  },
  mobileWrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '180px',
    backgroundColor: theme.black,
  },
  imageBox: {
    width: '100%',
  },
  inner: {
    position: 'absolute',
    top: 0,
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
}));

export default useIntroduceBannerStyles;
