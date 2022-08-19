import { createStyles } from '@mantine/core';

const useProcedureStyles = createStyles((theme) => ({
  descBox: {
    height: '63px',
  },

  titleWrapper: {
    position: 'relative',
    [theme.fn.smallerThan('sm')]: {
      flexDirection: 'column',
    },
  },
  group: {
    [theme.fn.largerThan('sm')]: {
      position: 'absolute',
      right: 0,
    },
  },

  // Procedure
  wrapper: {
    backgroundColor: theme.colors.gray[0],
    [theme.fn.smallerThan('sm')]: {
      backgroundColor: theme.white,
    },
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },

  centerColumn: {
    flexDirection: 'column',
    maxWidth: '428px',
    textAlign: 'center',
  },
  badgeWrapper: {
    position: 'relative',
  },

  badge: {
    display: 'inline',
    position: 'absolute',
    top: '-4px',
    marginLeft: '12px',
    padding: '7px',
    borderRadius: '6px',
    fontSize: theme.fontSizes.xs,
    fontWeight: 600,
    color: theme.colors.magenta[0],
    backgroundColor: theme.colors.magenta[1],
    [theme.fn.smallerThan('sm')]: {
      position: 'relative',
      display: 'block',
      marginLeft: 0,
      marginTop: '16px',
    },
  },
  maxWidth: { width: '100%' },
  lineHeight150: { lineHeight: '150%' },
  pointer: { cursor: 'pointer' },
}));

export default useProcedureStyles;
