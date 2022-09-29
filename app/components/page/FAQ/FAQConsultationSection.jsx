import { Container } from '@mantine/core';
import asset from 'public/image/FAQ/FAQ_Image.webp';
import ConsultationCard from '~/components/common/ConsultationCard';
import MultiLineText from '~/components/common/CustomMantine/MultiLineText';
import useResponsive from '~/hooks/useResponsive';

export default function FAQConsultationSection() {
  const { mobile } = useResponsive();
  return (
    <section>
      <Container px={mobile ? 26 : 0}>
        <ConsultationCard asset={asset}>
          <MultiLineText size={30} align='center' color='white' weight={700}>
            아직 망설여지나요?
            <br />
            상담은 언제나 환영합니다.
          </MultiLineText>
        </ConsultationCard>
      </Container>
    </section>
  );
}
