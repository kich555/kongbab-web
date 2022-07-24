import { Center, Container, Text } from '@mantine/core';
import DefaultButton from 'components/DefaultButton';
import asset from '~/asset/image/FAQ_image.png';
import useConsultationSectionStyles from '~/Style/page/FAQ/useConsultationSectionStyles';

export default function ConsultationSection(params) {
  const { classes, theme } = useConsultationSectionStyles();
  const { white } = theme;
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
        <div style={{ textAlign: 'center' }}>
          <Text
            color={white}
            style={{ fontSize: '30px', lineHeight: '150%' }}
            weight={700}
          >
            아직 망설여지나요?
          </Text>
          <Text
            color={white}
            style={{ fontSize: '30px', lineHeight: '150%' }}
            weight={700}
          >
            상담은 언제나 환영합니다.
          </Text>
        </div>
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
