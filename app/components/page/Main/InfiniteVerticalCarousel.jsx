import { Group, Image } from '@mantine/core';
import MAIN_CONSTANTS from '~/constants/page/mainPageData';
import useVerticalCarouselStyles from '~/Style/page/Main/useVerticalCarouselStyles';

export default function InfiniteVerticalCarousel() {
  const { NewCarousel } = MAIN_CONSTANTS;
  const { classes, cx } = useVerticalCarouselStyles();
  const { slideContainer, rightSlider, rightSlideItem } = classes;

  const SliderLeftItems = NewCarousel.map((item, idx) => (
    <div key={`carousel-A-Slide-${idx}`}>
      <Image src={item.leftImage} alt={`carousel-A-image-${idx}`} width={242} />
    </div>
  ));

  const SliderRightItems = NewCarousel.map((item, idx) => (
    <div className={rightSlideItem} key={`carousel-B-Slide-${idx}`}>
      <Image
        src={item.rightImage}
        alt={`carousel-B-image-${idx}`}
        width={242}
      />
    </div>
  ));

  return (
    <Group spacing={20}>
      <div className={cx(slideContainer)}>{SliderLeftItems}</div>
      <div className={cx(slideContainer, rightSlider)}>{SliderRightItems}</div>
    </Group>
  );
}
