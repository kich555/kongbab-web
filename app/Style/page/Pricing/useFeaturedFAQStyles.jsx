import { createStyles } from '@mantine/core';

const useFeaturedFAQStyles = createStyles((theme) => ({
  button: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '140px',
    height: '44px',
    borderRadius: '8px',
    border: '1px solid #EEEEEE',
    color: theme.black,
    fontWeight: 500,
    lineHeight: '19px',
    '&:hover': {
      backgroundColor: theme.colors.gray[0],
    },
  },
  horizontal: {
    padding: '0 26px',
  },
}));

export default useFeaturedFAQStyles;
