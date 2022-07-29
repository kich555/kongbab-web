import { createStyles } from '@mantine/core';

const useFeaturedFAQStyles = createStyles((theme) => ({
  button: {
    border: '1px solid #EDF0F4',
    color: theme.black,
    '&:hover': {
      backgroundColor: theme.colors.gray[0],
    },
  },
  horizontal: {
    padding: '0 26px',
  },
}));

export default useFeaturedFAQStyles;
