import { Container, Space, MediaQuery } from '@mantine/core';
import Title from '~/components/common/Title';
import AccordionSection from '~/components/common/AccordionSection';
import FAQ_CONSTANTS from '~/constants/page/faqPageData';
import useResponsive from '~/hooks/useResponsive';

export default function FAQAccordionSection() {
  const { SUIT_FAQ, SERVICE_FAQ, PRICE_FAQ } = FAQ_CONSTANTS;
  const { mobile } = useResponsive();
  return (
    <>
      <Title title='자주 묻는 질문' />
      <Container size={764} px={26}>
        <AccordionSection title='소송' questions={SUIT_FAQ} />
      </Container>
      <MediaQuery smallerThan='sm' styles={{ display: 'none' }}>
        <Space h={50} />
      </MediaQuery>
      <Container size={764} px={26}>
        <AccordionSection title='서비스' questions={SERVICE_FAQ} />
      </Container>
      <MediaQuery smallerThan='sm' styles={{ display: 'none' }}>
        <Space h={50} />
      </MediaQuery>
      <Container size={764} px={26}>
        <AccordionSection title='요금' questions={PRICE_FAQ} />
      </Container>
      {mobile && <Space h={100} />}
    </>
  );
}
