import { createStyles } from '@mantine/core';

const useMobileProcedureStyles = createStyles((theme) => ({
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    position: 'relative',
    width: '100%',
    height: '1030px',
    overflowY: 'hidden',
    textAlign: 'center',
  },
  openedWrapper: {
    height: '100%',
  },

  shadowButton: {
    position: 'absolute',
    bottom: 0,
    transition: 'ease-in-out 1s',
    '&::before': {
      content: '" "',
      position: 'absolute',
      top: '-56px',
      border: 'none',
      width: '100%',
      height: '55px',
      background:
        'linear-gradient(180deg, #FFFFFF 0%, rgba(255, 255, 255, 0) 100%)',
      transform: 'rotate(-180deg)',
    },
  },

  button: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '55px',
    width: '100%',
    border: '1px solid',
    borderRadius: '3px',
    borderColor: theme.black,
    backgroundColor: theme.white,
    fontSize: '18px',
    fontWeight: 700,
  },
  maxWidth: {
    width: '100%',
  },
}));

export default useMobileProcedureStyles;
