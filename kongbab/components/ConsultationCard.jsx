import useConsultationCardStyles from '~/Style/component/useConsultationCardStyles';
import { Center, Container } from '@mantine/core';
import DefaultButton from 'components/DefaultButton';

export default function ConsultationCard({ asset, children }) {
  const { classes } = useConsultationCardStyles();
  const { warpper, center, button } = classes;

  return (
    <Container
      className={warpper}
      style={{
        backgroundImage: `url(${asset})`,
        background: `url(${asset}) no-repeat center/cover`,
      }}
    >
      <Center className={center}>
        {children}
        <DefaultButton
          className={button}
          sx={(theme) => ({
            backgroundColor: theme.white,
          })}
          label='카톡 상담신청'
        />
      </Center>
    </Container>
  );
}
