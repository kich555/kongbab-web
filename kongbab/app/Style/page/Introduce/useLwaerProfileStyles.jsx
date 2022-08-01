import { createStyles } from '@mantine/core';

const useLwaerProfileStyles = createStyles((theme) => ({
  imageWrapper: {
    width: '200px',
    height: '200px',
    borderRadius: '50%',
    overflow: 'hidden',
  },
  content: {
    fontSize: '18px',
    lineHeight: '150%',
  },
  center: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
}));

export default useLwaerProfileStyles;
