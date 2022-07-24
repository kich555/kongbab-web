import { Container, Center } from '@mantine/core';
import AccordionSection from 'components/AccordionSection';
import Title from 'components/Title';
import useFeaturedFAQStyles from '~/Style/page/Pricing/useFeaturedFAQStyles';
import DefaultButton from '../../DefaultButton';

export default function FeaturedFAQSection({ questions }) {
  const { classes } = useFeaturedFAQStyles();
  const { warpper, button } = classes;

  return (
    <Container size='sm' className={warpper}>
      <Title title='자주 묻는 질문' />
      <AccordionSection questions={questions} />
      <Center>
        <DefaultButton
          backgroundColor={{ backgroundColor: 'none' }}
          className={button}
          label='문의 전체보기'
        />
      </Center>
    </Container>
  );
}
