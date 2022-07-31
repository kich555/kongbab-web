import FAQConsultationSection from '~/components/page/FAQ/FAQConsultationSection';
import FAQAccordionSection from '~/components/page/FAQ/FAQAccordionSection';

export default function faq() {
  return (
    <>
      <section>
        <FAQAccordionSection />
      </section>
      <section>
        <FAQConsultationSection />
      </section>
    </>
  );
}
