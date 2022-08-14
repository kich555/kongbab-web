import { createStyles, keyframes } from '@mantine/core';

// "100%" {
//   transform: translateX(calc(var(--slide-width) * var(--no-of-slides)* -1));
// }

export const slide = keyframes({
  '0%': {
    transform: 'translateY(0)',
  },
  '100%': {
    transform: 'translateY(calc(337px * 3))',
  },
});

const InfiniteVerticalSlider = createStyles((theme) => ({
  slideContainer: {
    animation: `${slide} 4s linear infinite`,
  },

  rightSlider: {
    position: 'relative',
    top: '40px',
    [theme.fn.smallerThan('md')]: {
      display: 'none',
    },
  },
}));

export default InfiniteVerticalSlider;
