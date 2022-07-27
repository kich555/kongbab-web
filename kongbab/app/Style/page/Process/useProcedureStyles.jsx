import { createStyles } from '@mantine/core';

const useProcedureStyles = createStyles((theme) => ({
  warpper: {
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
  },
  lineHeight150: { lineHeight: '150%' },
  font18: { fontSize: '18px' },
  font11: { fontSize: '11px' },
  pointer: { cursor: 'pointer' },
}));

export default useProcedureStyles;
