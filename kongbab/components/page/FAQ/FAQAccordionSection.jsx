import { Container, Space, MediaQuery } from '@mantine/core';
import Title from 'components/Title';
import AccordionSection from 'components/AccordionSection';
import FAQ_CONSTANTS from '~/constants/page/faqPageData';

export default function FAQAccordionSection(params) {
  const { SERVICE_FAQ, PRICE_FAQ } = FAQ_CONSTANTS;

  return (
    <>
      <Title title='자주 묻는 질문' />
      <Container size='sm' style={{ padding: '0 26px' }}>
        <AccordionSection questions={SERVICE_FAQ} />
      </Container>
      <MediaQuery smallerThan='sm' styles={{ display: 'none' }}>
        <Space h={50} />
      </MediaQuery>
      <Container size='sm' style={{ padding: '0 26px' }}>
        <AccordionSection questions={PRICE_FAQ} />
      </Container>
    </>
  );
}
