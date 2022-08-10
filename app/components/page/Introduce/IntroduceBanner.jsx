import { Text, Image } from '@mantine/core';
import useIntroduceBannerStyles from '~/Style/page/Introduce/useIntroduceBannerStyles';
import bannerSrc from '~/asset/image/Introduce_Banner_Image.png';
import useResponsive from '~/hooks/useResponsive';

export default function IntroduceBanner() {
  const { classes, theme } = useIntroduceBannerStyles();
  const { mobileWrapper, wrapper, imageBox, inner } = classes;
  const { white } = theme;
  const { mobile } = useResponsive();
  console.log('mobile', mobile);

  if (mobile) {
    return (
      <section className={mobileWrapper}>
        <Text size='lg' align='center' color={white} weight={700}>
          콩밥 소개
        </Text>
      </section>
    );
  }

  return (
    <section className={wrapper}>
      <Image src={bannerSrc} className={imageBox} />
      <div className={inner}>
        <Text size='xl' align='center' color={white} weight={700}>
          콩밥 소개
        </Text>
      </div>
    </section>
  );
}
