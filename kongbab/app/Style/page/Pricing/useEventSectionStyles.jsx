import { createStyles } from '@mantine/core';

const useEventSectionStyles = createStyles((theme) => ({
  warpper: {
    marginTop: '145px',
    padding: '58px 50px 29px 50px',
    borderRadius: '20px',
    backgroundColor: theme.colors.green[3],
    overflow: 'hidden',
  },
  title: {
    marginTop: '19px',
    fontSize: '30px',
  },
  buttonWrapper: {
    display: 'flex',
    marginTop: '38px',
  },
  button: {
    width: '140px',
    height: '42px',
  },
}));

export default useEventSectionStyles;
