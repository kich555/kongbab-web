import parse from 'html-react-parser';
import { Accordion, Group, Space, Text } from '@mantine/core';
import StickerList from '~/components/page/Process/Procedure/Sticker/StickerList';
import ArrowRight from '~/asset/icon/ArrowRight';
import useMobileProcedureStyles from '~/styles/page/Process/Mobile/useMobileProcedureStyles';
import MultiLineText from '~/components/common/CustomMantine/MultiLineText';

export default function MobileProcedure({ procedure, index }) {
  const { classes, theme } = useMobileProcedureStyles();
  const { icon, label, labelTitle, control, content, chevron, item } = classes;
  const { white, colors } = theme;

  function AccordionLabel() {
    return (
      <>
        <div className={labelTitle}>
          <Text
            component='span'
            size='xs'
            color={white}
            weight={700}
            className={icon}
          >
            {index}
          </Text>
          <Space w={8} />
          <Text component='span' size={20} weight={700}>
            {procedure.title}
          </Text>
        </div>
        <Space h={12} />
        <MultiLineText size='sm' color={colors.gray[3]}>
          {parse(procedure.desc)}
        </MultiLineText>
      </>
    );
  }

  const items = (
    <Accordion.Item key={procedure.title} value={procedure.title}>
      <Accordion.Control>
        <AccordionLabel />
      </Accordion.Control>
      <Accordion.Panel>
        <Group align='center' spacing={15}>
          <StickerList procedureList={procedure.procedureList} />
        </Group>
      </Accordion.Panel>
    </Accordion.Item>
  );

  return (
    <Accordion
      chevron={<ArrowRight size={14} />}
      multiple
      chevronPosition='right'
      styles={{
        label,
        item,
        control,
        content,
        chevron,
      }}
    >
      {items}
    </Accordion>
  );
}
