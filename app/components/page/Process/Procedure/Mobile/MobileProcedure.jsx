import parse from 'html-react-parser';
import { Accordion, Group, Space, Text } from '@mantine/core';
import StickerList from '~/components/page/Process/Procedure/Sticker/StickerList';
import ArrowRight from '~/asset/icon/ArrowRight';
import useMobileProcedureStyles from '~/Style/page/Process/Mobile/useMobileProcedureStyles';

export default function MobileProcedure({ procedure, index }) {
  const { classes, theme } = useMobileProcedureStyles();
  const {
    icon,
    label,
    labelTitle,
    labelDesc,
    control,
    content,
    chevron,
    item,
  } = classes;
  const { white, colors } = theme;

  function AccordionLabel() {
    return (
      <>
        <div className={labelTitle}>
          <Text
            size='xs'
            component='span'
            color={white}
            weight={700}
            className={icon}
          >
            {index}
          </Text>
          <Space w={8} />
          <Text component='span' weight={700}>
            {procedure.title}
          </Text>
        </div>
        <Space h={12} />
        <Text size='sm' color={colors.gray[3]} className={labelDesc}>
          {parse(procedure.desc)}
        </Text>
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
