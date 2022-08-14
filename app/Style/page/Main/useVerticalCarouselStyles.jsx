import { createStyles, keyframes } from '@mantine/core';

// "100%" {
//   transform: translateX(calc(var(--slide-width) * var(--no-of-slides)* -1));
// }

export const slide = keyframes({
  '0%': {
    transform: 'translateY(0)',
  },
  '100%': {
    transform: 'translateY(calc(336px * 3))',
  },
});

export const mobileSlide = keyframes({
  '0%': {
    transform: 'translateY(0)',
  },
  '100%': {
    transform: 'translateY(calc(185.5px * 3))',
  },
});

const useVerticalCarouselStyles = createStyles((theme) => ({
  slideWrapper: {
    position: 'relative',
    overflow: 'hidden',
    [theme.fn.smallerThan('md')]: {
      width: '270px',
      height: '100%',
    },
    [theme.fn.smallerThan('sm')]: {
      height: '254px',
    },
  },
  sliderInner: {
    display: 'flex',
    [theme.fn.smallerThan('md')]: {
      position: 'absolute',
    },
  },
  slideContainer: {
    animation: `${slide} 8s linear infinite`,
    [theme.fn.smallerThan('md')]: {
      animation: `${mobileSlide} 8s linear infinite`,
    },
  },

  rightSlider: {
    position: 'relative',
    top: '40px',
  },
}));

export default useVerticalCarouselStyles;
