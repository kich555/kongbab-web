import { createStyles } from '@mantine/core';

const useFeaturedFAQStyles = createStyles((theme) => ({
  warpper: {
    padding: '214px 0 200px 0 ',
  },
  root: {
    marginTop: '25px',
  },
  content: {
    padding: '0 0 38px 0',
    borderBottom: '1px solid #EDF0F4',
  },
  contentInner: { padding: '0px' },
  item: { borderBottom: '1px solid #EDF0F4' },
  itemOpened: { borderBottom: 'none' },
  control: {
    padding: '38px 0 38px 0',
    '&:hover': {
      backgroundColor: 'transparent',
    },
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
