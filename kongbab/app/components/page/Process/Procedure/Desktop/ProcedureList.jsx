import { Container } from '@mantine/core';
import Arrow from '~/asset/icon/procedure/Arrow';
import PROCESS_CONSTANTS from '~/constants/page/processPageData';
import Procedure from '~/components/page/Process/Procedure/Procedure';

export default function ProcedureList(params) {
  const { PROCEDURE } = PROCESS_CONSTANTS;
  const { PROHIBITE_TRANSFER_OWNERSHIP, DETINUE } = PROCEDURE;
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
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      <Container
        size='xs'
        px={0}
        style={{ margin: 0, width: '100%', textAlign: 'center' }}
      >
        <Procedure procedureForm={PROHIBITION_ESTATE_TRANSFER} />
        <Arrow />
        <Procedure procedureForm={MORTAGE_ORDER} />
        <Arrow />
        <Procedure procedureForm={SENTENCE_INJUNCTION} />
        <Arrow />
        <Procedure procedureForm={EXCUTE_INJUNCTION} />
      </Container>
      <Container
        size='xs'
        px={0}
        style={{ margin: 0, width: '100%', textAlign: 'center' }}
      >
        <Procedure procedureForm={LODGING_COMPLAINT} />
        <Arrow />
        <Procedure procedureForm={SERVE_TO_DEFENDANT} />
        <Arrow />
        <Procedure procedureForm={CHECK_DEFENDANT_ANSWER} />
        <Arrow />
        <Procedure procedureForm={NOTICE_ARGUMENT_DATE} />
        <Arrow />
        <Procedure procedureForm={SENTENCE_JUDGEMENT} />
        <Arrow />
        <Procedure procedureForm={EXECUTE_JUDGEMENT} />
      </Container>
    </div>
  );
}
