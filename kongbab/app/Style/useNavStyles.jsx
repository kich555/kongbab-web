import { createStyles } from '@mantine/core';

const useNavStyles = createStyles((theme) => ({
  header: {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
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
    padding: '8px 12px',
    borderRadius: theme.radius.sm,
    textDecoration: 'none',
    fontSize: theme.fontSizes.sm,
    fontWeight: 500,
    color: 'black',
    '&:hover': {
      backgroundColor:
        theme.colorScheme === 'dark'
          ? theme.colors.dark[6]
          : theme.colors.gray[0],
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
