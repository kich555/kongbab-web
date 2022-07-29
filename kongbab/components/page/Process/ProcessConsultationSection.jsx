import { Space, Text, useMantineTheme } from '@mantine/core';
import asset from '~/asset/image/Process_footer_image.png';
import useResponsive from '~/hooks/useResponsive';
import ConsultationCard from 'components/ConsultationCard';

export default function ProcessConsultationSection() {
  const theme = useMantineTheme();
  const { white } = theme;
  const { mobile } = useResponsive();
  return (
    <ConsultationCard asset={asset}>
      <Text color={white} size={mobile ? 'lg' : 'xl'} weight={700}>
        ⚡⚡⚡
      </Text>
      <Space h='lg' />
      <Text
        align='center'
        color={white}
        weight={700}
        style={
          mobile
            ? { fontSize: '20px', lineHeight: '150%' }
            : { fontSize: '30px', lineHeight: '150%' }
        }
      >
        명도소송은 스피드가 생명
        <br />
        빠른 대처로 피해를 최소화시키세요.
      </Text>
    </ConsultationCard>
  );
}
