import { createStyles } from '@mantine/core';

const useStickerStyles = createStyles((theme) => ({
  warpper: {
    position: 'relative',
    width: '100%',
    height: '70px',
    maxWidth: '428px',
    borderRadius: '36px',
    padding: '0 22px',
    backgroundColor: theme.white,
  },
  basic: { border: '1px solid #DADADA' },
  outline: {
    border: '1px solid #FF4500',
  },
  miniIcon: {
    position: 'absolute',
    right: '26px',
    top: '36.5%',
  },
  basicFont: {
    width: '100%',
    fontSize: '18px',
  },
}));

export default useStickerStyles;
