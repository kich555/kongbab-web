import { createStyles } from '@mantine/core';

const useStickerStyles = createStyles((theme) => ({
  warpper: {
    position: 'relative',
    width: '100%',
    height: '70px',
    maxWidth: '428px',
    borderRadius: '36px',
    padding: '0 26px',
  },
  basic: { border: '1px solid #DADADA' },
  gradient: {},
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
