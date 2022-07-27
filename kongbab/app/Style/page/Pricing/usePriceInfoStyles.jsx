import { createStyles } from '@mantine/core';
import common from '~/constants/commonStyle';

const { ...marginTop20 } = common;

const usePriceInfoStyles = createStyles((theme) => ({
  box: {
    display: 'flex',
    flexDirection: 'column',
    width: '246px',
    padding: '30px 14px 25px 14px',
    textAlign: 'center',
    '&:nth-of-type(-n+2)': {
      borderRight: '1px solid #EDF0F4',
    },
  },
  list: {
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
    gap: '15px',
    textAlign: 'left',
  },
  listItem: {
    height: '16px',
  },
  ...marginTop20,
}));

export default usePriceInfoStyles;
