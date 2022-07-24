import { createStyles } from '@mantine/core';

const useFeaturedFAQStyles = createStyles((theme) => ({
  warpper: {
    padding: '214px 0 200px 0 ',
  },
  button: {
    marginTop: '50px',
    border: '1px solid #EDF0F4',
    color: theme.black,
    '&:hover': {
      backgroundColor: theme.colors.gray[0],
    },
  },
}));

export default useFeaturedFAQStyles;
