import { Container, Space } from '@mantine/core';
import ProcessConsultationSection from '~/components/page/Process/ProcessConsultationSection';
import LitigationProcedureTitle from '~/components/page/Process/Procedure/LitigationProcedureTitle';
import LitigationProcedure from '~/components/page/Process/Procedure/LitigationProcedure';
import KakaoSection from '~/components/page/Process/KakaoSection';
import LitigationInfo from '~/components/page/Process/LitigationInfo';
import useResponsive from '~/hooks/useResponsive';
import MobileProcedureList from '~/components/page/Process/Procedure/Mobile/MobileProcedureList';

export default function ProcessRoute() {
  const { mobile } = useResponsive();
  return (
    <section>
      <Container px={26}>
        <LitigationInfo />
        <LitigationProcedureTitle />
        <Space h={40} />
      </Container>
      {mobile ? <MobileProcedureList /> : <LitigationProcedure />}
      <KakaoSection />
      <ProcessConsultationSection />
    </section>
  );
}
