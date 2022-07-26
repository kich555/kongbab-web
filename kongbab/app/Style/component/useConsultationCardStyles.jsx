import { createStyles } from '@mantine/core';

const useConsultationCardStyles = createStyles((theme) => ({
  warpper: {
    marginTop: '200px',
    marginBottom: '200px',
    padding: '60px 0 46px 0 ',
    borderRadius: '20px',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    overflow: 'hidden',
  },
  center: {
    display: 'flex',
    flexDirection: 'column',
  },
  button: {
    marginTop: '30px',
    color: theme.black,
  },
}));

export default useConsultationCardStyles;