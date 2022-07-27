import { Container, Center, Space, Divider } from '@mantine/core';
import Arrow from '~/asset/icon/procedure/Arrow';
import BranchArrow from '~/asset/icon/procedure/BranchArrow';
import useProcedureStyles from '~/Style/page/Process/useProcedureStyles';
import ComplaintSubmission from './Procedure/UnauthorizedPossession/ComplaintSubmission';
import Consultation from './Procedure/Consultation';
import ProhibitionEstateTransfer from './Procedure/ProhibiteTransferOwnership/ProhibitionEstateTransfer';
import Procedure from './Procedure/Procedure';
import PROCESS_CONSTANTS from '~/constants/page/processPageData';

export default function LitigationProcedure(params) {
  const { classes } = useProcedureStyles();
  const { wrapper } = classes;
  const { PROCEDURE } = PROCESS_CONSTANTS;
  const { CONSULTATION, PROHIBITE_TRANSFER_OWNERSHIP, DETINUE } = PROCEDURE;
  const {
    PROHIBITION_ESTATE_TRANSFER,
    MORTAGE_ORDER,
    SENTENCE_INJUNCTION,
    EXCUTE_INJUNCTION,
  } = PROHIBITE_TRANSFER_OWNERSHIP;
  const {
    LODGING_COMPLAINT,
    SERVE_TO_DEFENDANT,
    CHECK_DEFENDANT_ANSWER,
    NOTICE_ARGUMENT_DATE,
    SENTENCE_JUDGEMENT,
    EXECUTE_JUDGEMENT,
  } = DETINUE;
  return (
    <Container size='sm' px={0} className={wrapper}>
      <Consultation procedureForm={CONSULTATION} />

      <Center>
        <BranchArrow />
      </Center>
      <Space h={50} />
      <Container size='sm' px={0}>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <Container
            size='xs'
            px={0}
            style={{ margin: 0, width: '100%', textAlign: 'center' }}
          >
            <Procedure procedureForm={PROHIBITION_ESTATE_TRANSFER} />
            <Space h={30} />
            <Arrow />
            <Space h={45} />
            <Procedure procedureForm={MORTAGE_ORDER} />
            <Space h={30} />
            <Arrow />
            <Space h={45} />
          </Container>
          <Container
            size='xs'
            px={0}
            style={{ margin: 0, width: '100%', textAlign: 'center' }}
          >
            {/* <ComplaintSubmission /> */}
          </Container>
        </div>
      </Container>
      <Container>
        <Space h={40} />
        <Divider size='xs' color='#EDF0F4' />
      </Container>
    </Container>
  );
}
