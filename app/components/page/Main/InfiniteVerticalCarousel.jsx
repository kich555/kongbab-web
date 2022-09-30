import { Group, Image } from '@mantine/core';
import MAIN_CONSTANTS from '~/constants/page/mainPageData';
import useResponsive from '~/hooks/useResponsive';
import useVerticalCarouselStyles from '~/styles/page/Main/useVerticalCarouselStyles';

export default function InfiniteVerticalCarousel() {
  const { NewCarousel } = MAIN_CONSTANTS;
  const { classes, cx } = useVerticalCarouselStyles();
  const {
    slideWrapper,
    sliderInner,
    slideContainer,
    rightSlider,
    rightSlideItem,
  } = classes;

  const { tablet } = useResponsive();

  const SliderLeftItems = NewCarousel.map((item, idx) => (
    <div key={`carousel-A-Slide-${idx}`}>
      <Image
        src={item.leftImage}
        alt={`carousel-A-${idx}`}
        width={tablet ? 135 : 242}
      />
    </div>
  ));

  const SliderRightItems = NewCarousel.map((item, idx) => (
    <div className={rightSlideItem} key={`carousel-B-Slide-${idx}`}>
      <Image
        src={item.rightImage}
        alt={`carousel-B-${idx}`}
        width={tablet ? 135 : 242}
      />
    </div>
  ));

  return (
    <Group spacing={16} className={slideWrapper}>
      <div className={sliderInner}>
        <div className={cx(slideContainer)}>{SliderLeftItems}</div>
        <div className={cx(slideContainer, rightSlider)}>
          {SliderRightItems}
        </div>
      </div>
    </Group>
  );
}
