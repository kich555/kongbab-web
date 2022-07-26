import { createStyles } from '@mantine/core';

const useProcedureStyles = createStyles((theme) => ({
  warpper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  basic: { border: '1px solid #CBD1D8' },
  gradient: {},
  miniIcon: {
    position: 'absolute',
    right: '26px',
    top: '36.5%',
  },
  basicFont: {
    width: '100%',
    fontSize: '18px',
  },
}));

export default useProcedureStyles;
