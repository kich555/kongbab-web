import { Container, Center, Space } from '@mantine/core';
import AccordionSection from '~/components/common/AccordionSection';
import Title from '~/components/common/Title';
import useFeaturedFAQStyles from '~/Style/page/Pricing/useFeaturedFAQStyles';
import DefaultButton from '~/components/common/DefaultButton';
import useResponsive from '~/hooks/useResponsive';

export default function FeaturedFAQSection({ questions }) {
  const { classes } = useFeaturedFAQStyles();
  const { horizontal, button } = classes;
  const { tablet } = useResponsive();
  return (
    <section className={horizontal}>
      <Space h={tablet ? 60 : 80} />
      <Container size='sm' px={0}>
        <Title title='자주 묻는 질문' />
        <AccordionSection questions={questions} />
        <Space h={tablet ? 40 : 50} />
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
      <Space h={tablet ? 100 : 200} />
    </section>
  );
}
