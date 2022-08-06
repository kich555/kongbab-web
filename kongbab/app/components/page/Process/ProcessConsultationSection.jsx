import { Space, Text, useMantineTheme } from '@mantine/core';
import asset from '~/asset/image/Process_Footer_Banner.png';
import mobileAsset from '~/asset/image/Mobile_Process_Footer_Banner.png';
import useResponsive from '~/hooks/useResponsive';
import ConsultationCard from '~/components/common/ConsultationCard';

export default function ProcessConsultationSection() {
  const theme = useMantineTheme();
  const { white } = theme;
  const { mobile } = useResponsive();
  return (
    <ConsultationCard asset={mobile ? mobileAsset : asset}>
      <Space h={25} />
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
        명도소송은 신속해야 합니다
        <br />
        빠른 대처로 피해를 최소화시키세요
      </Text>
    </ConsultationCard>
  );
}
