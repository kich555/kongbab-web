import { Accordion, MediaQuery, Text } from '@mantine/core';
import ArrowRight from '~/asset/icon/ArrowRight';
import useAccordianStyles from '~/Style/components/useAccordianStyles';

export default function AccordionSection({ questions }) {
  const { classes, theme } = useAccordianStyles();
  const { colors, primaryColor } = theme;
  const { label, control, content, chevron, item } = classes;

  const items = questions.map((question) => (
    <Accordion.Item key={question.label} value={question.label}>
      <Accordion.Control>{question.label}</Accordion.Control>
      <Accordion.Panel>{question.desc}</Accordion.Panel>
    </Accordion.Item>
  ));

  return (
    <>
      <MediaQuery
        smallerThan='sm'
        styles={{
          margin: '60px 0 15px 0 !important',
          fontSize: theme.fontSizes.md,
        }}
      >
        <Text
          weight={700}
          color={colors[primaryColor]}
          style={{ margin: '100px 0 25px 0', fontSize: '20px' }}
        >
          요금
        </Text>
      </MediaQuery>

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
    </>
  );
}
