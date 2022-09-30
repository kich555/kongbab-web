import parse from 'html-react-parser';
import { Accordion, Box, Text } from '@mantine/core';
import ArrowRight from '~/asset/icon/ArrowRight';
import useAccordianStyles from '~/styles/components/useAccordianStyles';
import useResponsive from '~/hooks/useResponsive';

export default function AccordionSection({ title, questions }) {
  const { classes, theme } = useAccordianStyles();
  const { colors, primaryColor } = theme;
  const { label, control, content, chevron, item } = classes;

  const items = questions.map((question) => (
    <Accordion.Item key={question.label} value={question.label}>
      <Accordion.Control>{question.label}</Accordion.Control>
      <Accordion.Panel>{parse(question.desc)}</Accordion.Panel>
    </Accordion.Item>
  ));
  const { mobile } = useResponsive;
  return (
    <Box mt={mobile ? 60 : 100}>
      <Box mb={mobile ? 15 : 25}>
        <Text
          size={mobile ? theme.fontSizes.md : '20'}
          weight={700}
          color={colors[primaryColor]}
        >
          {title}
        </Text>
      </Box>
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
    </Box>
  );
}
