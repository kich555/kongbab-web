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

  lineHeight150: { lineHeight: '150%' },
  font18: { fontSize: '18px' },
  pointer: { cursor: 'pointer' },
}));

export default useProcedureStyles;
