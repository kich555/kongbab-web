import IntroduceSection from '~/components/page/Introduce/IntroduceSection';
import IntroduceBanner from '~/components/page/Introduce/IntroduceBanner';
import INTRODUCE_CONSTANTS from '~/constants/page/introducePageData';

export default function introduce() {
  const { INTRODUCE_SECTION } = INTRODUCE_CONSTANTS;

  return (
    <>
      <IntroduceBanner />
      {INTRODUCE_SECTION.map((section) => (
        <IntroduceSection
          key={section.title}
          subTitle={section.subTitle}
          title={section.title}
          desc1={section.desc1}
          desc2={section.desc2}
          backgroundColor={section.backgroundColor}
        />
      ))}
    </>
  );
}
