import { createStyles } from '@mantine/core';

const useAccordianStyles = createStyles((theme) => ({
  label: {
    fontSize: '20px',
    fontWeight: 500,
    lineHeight: '100%',
  },
  chevron: {
    '&[data-rotate]': {
      transform: 'rotate(90deg)',
    },
  },
  item: { borderBottom: '1px solid #EEEEEE', borderTop: '1px solid #EEEEEE' },

  control: {
    padding: '30px 0',
    [theme.fn.smallerThan('sm')]: {
      padding: '25px 0',
    },
    '&:hover': {
      backgroundColor: 'transparent',
    },
  },
  content: {
    padding: '0 0 30px 0',
    fontSize: '20px',
    color: theme.colors.gray[3],
    lineHeight: '150%',
  },
}));

export default useAccordianStyles;
