import MainThirdSection from '~/components/page/Main/MainThirdSection';
import CommonFooterSection from '~/components/common/CommonFooterSection';
import MainSecondSection from '~/components/page/Main/MainSecondSection';
import MainHeader from '~/components/page/Main/MainHeader';

export default function Main() {
  return (
    <>
      <MainHeader />
      <MainSecondSection />
      <MainThirdSection />
      <CommonFooterSection />
    </>
  );
}
