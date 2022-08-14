import { createStyles } from '@mantine/core';

const useFooterStyles = createStyles((theme) => ({
  footer: {
    display: 'flex',
    alignItems: 'end',
    minHeight: '240px',
    height: '100%',
    width: '100%',
    borderTop: '1px solid #0d0d0d',
    backgroundColor: theme.black,
  },
  container: {
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
    // display: 'flex',
    // flexDirection: 'column',
    // alignItems: 'end',
    // justifyContent: 'end',
    [theme.fn.smallerThan('sm')]: {
      alignItems: 'start',
      justifyContent: 'start',
    },
  },
  alignSelfStart: {
    alignSelf: 'start',
  },
  flexRow: {
    display: 'flex',
  },
  menuItem: {
    fontWeight: 500,
    '&:nth-of-type(2)': {
      '&::before': {
        content: "'|'",
        paddingRight: '6px',
        paddingLeft: '6px',
      },
    },
  },
  lineHeight150: { lineHeight: '150%' },
  wrapReverse: {
    flexWrap: 'wrapReverse',
  },
  gray: {
    color: '#cccccc',
  },

  link: {
    color: '#CCCCCC',
    fontWeight: 500,
  },

  linkButton: {
    padding: 0,
    height: '40px',
    border: 'none',
  },
}));

export default useFooterStyles;
