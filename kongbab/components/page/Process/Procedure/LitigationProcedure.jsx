import { Container, Center, Space, Divider, MediaQuery } from '@mantine/core';
import BranchArrow from '~/asset/icon/procedure/BranchArrow';
import useProcedureStyles from '~/Style/page/Process/useProcedureStyles';
import Consultation from './Consultation';
import PROCESS_CONSTANTS from '~/constants/page/processPageData';
import MobileProcedureList from './Mobile/MobileProcedureList';
import useResponsive from '~/hooks/useResponsive';
import ProcedureList from './Desktop/ProcedureList';

export default function LitigationProcedure(params) {
  const { classes, theme } = useProcedureStyles();
  const { colors } = theme;
  const { wrapper } = classes;
  const { PROCEDURE } = PROCESS_CONSTANTS;
  const { CONSULTATION } = PROCEDURE;
  const mobile = useResponsive();
  return (
    <Container size='sm' px={0} className={wrapper}>
      <MediaQuery smallerThan='sm' styles={{ display: 'none' }}>
        <div>
          <Space h={40} />
          <Divider size='xs' color={colors.gray[1]} />
          <Space h={80} />
          <Container size='xs' px={0}>
            <Consultation procedureForm={CONSULTATION} />
          </Container>
          <Center>
            <BranchArrow />
          </Center>
          <Space h={50} />
        </div>
      </MediaQuery>
      <Container size='sm' px={0}>
        {mobile ? <MobileProcedureList /> : <ProcedureList />}
      </Container>
    </Container>
  );
}
