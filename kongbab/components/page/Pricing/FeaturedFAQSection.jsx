import { Container, Text, Center, Button } from '@mantine/core';
import AccordionSection from 'components/AccordionSection';
import Title from 'components/Title';
import useFeaturedFAQStyles from '~/Style/page/Pricing/useFeaturedFAQStyles';

export default function FeaturedFAQSection({ questions }) {
  const { classes } = useFeaturedFAQStyles();
  const { warpper, button } = classes;

  return (
    <Container size='sm' className={warpper}>
      <Title title='자주 묻는 질문' />
      <AccordionSection questions={questions} />
      <Center>
        <Button
          className={button}
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
