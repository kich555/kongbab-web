import { createStyles } from '@mantine/core';

const useNavStyles = createStyles((theme) => ({
  header: {
    display: 'flex',
    alignItems: 'center',
    position: 'fixed',
    left: '0',
    top: '0',
    width: '100%',
    height: '100px',
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
    backgroundColor: '#fff',
    // backgroundColor: theme.colors.cyan,
    boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.1)',
  },
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    maxWidth: theme.breakpoints.lg,
  },
  menuWrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },

  links: {
    [theme.fn.smallerThan('sm')]: {
      display: 'none',
    },
  },
  link: {
    display: 'block',
    lineHeight: 1,
    padding: '8px 10px',
    borderRadius: theme.radius.sm,
    textDecoration: 'none',
    fontSize: theme.fontSizes.sm,
    fontWeight: 500,
    color: 'black',
    '&:hover': {
      backgroundColor: '#F2F4F7',
    },

    [theme.fn.smallerThan('sm')]: {
      borderRadius: 0,
      padding: theme.spacing.md,
    },
  },
  linkActive: {
    '&, &:hover': {
      fontWeight: '700',
    },
  },

  button: {
    marginLeft: '50px',
  },
}));

export default useNavStyles;
