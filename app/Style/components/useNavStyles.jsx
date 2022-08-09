import { createStyles } from '@mantine/core';

const useNavStyles = createStyles((theme, opened) => ({
  header: {
    display: 'flex',
    alignItems: 'center',
    position: 'fixed',
    left: '0',
    top: '0',
    width: '100%',
    height: '100px',
    [theme.fn.smallerThan('md')]: {
      height: '80px',
    },
    borderBottom: opened ? 'none' : '1px solid #EEEEEE',
    backgroundColor: '#fff',
    transition: 'all 0.25s ease-in-out 0s',
    cursor: 'pointer',
  },

  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: opened ? 'flex-end' : 'space-between',
    width: '100%',
  },
  menuWrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },

  links: {
    [theme.fn.smallerThan('md')]: {
      display: 'none',
    },
  },

  link: {
    display: 'block',
    padding: '8px 10px',
    borderRadius: '6px',
    lineHeight: 1,
    textDecoration: 'none',
    fontWeight: 500,
    color: 'black',

    [theme.fn.smallerThan('md')]: {
      padding: '13px 0 13px 36px',
      fontSize: '20px',
      lineHeight: '24px',
    },
    '&:hover': {
      backgroundColor: theme.colors.gray[0],
    },
  },
  linkActive: {
    '&, &:hover': {
      fontWeight: '700',
    },
  },

  buttonWrapper: {
    width: '128px',
    height: '44px',
    marginLeft: '50px',
    fontSize: theme.fontSizes.md,
    fontWeight: '500',
    lineHeight: '19px',
    [theme.fn.smallerThan('md')]: {
      width: '95px',
      height: '32px',
      marginLeft: '0px',
      padding: '8px 11px',
      fontSize: '13px',
      lineHeight: '16px',
    },
    [theme.fn.smallerThan(330)]: {
      display: 'none',
    },
  },
  burger: {
    [theme.fn.largerThan('md')]: {
      display: 'none',
    },
  },

  dropdown: {
    position: 'absolute',
    top: 80,
    left: 0,
    right: 0,
    width: '100vw',
    height: '100vh',
    border: 'none',
    paddingBottom: '24px',
    zIndex: 0,
    [theme.fn.largerThan('md')]: {
      display: 'none',
    },
  },
  outer: {
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
}));

export default useNavStyles;
