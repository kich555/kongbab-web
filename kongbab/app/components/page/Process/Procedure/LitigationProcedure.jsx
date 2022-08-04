import { Container, Center, Space, Divider, MediaQuery } from '@mantine/core';
import useResponsive from '~/hooks/useResponsive';
import BranchArrow from '~/asset/icon/procedure/BranchArrow';
import useProcedureStyles from '~/Style/page/Process/useProcedureStyles';
import PROCESS_CONSTANTS from '~/constants/page/processPageData';
import Consultation from '~/components/page/Process/Procedure/Consultation';
import MobileProcedureList from '~/components/page/Process/Procedure/Mobile/MobileProcedureList';
import ProcedureList from '~/components/page/Process/Procedure/Desktop/ProcedureList';

export default function LitigationProcedure(params) {
  const { classes, theme } = useProcedureStyles();
  const { colors } = theme;
  const { wrapper } = classes;
  const { PROCEDURE } = PROCESS_CONSTANTS;
  const { CONSULTATION } = PROCEDURE;
  const { mobile } = useResponsive();
  return (
    <Container size='md' px={0} className={wrapper}>
      <MediaQuery smallerThan='sm' styles={{ display: 'none' }}>
        <div>
          <Space h={40} />
          <Divider size='xs' color={colors.gray[1]} />
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
      <Container size='md' px={0}>
        {mobile ? <MobileProcedureList /> : <ProcedureList />}
      </Container>
    </Container>
  );
}
