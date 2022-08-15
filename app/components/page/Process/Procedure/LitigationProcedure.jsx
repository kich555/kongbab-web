import { Container, Center, Space, MediaQuery, Group } from '@mantine/core';
import useResponsive from '~/hooks/useResponsive';
import BranchArrow from '~/asset/icon/procedure/BranchArrow';
import useProcedureStyles from '~/Style/page/Process/useProcedureStyles';
import PROCESS_CONSTANTS from '~/constants/page/processPageData';
import Consultation from '~/components/page/Process/Procedure/Consultation';
import MobileProcedureList from '~/components/page/Process/Procedure/Mobile/MobileProcedureList';
import ProcedureList from '~/components/page/Process/Procedure/Desktop/ProcedureList';

export default function LitigationProcedure() {
  const { classes } = useProcedureStyles();
  const { wrapper, container } = classes;
  const { PROCEDURE } = PROCESS_CONSTANTS;
  const { CONSULTATION } = PROCEDURE;
  const { mobile } = useResponsive();
  return (
    <section className={wrapper}>
      <Container size='md' px={0} className={container}>
        <MediaQuery smallerThan='sm' styles={{ display: 'none' }}>
          <div>
            <Space h={80} />
            <Container size='md' px={0}>
              <Center>
                <Consultation procedureForm={CONSULTATION} />
              </Center>
            </Container>
            <Center>
              <BranchArrow />
            </Center>
            <Space h={50} />
          </div>
        </MediaQuery>
        <Container size='md' px={mobile ? 26 : 0} style={{ width: '100%' }}>
          {mobile ? <MobileProcedureList /> : <ProcedureList />}
        </Container>
      </Container>
      <Space h={100} />
    </section>
  );
}
