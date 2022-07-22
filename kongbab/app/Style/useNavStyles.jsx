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
  linkBox: {
    height: '35px',
    padding: '8px 10px',
    borderRadius: '6px',
    '&:hover': {
      backgroundColor: '#F2F4F7',
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
    width: '128px',
    height: '44px',
    // padding: '12px 20px 12px 20px',
    marginLeft: '50px',
    fontSize: '16px',
    fontWeight: '500',
    lineHeight: '19px',
  },
}));

export default useNavStyles;
