import { createStyles } from '@mantine/core';

const useAccordianStyles = createStyles((theme) => ({
  label: {
    fontWeight: 500,
    lineHeight: '150%',
    fontSize: '20px',
    [theme.fn.smallerThan('sm')]: {
      fontSize: '16px',
    },
  },
  chevron: {
    '&[data-rotate]': {
      transform: 'rotate(90deg)',
    },
  },
  item: {
    borderBottom: '1px solid #EEEEEE',
    '&:nth-of-type(1)': {
      borderTop: '1px solid #EEEEEE',
    },
  },

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
    color: theme.colors.gray[3],
    lineHeight: '150%',
    fontSize: '20px',
    [theme.fn.smallerThan('sm')]: {
      fontSize: '16px',
    },
  },
}));

export default useAccordianStyles;
