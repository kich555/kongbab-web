import { Container, UnstyledButton, Space, Divider } from '@mantine/core';
import { useState } from 'react';
import Arrow from '~/asset/icon/procedure/Arrow';
import Procedure from '../Procedure';
import PROCESS_CONSTANTS from '~/constants/page/processPageData';
import useMobileProcedureStyles from '~/Style/page/Process/Mobile/useMobileProcedureStyles';
import Consultation from '../Consultation';
import { useScrollIntoView } from '@mantine/hooks';

export default function MobileProcedureList() {
  const [activeInjunction, setActiveInjunction] = useState(false);
  const [activeDetinue, setActiveDetinue] = useState(false);
  const { scrollIntoView, targetRef } = useScrollIntoView({ offset: 150 });
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
  console.log('activeDetinue', activeDetinue);
  const { classes, theme, cx } = useMobileProcedureStyles();
  const { colors } = theme;
  const { wrapper, openedWrapper, shadowButton, button, maxWidth } = classes;
  return (
    <>
      <Space h={80} ref={targetRef} />
      <Container
        size='xs'
        px={20}
        className={cx(wrapper, { [openedWrapper]: activeInjunction })}
      >
        <Consultation procedureForm={CONSULTATION} />
        <Procedure procedureForm={PROHIBITION_ESTATE_TRANSFER} />
        <Arrow />
        <Procedure procedureForm={MORTAGE_ORDER} />
        <Arrow />
        <Procedure procedureForm={SENTENCE_INJUNCTION} />
        <Arrow />
        <Procedure procedureForm={EXCUTE_INJUNCTION} />
        {!activeInjunction && (
          <UnstyledButton
            onClick={() => setActiveInjunction(true)}
            className={cx(button, shadowButton)}
          >
            더 알아보기
          </UnstyledButton>
        )}
        <Space h={50} />
        <Divider size='xs' color={colors.gray[1]} className={maxWidth} />
        <Space h={50} />
      </Container>
      {!activeInjunction && <Space h={100} />}
      <Container
        size='xs'
        px={0}
        className={cx(wrapper, { [openedWrapper]: activeDetinue })}
      >
        <Consultation procedureForm={CONSULTATION} />
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
        <Space h={40} />
        <UnstyledButton onClick={scrollIntoView} className={button}>
          위로 이동하기
        </UnstyledButton>
        {!activeDetinue && (
          <UnstyledButton
            onClick={() => setActiveDetinue(true)}
            className={cx(button, shadowButton)}
          >
            더 알아보기
          </UnstyledButton>
        )}
      </Container>
    </>
  );
}
