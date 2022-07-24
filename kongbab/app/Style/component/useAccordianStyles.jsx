import { createStyles } from '@mantine/core';

const useAccordianStyles = createStyles((theme) => ({
  root: {
    marginTop: '25px',
  },
  item: { borderBottom: '1px solid #EDF0F4', borderTop: '1px solid #EDF0F4' },
  itemOpened: { borderBottom: 'none' },
  control: {
    padding: '38px 0 38px 0',
    '&:hover': {
      backgroundColor: 'transparent',
    },
  },
  content: {
    padding: '0 0 38px 0',
    borderBottom: '1px solid #EDF0F4',
  },
  contentInner: { padding: '0px' },
}));

export default useAccordianStyles;
