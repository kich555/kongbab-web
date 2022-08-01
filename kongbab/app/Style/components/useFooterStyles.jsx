import { createStyles } from '@mantine/core';

const useFooterStyles = createStyles((theme) => ({
  footer: {
    minHeight: '240px',
    height: '100%',
    width: '100%',
    display: 'flex',
    alignItems: 'end',

    backgroundColor: theme.colors.gray[0],
  },
  lineHeight150: { lineHeight: '150%' },
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: '52px',
    fontSize: '13px',
    lineHeight: '150%',
    color: theme.colors.gray[3],
    [theme.fn.smallerThan('sm')]: {
      flexDirection: 'column',
    },
  },

  links: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'end',
    justifyContent: 'end',
    [theme.fn.smallerThan('sm')]: {
      alignItems: 'start',
      justifyContent: 'start',
    },
  },
  iconWrapper: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '10px',
  },
  menuItems: {
    display: 'flex',
    // marginTop: '20px',
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
}));

export default useFooterStyles;
