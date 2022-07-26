import { Container, Divider, Space } from '@mantine/core';
import ProcessConsultationSection from 'components/page/Process/ProcessConsultationSection';
import LitigationProcedureTitle from 'components/page/Process/LitigationProcedureTitle';
import LitigationProcedure from 'components/page/Process/LitigationProcedure';

export default function process() {
  return (
    <section>
      <LitigationProcedureTitle />
      <Container>
        <Space h={40} />
        <Divider size='xs' color='#EDF0F4' />
      </Container>
      <Space h={80} />
      <LitigationProcedure />
      <ProcessConsultationSection />
    </section>
  );
}
