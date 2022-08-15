import { Space, Text } from '@mantine/core';
import PROCESS_CONSTANTS from '~/constants/page/processPageData';
import MobileProcedure from '~/components/page/Process/Procedure/Mobile/MobileProcedure';
export default function MobileProcedureList() {
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

  const MOBILE_PROHIBITION_ESTATE_TRANSFER = {
    title: PROHIBITION_ESTATE_TRANSFER.title,
    list: [
      CONSULTATION,
      PROHIBITION_ESTATE_TRANSFER,
      MORTAGE_ORDER,
      SENTENCE_INJUNCTION,
      EXCUTE_INJUNCTION,
    ],
  };

  const MOBILE_DETINUE = {
    title: LODGING_COMPLAINT.title,
    list: [
      CONSULTATION,
      LODGING_COMPLAINT,
      SERVE_TO_DEFENDANT,
      CHECK_DEFENDANT_ANSWER,
      NOTICE_ARGUMENT_DATE,
      SENTENCE_JUDGEMENT,
      EXECUTE_JUDGEMENT,
    ],
  };

  function MobileProcedureListSection({ title, list }) {
    const items = list.map((item) => (
      <MobileProcedure key={item.title} procedure={item} />
    ));
    return (
      <>
        <Text size='lg' align='center' weight={700}>
          {title}
        </Text>
        <Space h={40} />
        {items}
      </>
    );
  }

  return (
    <>
      <MobileProcedureListSection {...MOBILE_PROHIBITION_ESTATE_TRANSFER} />
      <Space h={100} />
      <MobileProcedureListSection {...MOBILE_DETINUE} />
    </>
  );
}
