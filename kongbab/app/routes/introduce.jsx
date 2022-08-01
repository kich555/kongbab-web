import parse from 'html-react-parser';
import IntroduceSection from '~/components/page/Introduce/IntroduceSection';
import IntroduceBanner from '~/components/page/Introduce/IntroduceBanner';
import INTRODUCE_CONSTANTS from '~/constants/page/introducePageData';
import MiddleBanner from '~/components/common/MiddleBanner';
import ProblemSection from '../components/page/Introduce/Problem/ProblemSection';

export default function introduce() {
  const { INTRODUCE_SECTION, MIDDLE_BANNER, PROBLEMS } = INTRODUCE_CONSTANTS;

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
    </>
  );
}
