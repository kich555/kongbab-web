import parse from 'html-react-parser';
import IntroduceSection from '~/components/page/Introduce/IntroduceSection';
import IntroduceBanner from '~/components/page/Introduce/IntroduceBanner';
import INTRODUCE_CONSTANTS from '~/constants/page/introducePageData';
import MiddleBanner from '~/components/common/MiddleBanner';
import ProblemSection from '~/components/page/Introduce/Problem/ProblemSection';
import LawerProfile from '~/components/page/Introduce/LawerProfile';
import CommonFooterSection from '~/components/common/CommonFooterSection';

export default function IntroduceRoute() {
  const { INTRODUCE_SECTION, MIDDLE_BANNER, PROBLEMS, LAWER_PROFILE } =
    INTRODUCE_CONSTANTS;
  console.log('parse(LAWER_PROFILE.desc)', parse(LAWER_PROFILE.desc));
  return (
    <>
      <IntroduceBanner />
      {INTRODUCE_SECTION.map((section) => (
        <IntroduceSection
          key={section.title}
          subTitle={section.subTitle}
          title={parse(section.title)}
          desc={parse(section.desc)}
          backgroundColor={section.backgroundColor}
        />
      ))}
      <ProblemSection problems={PROBLEMS} />
      <MiddleBanner
        title={MIDDLE_BANNER.title}
        desc={parse(MIDDLE_BANNER.desc)}
      />
      <LawerProfile
        name={LAWER_PROFILE.name}
        desc={parse(LAWER_PROFILE.desc)}
      />
      <CommonFooterSection />
    </>
  );
}
