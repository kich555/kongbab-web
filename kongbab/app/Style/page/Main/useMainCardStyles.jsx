import { createStyles } from '@mantine/core';

export const useMainCardStyles = createStyles((theme) => ({
  wrapper: {
    flexGrow: '1',
    height: '500px',
    overflow: 'hidden',
    borderRadius: '20px',
    backgroundColor: theme.colors.gray[0],
  },
  font20: {
    fontSize: '20px',
  },
  lineHeight150: {
    lineHeight: '150%',
  },
  image: {
    width: '320px',
    height: 'auto',
  },
}));

export const useMainLargeCardStyles = createStyles((theme) => ({
  wrapper: {
    display: 'flex',
    justifyContent: 'space-between',
    borderRadius: '20px',
    backgroundColor: theme.colors.gray[0],
    padding: '48px 45px 57px 70px',
  },
  inner: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  contentWrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  font20: {
    fontSize: '20px',
  },
  lineHeight150: {
    lineHeight: '150%',
  },
  image: {
    width: '453px',
    height: 'auto',
  },
}));
