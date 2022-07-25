import { Space, Text, useMantineTheme } from '@mantine/core';
import asset from '~/asset/image/Process_footer_image.png';
import ConsultationCard from '../../ConsultationCard';

export default function ProcessConsultationSection() {
  const theme = useMantineTheme();
  const { white } = theme;
  return (
    <ConsultationCard asset={asset}>
      <Text color={white} size='xl' weight={700}>
        ⚡⚡⚡
      </Text>
      <Space h='lg' />
      <Text
        style={{ textAlign: 'center', fontSize: '30px', lineHeight: '150%' }}
        color={white}
        weight={700}
      >
        명도소송은 스피드가 생명
        <br />
        빠른 대처로 피해를 최소화시키세요.
      </Text>
    </ConsultationCard>
  );
}
