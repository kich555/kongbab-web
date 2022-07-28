import { createStyles } from '@mantine/core';

const useMobileProcedureStyles = createStyles((theme) => ({
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    position: 'relative',
    width: '100%',
    height: '1030px',
    overflow: 'hidden',
    textAlign: 'center',
  },
  button: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 0,
    height: '55px',
    width: '100%',
    border: '1px solid',
    borderRadius: '3px',
    borderColor: theme.black,
    backgroundColor: theme.white,
    fontSize: '18px',
    fontWeight: 700,
    boxShadow: '0 10px -10px #666',
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

  phone: {
    width: '287px',
    [theme.fn.smallerThan('sm')]: {
      width: '165px',
    },
    height: '100%',
    borderRadius: '24px 24px 0 0 ',
    backgroundColor: theme.colors.blue[1],
  },
  font20: {
    fontSize: '20px',
    [theme.fn.smallerThan('sm')]: {
      fontSize: theme.fontSizes.md,
    },
  },
  lineHeight150: { lineHeight: '150%' },
  titleFont: {
    fontSize: theme.fontSizes.xl,
    [theme.fn.smallerThan('sm')]: {
      fontSize: '28px',
    },
  },
  underLine: {
    textDecorationColor: '#fbea53',
    textDecorationThickness: '5px',
  },
}));

export default useMobileProcedureStyles;
