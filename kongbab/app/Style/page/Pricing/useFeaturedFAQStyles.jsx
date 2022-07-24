import { createStyles } from '@mantine/core';

const useFeaturedFAQStyles = createStyles((theme) => ({
  warpper: {
    padding: '214px 0 200px 0 ',
  },
  button: {
    width: '140px',
    height: '44px',
    marginTop: '50px',
    backgroundColor: 'none',
    border: '1px solid #EDF0F4',
    color: theme.black,
    textAlign: 'center',
    '&:hover': {
      backgroundColor: theme.colors.gray[0],
    },
  },
}));

export default useFeaturedFAQStyles;
