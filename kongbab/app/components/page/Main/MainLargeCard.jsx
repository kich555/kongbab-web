import { Image, Space, Text } from '@mantine/core';
import { useMainLargeCardStyles } from '~/Style/page/Main/useMainCardStyles';
import mainCard3 from '~/asset/image/MainCard/Main_Card3.png';

export default function MainLargeCard({ subTitle, title, desc }) {
  const { classes, theme, cx } = useMainLargeCardStyles();
  const { wrapper, inner, font20, lineHeight150, image } = classes;
  const { colors, primaryColor } = theme;
  return (
    <div className={wrapper}>
      <div className={inner}>
        <Text color={colors[primaryColor]} weight={700} className={font20}>
          {subTitle}
        </Text>
        <Space h={15} />
        <Text size='xl' weight={700} className={lineHeight150}>
          {title}
        </Text>
        <Space h={20} />
        <Text weight={500} className={cx(font20, lineHeight150)}>
          {desc}
        </Text>
      </div>
      <div>
        <Image
          src={mainCard3}
          alt='main-card-3'
          width={453}
          height='auto'
          className={image}
        />
      </div>
    </div>
  );
}
