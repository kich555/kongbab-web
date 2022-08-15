import { createStyles } from '@mantine/core';

const useMobileProcedureStyles = createStyles((theme) => ({
  icon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '20px',
    height: '20px',
    borderRadius: '50%',
    backgroundColor: theme.colors[theme.primaryColor],
  },

  labelTitle: {
    display: 'flex',
    fontSize: '20px',
  },
  labelDesc: {
    lineHeight: '150%',
  },

  chevron: {
    alignSelf: 'start',
    '&[data-rotate]': {
      transform: 'rotate(90deg)',
    },
  },
  item: {
    width: '100%',
    borderBottom: '1px solid #EEEEEE',
    '&:nth-of-type(1)': {
      borderTop: '1px solid #EEEEEE',
    },
  },

  control: {
    padding: '20px 0',
    '&:hover': {
      backgroundColor: 'transparent',
    },
  },
}));

export default useMobileProcedureStyles;
