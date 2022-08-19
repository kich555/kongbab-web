import { createStyles } from '@mantine/core';

const useCouponStickerStyles = createStyles((theme) => ({
  wrapper: {
    display: 'none',
    // display: 'flex',
    flexDirection: 'column',
    position: 'fixed',
    right: 0,
    bottom: '78px',
    padding: '15px',
    paddingTop: '12px',
    border: '1px solid #EEEEEE',
    borderRadius: '12px 0 0 12px',
    backgroundColor: 'white',
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.05)',
    zIndex: 1,
  },

  clicked: {
    transform: 'translateX(100%)',
    transition: 'all ease 0.2s',
  },
  inner: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  closeButton: {
    alignSelf: 'end',
    cursor: 'pointer',
  },

  buttonWrapper: {
    display: 'flex',
    position: 'fixed',
    right: 0,
    bottom: 0,
    padding: '25px 36px',
    borderRadius: '12px 0 0 0',
    backgroundColor: theme.colors[theme.primaryColor],
    cursor: 'pointer',
    zIndex: 1,
  },
}));

export default useCouponStickerStyles;
