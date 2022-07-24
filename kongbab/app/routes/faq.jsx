import { Container } from '@mantine/core';
import Title from 'components/Title';
import AccordionSection from 'components/AccordionSection';
import FAQ_CONSTANTS from '../constants/page/faqPageData';

export default function faq(params) {
  const { SERVICE_FAQ, PRICE_FAQ } = FAQ_CONSTANTS;
  return (
    <>
      <section>
        <Container size='sm'>
          <Title title='자주 묻는 질문' style={{ marginTop: '120px' }} />
          <AccordionSection questions={SERVICE_FAQ} />
        </Container>
      </section>
      <section>
        <Container size='sm' style={{ marginTop: '150px' }}>
          <AccordionSection questions={PRICE_FAQ} />
        </Container>
      </section>
      <section>tes</section>
    </>
  );
}
