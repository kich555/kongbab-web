import { createStyles } from '@mantine/core';

const useLitigationProcedureTitleStyles = createStyles((theme) => ({
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
}));

export default useLitigationProcedureTitleStyles;
