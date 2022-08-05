import { useRef } from 'react';
import { Space, Text } from '@mantine/core';
import { useIntersection } from '@mantine/hooks';
import useMiddleBannerStyles from '~/constants/common/useMiddleBannerStyles';

export default function MiddleBanner({ title, desc }) {
  const containerRef = useRef();
  const { ref, entry } = useIntersection({
    root: containerRef.current,
  });
  const { classes, theme } = useMiddleBannerStyles();
  const { wrapper, font18, font40 } = classes;
  const { colors, primaryColor, white } = theme;

  console.log('entry?.isIntersecting', entry?.isIntersecting);
  return (
    <div>
      <div
        className={wrapper}
        ref={ref}
        style={{ backgroundPosition: entry?.isIntersecting && 'left' }}
      >
        <Space h={100} />
        <Text
          color={colors[primaryColor]}
          align='center'
          weight={700}
          className={font18}
        >
          {title}
        </Text>
        <Space h={24} />
        <Text color={white} align='center' weight={700} className={font40}>
          {desc}
        </Text>
        <Space h={100} />
      </div>
    </div>
  );
}
