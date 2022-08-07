import { useRef } from 'react';
import { Container, Group, Image, Space, Text } from '@mantine/core';
import DefaultButton from '~/components/common/DefaultButton';
import useMainHeaderStyles from '~/Style/page/Main/useMainHeaderStyles';
import Autoplay from 'embla-carousel-autoplay';
import { Carousel } from '@mantine/carousel';
import Main_Banner from '~/asset/image/Carousel/Main_Banner.png';
import Carousel_A_1 from '~/asset/image/Carousel/Carousel_A_1.png';
import Carousel_A_2 from '~/asset/image/Carousel/Carousel_A_2.png';
import Carousel_A_3 from '~/asset/image/Carousel/Carousel_A_3.png';
import Carousel_B_1 from '~/asset/image/Carousel/Carousel_B_1.png';
import Carousel_B_2 from '~/asset/image/Carousel/Carousel_B_2.png';
import Carousel_B_3 from '~/asset/image/Carousel/Carousel_B_3.png';
import useResponsive from '~/hooks/useResponsive';

export default function MainHeader(params) {
  const { classes, theme, cx } = useMainHeaderStyles();

  const {
    backgorund,
    wrapper,
    inner,
    shadow,
    subTitle,
    button,
    font18,
    font40,
    lineHeight150,
    image,
    flewRow,
  } = classes;
  const { colors, primaryColor } = theme;
  const CarouselA = [
    Carousel_A_1,
    Carousel_A_2,
    Carousel_A_3,
    Carousel_A_1,
    Carousel_A_2,
    Carousel_A_3,
    Carousel_A_1,
    Carousel_A_2,
    Carousel_A_3,
    Carousel_A_1,
    Carousel_A_2,
    Carousel_A_3,
    Carousel_A_1,
    Carousel_A_2,
    Carousel_A_3,
    Carousel_A_1,
    Carousel_A_2,
    Carousel_A_3,
    Carousel_A_1,
    Carousel_A_2,
    Carousel_A_3,
    Carousel_A_1,
    Carousel_A_2,
    Carousel_A_3,
    Carousel_A_1,
    Carousel_A_2,
    Carousel_A_3,
  ];
  const CarouselB = [
    Carousel_B_1,
    Carousel_B_2,
    Carousel_B_3,
    Carousel_B_1,
    Carousel_B_2,
    Carousel_B_3,
    Carousel_B_1,
    Carousel_B_2,
    Carousel_B_3,
    Carousel_B_1,
    Carousel_B_2,
    Carousel_B_3,
    Carousel_B_1,
    Carousel_B_2,
    Carousel_B_3,
    Carousel_B_1,
    Carousel_B_2,
    Carousel_B_3,
    Carousel_B_1,
    Carousel_B_2,
    Carousel_B_3,
    Carousel_B_1,
    Carousel_B_2,
    Carousel_B_3,
    Carousel_B_1,
    Carousel_B_2,
    Carousel_B_3,
    Carousel_B_1,
    Carousel_B_2,
    Carousel_B_3,
  ];
  const autoplayA = useRef(
    Autoplay({ delay: 3000 }, (emblaRoot) => emblaRoot.parentElement)
  );
  const autoplayB = useRef(
    Autoplay({ delay: 3000 }, (emblaRoot) => emblaRoot.parentElement)
  );

  const items = CarouselA.map((item, idx) => (
    <Carousel.Slide key={`carousel-A-Slide-${idx}`}>
      <>
        <Image
          src={item}
          alt={`carousel-A-image-${idx}`}
          width={242}
          className={shadow}
        />
      </>
    </Carousel.Slide>
  ));

  const itemsB = CarouselB.map((item, idx) => (
    <Carousel.Slide key={`carousel-A-Slide-${idx}`}>
      <>
        <Image
          src={item}
          alt={`carousel-A-image-${idx}`}
          width={242}
          className={shadow}
        />
      </>
    </Carousel.Slide>
  ));
  const { mobile, tablet } = useResponsive();
  return (
    <section className={backgorund}>
      {mobile ? <Space h={50} /> : <Space w={180} />}
      <Container px={tablet ? 26 : 0} className={wrapper}>
        <div className={inner}>
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
            <Space h={mobile ? 15 : 20} />
            <Text weight={500} className={cx(subTitle, lineHeight150)}>
              보증금이 모두 소진되기 전에 명도소송을 시작하세요.
            </Text>
            <Space h={mobile ? 10 : 50} />
            <DefaultButton
              className={button}
              sx={(theme) => ({
                backgroundColor: colors[primaryColor],
              })}
              label='카톡 상담신청'
            />
          </div>
          {/* <Image
            src={Main_Banner}
            width={mobile ? 375 : 560}
            className={image}
          /> */}
          <Group spacing={10}>
            <Carousel
              orientation='vertical'
              loop
              withControls={false}
              initialSlide={1}
              slideSize='33.33%'
              height={540}
              sx={{ maxWidth: 530 }}
              draggable={false}
              plugins={[autoplayA.current]}
              onMouseEnter={autoplayA.current.stop}
              onMouseLeave={autoplayA.current.reset}
              styles={{
                container: {
                  transition: 'all 3s linear !important',
                },
              }}
            >
              {items}
            </Carousel>
            <Carousel
              orientation='vertical'
              loop
              align={0.7}
              withControls={false}
              initialSlide={2}
              slideSize='33.33%'
              height={540}
              sx={{ maxWidth: 530 }}
              draggable={false}
              plugins={[autoplayB.current]}
              onMouseEnter={autoplayB.current.stop}
              onMouseLeave={autoplayB.current.reset}
              styles={{
                container: {
                  transition: 'all 3s linear !important',
                },
              }}
            >
              {itemsB}
            </Carousel>
          </Group>
        </div>
        <Space w={180} />
      </Container>
    </section>
  );
}
