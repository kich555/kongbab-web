import { MediaQuery, useMantineTheme } from '@mantine/core';
import asset from '~/asset/image/FAQ_image.png';
import ConsultationCard from '~/components/common/ConsultationCard';
import MultiLineText from '~/components/common/CustomMantine/MultiLineText';

export default function FAQConsultationSection() {
  const theme = useMantineTheme();
  const { white } = theme;
  return (
    <MediaQuery smallerThan='sm' styles={{ display: 'none' }}>
      <section>
        <ConsultationCard asset={asset}>
          <MultiLineText size={30} align='center' color={white} weight={700}>
            아직 망설여지나요?
            <br />
            상담은 언제나 환영합니다.
          </MultiLineText>
        </ConsultationCard>
      </section>
    </MediaQuery>
  );
}
