import { createStyles } from '@mantine/core';

const useFooterStyles = createStyles((theme) => ({
  footer: {
    height: '240px',
    width: '100%',
    display: 'flex',
    alignItems: 'end',
  },

  container: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
    maxWidth: '1200px',
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
  description: {
    marginTop: '20px',
  },

  companyHistory: {
    marginTop: '20px',
  },
  iconWrapper: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '10px',
  },
  menuItems: {
    display: 'flex',
    marginTop: '20px',
  },
  menuItem: {
    fontWeight: 500,
    //   fontSize: '13px',
    //   lineHeight: '150%',
    // color: theme.colors.blue[0],
  },
}));

export default useFooterStyles;
