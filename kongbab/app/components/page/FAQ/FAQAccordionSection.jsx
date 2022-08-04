import { Container, Space, MediaQuery } from '@mantine/core';
import Title from '~/components/common/Title';
import AccordionSection from '~/components/common/AccordionSection';
import FAQ_CONSTANTS from '~/constants/page/faqPageData';

export default function FAQAccordionSection(params) {
  const { SERVICE_FAQ, PRICE_FAQ } = FAQ_CONSTANTS;

  return (
    <>
      <Title title='자주 묻는 질문' />
      <Container size={764} px={26}>
        <AccordionSection questions={SERVICE_FAQ} />
      </Container>
      <MediaQuery smallerThan='sm' styles={{ display: 'none' }}>
        <Space h={50} />
      </MediaQuery>
      <Container size={764} px={26}>
        <AccordionSection questions={PRICE_FAQ} />
      </Container>
    </>
  );
}
