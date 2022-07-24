import { Container, Center } from '@mantine/core';
import AccordionSection from 'components/AccordionSection';
import Title from 'components/Title';
import useFeaturedFAQStyles from '~/Style/page/Pricing/useFeaturedFAQStyles';
import DefaultButton from 'components/DefaultButton';

export default function FeaturedFAQSection({ questions }) {
  const { classes } = useFeaturedFAQStyles();
  const { warpper, button } = classes;

  return (
    <Container size='sm' className={warpper}>
      <Title title='자주 묻는 질문' />
      <AccordionSection questions={questions} />
      <Center>
        <DefaultButton
          className={button}
          label='문의 전체보기'
          sx={(theme) => ({
            backgroundColor: 'none',
          })}
        />
      </Center>
    </Container>
  );
}
