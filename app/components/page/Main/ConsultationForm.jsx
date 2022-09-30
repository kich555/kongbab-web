import { Container, Space, Text } from '@mantine/core';
import useResponsive from '~/hooks/useResponsive';
import Title from '~/components/common/Title';
import useConsultationFormStyles from '~/styles/page/Main/useConsultationFormStyles';
import FormBox from './FormBox';
export default function ConsultationForm({ actionData, isPosting, isLoading }) {
  const { tablet } = useResponsive();
  const { classes, theme } = useConsultationFormStyles();
  const { lineHeight150 } = classes;

  return (
    <section>
      <Container size='xs' px={52}>
        <Space h={tablet ? 40 : 30} />
        <Title title='상담 신청' />
        <Space h={36} />
        <Text
          size={18}
          color={theme.colors.gray[3]}
          align='center'
          className={lineHeight150}
        >
          아래 내용을 남겨주시면 빠르게 연락드리겠습니다.
        </Text>
        <Space h={80} />
        <FormBox
          actionData={actionData}
          isPosting={isPosting}
          isLoading={isLoading}
        />
        <Space h={150} />
      </Container>
    </section>
  );
}
