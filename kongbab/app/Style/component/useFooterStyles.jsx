import { createStyles } from '@mantine/core';

const useFooterStyles = createStyles((theme) => ({
  marginTop20: {
    marginTop: '20px',
  },

  footer: {
    height: '240px',
    width: '100%',
    display: 'flex',
    alignItems: 'end',

    backgroundColor: theme.colors.gray[0],
  },

  container: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: '52px',
    fontSize: '13px',
    lineHeight: '150%',
    color: theme.colors.blue[0],
  },
  InfoWarpper: {
    fontWeight: 500,
    textAlign: 'left',
  },
  title: {
    fontWeight: 700,
  },

  links: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'end',
    justifyContent: 'end',
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
