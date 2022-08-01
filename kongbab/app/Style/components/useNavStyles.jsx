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
    borderBottom: 'none',
    backgroundColor: `transparent`,
    transition: 'all 0.25s ease-in-out 0s',
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: '#fff',
    },
  },
  headerActive: {
    height: '80px',
    [theme.fn.smallerThan('md')]: {
      height: '60px',
    },
    backgroundColor: '#fff',
    boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.1)',
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
  linkBox: {
    height: '35px',
    padding: '8px 10px',
    borderRadius: '6px',
    '&:hover': {
      backgroundColor: theme.colors.gray[0],
    },
    [theme.fn.smallerThan('md')]: {
      height: 'auto',
      padding: '13px 0 13px 36px',
    },
  },
  link: {
    display: 'block',
    borderRadius: theme.radius.sm,
    lineHeight: 1,
    textDecoration: 'none',
    fontSize: theme.fontSizes.md,
    fontWeight: 500,
    color: 'black',
    [theme.fn.smallerThan('md')]: {
      fontSize: '20px',
      lineHeight: '24px',
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
      fontSize: theme.fontSizes.sm,
    },
    [theme.fn.smallerThan('xs')]: {
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
