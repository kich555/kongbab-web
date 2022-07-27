import { createStyles } from '@mantine/core';

const useLitigationInfoStyles = createStyles((theme) => ({
  box: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    maxWidth: '252px',
    width: '100%',
    height: '170px',
    borderRadius: '24px',
    padding: '0 36px',
    margin: 0,
  },
  backgroundGreen: {
    backgroundColor: '#EEFBEF',
  },
  backgroundRed: {
    backgroundColor: '#FFF8F8',
  },
  backgroundBlue: {
    backgroundColor: '#EDF2FB',
  },
  content: {
    lineHeight: '150%',
    fontSize: '20px',
    margin: '0 42px',
  },
  lineHeight150: { lineHeight: '150%' },
  font40: { fontSize: '40px' },
}));

export default useLitigationInfoStyles;
