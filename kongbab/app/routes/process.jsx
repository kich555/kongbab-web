import { Container, Divider, Space } from '@mantine/core';
import ProcessConsultationSection from 'components/page/Process/ProcessConsultationSection';
import LitigationProcedureTitle from 'components/page/Process/Procedure/LitigationProcedureTitle';
import LitigationProcedure from 'components/page/Process/Procedure/LitigationProcedure';
import KakaoSection from 'components/page/Process/Kakaosection';
import LitigationInfo from 'components/page/Process/LitigationInfo';
import Title from 'components/Title';

export default function process() {
  return (
    <section>
      <Container style={{ padding: '0 26px' }}>
        <LitigationInfo />
        <Space h={180} />
        <KakaoSection />
        <Space h={200} />
        <LitigationProcedureTitle />
        
        <LitigationProcedure />
        <ProcessConsultationSection />
      </Container>
    </section>
  );
}
