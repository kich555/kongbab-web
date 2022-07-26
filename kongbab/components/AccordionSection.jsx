import { Accordion, MediaQuery, Text } from '@mantine/core';
import ArrowRight from '~/asset/icon/ArrowRight';
import useAccordianStyles from '~/Style/component/useAccordianStyles';

export default function AccordionSection({ questions, style }) {
  const { classes, theme } = useAccordianStyles();
  const { colors, primaryColor } = theme;
  const { control, content, contentInner, item, itemOpened } = classes;

  const items = questions.map((question) => (
    <Accordion.Item
      key={question.label}
      label={
        <MediaQuery smallerThan='sm' styles={{ fontSize: theme.fontSizes.md }}>
          <Text size='lg' weight={500}>
            {question.label}
          </Text>
        </MediaQuery>
      }
    >
      <MediaQuery smallerThan='sm' styles={{ fontSize: theme.fontSizes.md }}>
        <Text
          color={colors['blue'][0]}
          style={{ fontSize: '20px', lineHeight: '150%' }}
        >
          {question.desc}
        </Text>
      </MediaQuery>
    </Accordion.Item>
  ));
  return (
    <>
      <MediaQuery
        smallerThan='sm'
        styles={{ margin: '60px 0 15px 0', fontSize: theme.fontSizes.md }}
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
        icon={<ArrowRight size={14} />}
        iconPosition='right'
        multiple
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
