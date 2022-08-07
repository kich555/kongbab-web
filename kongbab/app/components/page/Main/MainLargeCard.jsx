import { Image, Space, Text } from '@mantine/core';
import { useMainLargeCardStyles } from '~/Style/page/Main/useMainCardStyles';
import mainCard3 from '~/asset/image/MainCard/Main_Card3.png';
import useResponsive from '~/hooks/useResponsive';

export default function MainLargeCard({ subTitle, title, desc }) {
  const { classes, theme, cx } = useMainLargeCardStyles();
  const {
    wrapper,
    contentWrapper,
    inner,
    content,
    font20,
    lineHeight150,
    image,
  } = classes;
  const { colors, primaryColor } = theme;

  const { mobile } = useResponsive();
  return (
    <div className={wrapper}>
      <div className={inner}>
        <Text color={colors[primaryColor]} weight={700} className={font20}>
          {subTitle}
        </Text>
        <Space h={mobile ? 20 : 15} />
        <Text
          size={mobile ? 'lg' : 'xl'}
          align={mobile ? 'center' : 'left'}
          weight={700}
          className={lineHeight150}
        >
          {title}
        </Text>
        <Space h={mobile ? 25 : 20} />
        <Text weight={500} className={cx(content, lineHeight150)}>
          {desc}
        </Text>
      </div>
      {mobile && <Space h={30} />}
      <div className={contentWrapper}>
        <Image
          src={mainCard3}
          alt='main-card-3'
          width={mobile ? 271 : 453}
          height='auto'
          className={image}
        />
      </div>
    </div>
  );
}
