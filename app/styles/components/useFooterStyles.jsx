import { createStyles } from '@mantine/core';

const useFooterStyles = createStyles((theme) => ({
  wrapper: {
    display: 'flex',
    alignItems: 'end',
    minHeight: '240px',
    height: '100%',
    width: '100%',
    borderTop: '1px solid #0d0d0d',
    backgroundColor: theme.black,
  },

  inner: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: '52px',
    lineHeight: '150%',
    color: theme.colors.gray[3],
    [theme.fn.smallerThan('sm')]: {
      flexDirection: 'column',
    },
  },

  links: {
    [theme.fn.smallerThan('sm')]: {
      alignItems: 'start',
      justifyContent: 'start',
    },
  },

  alignSelfStart: {
    alignSelf: 'start',
  },
}));

export default useFooterStyles;
