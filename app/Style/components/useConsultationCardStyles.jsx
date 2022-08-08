import { createStyles } from '@mantine/core';

const useConsultationCardStyles = createStyles((theme) => ({
  warpper: {
    padding: '60px 22px 46px 22px ',
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
