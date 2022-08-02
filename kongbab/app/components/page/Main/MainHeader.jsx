import { Carousel } from '@mantine/carousel';
import { Container, Group, Image, Space, Text } from '@mantine/core';
import DefaultButton from '~/components/common/DefaultButton';
import useMainHeaderStyles from '~/Style/page/Main/useMainHeaderStyles';

import Carousel_A_1 from '~/asset/image/Carousel/Carousel_A_1.png';
import Carousel_A_2 from '~/asset/image/Carousel/Carousel_A_2.png';
import Carousel_A_3 from '~/asset/image/Carousel/Carousel_A_3.png';
import Carousel_B_1 from '~/asset/image/Carousel/Carousel_B_1.png';
import Carousel_B_2 from '~/asset/image/Carousel/Carousel_B_2.png';
import Carousel_B_3 from '~/asset/image/Carousel/Carousel_B_3.png';

export default function MainHeader(params) {
  const { classes, theme, cx } = useMainHeaderStyles();
  const { backgorund, wrapper, shadow, button, font18, font40, lineHeight150 } =
    classes;
  const { colors, primaryColor } = theme;
  const CarouselA = [Carousel_A_1, Carousel_A_2, Carousel_A_3];
  const CarouselB = [Carousel_B_1, Carousel_B_2, Carousel_B_3];

  const items = CarouselA.map((item, idx) => (
    <Carousel.Slide key={`carousel-A-Slide-${idx}`}>
      <>
        <Space h={30} />
        <Image
          src={item}
          alt={`carousel-A-image-${idx}`}
          width={242}
          className={shadow}
        />
        <Space h={30} />
      </>
    </Carousel.Slide>
  ));
  return (
    <section className={backgorund}>
      <Container px={0}>
        <div className={wrapper}>
          <div>
            <Text color={colors[primaryColor]} weight={500} className={font18}>
              온라인 명도소송
            </Text>
            <Space h={12} />
            <Text weight={700} className={cx(font40, lineHeight150)}>
              임차인의 월세 연체,
              <br />
              이제 참지마세요
            </Text>
            <Space h={20} />
            <Text weight={500} className={cx(font18, lineHeight150)}>
              보증금이 모두 소진되기 전에 명도소송을 시작하세요.
            </Text>
            <Space h={50} />
            <DefaultButton
              className={button}
              sx={(theme) => ({
                backgroundColor: colors[primaryColor],
              })}
              label='카톡 상담신청'
            />
          </div>
          <Carousel
            orientation='vertical'
            height={540}
            sx={{ maxWidth: 530 }}
            mx='auto'
          >
            {items}
          </Carousel>
        </div>
        <Space w={180} />
      </Container>
    </section>
  );
}
