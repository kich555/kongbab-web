import { Accordion, Container, Text, Center, Button } from '@mantine/core';
import Title from 'components/Title';
import ArrowRight from '~/asset/icon/ArrowRight';
import useFeaturedFAQStyles from '~/Style/page/Pricing/useFeaturedFAQStyles';

export default function FeaturedFAQSection({ questions }) {
  const { classes, theme } = useFeaturedFAQStyles();
  const { primaryColor, colors } = theme;
  const {
    warpper,
    root,
    control,
    content,
    contentInner,
    item,
    itemOpened,
    button,
  } = classes;
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
      {/* <Divider my='sm' color={colors['gray'][1]} /> */}
    </Accordion.Item>
  ));
  return (
    <Container size='sm' className={warpper}>
      <Title title='자주 묻는 질문' />
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
      <Center>
        <Button
          // sx={(theme) => ({
          //   backgroundColor: theme.colors.dark[1],
          // })}
          className={button}
          // variant='filled'
          radius={8}
          onClick={() => console.log('test')}
        >
          <Text style={{ lineHeight: '19px' }} weight={500}>
            문의 전체보기
          </Text>
        </Button>
      </Center>
    </Container>
  );
}
