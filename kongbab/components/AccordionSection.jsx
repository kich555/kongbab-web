import { Accordion, Text } from '@mantine/core';
import ArrowRight from '~/asset/icon/ArrowRight';
import useAccordianStyles from '../app/Style/component/useAccordianStyles';

export default function AccordionSection({ questions, style }) {
  const { classes, theme } = useAccordianStyles();
  const { colors, primaryColor } = theme;
  const { root, control, content, contentInner, item, itemOpened } = classes;
  const items = questions.map((question) => (
    <Accordion.Item
      key={question.label}
      label={
        <Text size='lg' weight={500}>
          {question.label}
        </Text>
      }
    >
      <Text
        color={colors['blue'][0]}
        style={{ lineHeight: '150%', fontSize: '20px' }}
      >
        {question.desc}
      </Text>
    </Accordion.Item>
  ));
  return (
    <>
      <Text
        weight={700}
        color={colors[primaryColor]}
        style={{ marginTop: '100px', fontSize: '20px' }}
      >
        요금
      </Text>
      <Accordion
        icon={<ArrowRight size={14} />}
        iconPosition='right'
        multiple
        className={root}
        classNames={{
          item,
          itemOpened,
          control,
          content,
          contentInner,
        }}
      >
        {items}
      </Accordion>
    </>
  );
}
