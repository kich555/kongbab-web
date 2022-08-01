import { Text, Image } from '@mantine/core';
import useIntroduceBannerStyles from '~/Style/page/Introduce/useIntroduceBannerStyles';
import bannerSrc from '~/asset/image/Introduce_Banner_Image.png';

export default function IntroduceBanner() {
  const { classes, theme } = useIntroduceBannerStyles();
  const { wrapper, imageBox, inner } = classes;
  const { white } = theme;

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
