import { createStyles } from '@mantine/core';

const useEventSectionStyles = createStyles((theme) => ({
  warpper: {
    padding: '58px 50px 29px 50px',
    borderRadius: '20px',
    backgroundColor: theme.colors.green[3],
    overflow: 'hidden',
  },
  font30: {
    fontSize: '30px',
  },
  buttonWrapper: {
    display: 'flex',
  },
}));

export default useEventSectionStyles;
