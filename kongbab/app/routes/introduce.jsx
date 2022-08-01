import IntroduceSection from '~/components/page/Introduce/IntroduceSection';
import IntroduceBanner from '~/components/page/Introduce/IntroduceBanner';
import INTRODUCE_CONSTANTS from '~/constants/page/introducePageData';
import MiddleBanner from '~/components/common/MiddleBanner';
import ProblemSection from '../components/page/Introduce/Problem/ProblemSection';

export default function introduce() {
  const { INTRODUCE_SECTION, PROBLEMS } = INTRODUCE_CONSTANTS;

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
      <ProblemSection problems={PROBLEMS} />
      <MiddleBanner title='온라인 명도소송'>
        콩밥은 명도소송 자동화를 통화여
        <br />
        법률서비스의 문턱을 획기적으로 낮추는 서비스입니다
      </MiddleBanner>
    </>
  );
}
