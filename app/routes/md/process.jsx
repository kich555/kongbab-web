import { Container, Space } from '@mantine/core';
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
        <LitigationProcedureTitle />
        <Space h={40} />
      </Container>
      <section style={{ backgroundColor: '#F7F7F7' }}>
        <LitigationProcedure />
        <Space h={100} />
      </section>
      <KakaoSection />
      <ProcessConsultationSection />
    </section>
  );
}
