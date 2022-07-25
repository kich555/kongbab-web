import useConsultationSectionStyles from '~/Style/component/useConsultationSectionStyles';
import { Center, Container, Text } from '@mantine/core';
import DefaultButton from 'components/DefaultButton';
export default function ConsultationCard({ asset, children }) {
  const { classes, theme } = useConsultationSectionStyles();
  const { white } = theme;
  const { warpper, center, content, button } = classes;
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
