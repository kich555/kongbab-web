import { Container } from '@mantine/core';
import ProcessConsultationSection from '~/components/page/Process/ProcessConsultationSection';
import LitigationProcedureTitle from '~/components/page/Process/Procedure/LitigationProcedureTitle';
import LitigationProcedure from '~/components/page/Process/Procedure/LitigationProcedure';
import KakaoSection from '~/components/page/Process/KakaoSection';
import LitigationInfo from '~/components/page/Process/LitigationInfo';

export default function process() {
  return (
    <section>
      <Container style={{ padding: '0 26px' }}>
        <LitigationInfo />
        <KakaoSection />
        <LitigationProcedureTitle />
        <LitigationProcedure />
        <ProcessConsultationSection />
      </Container>
    </section>
  );
}
