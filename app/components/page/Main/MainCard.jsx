import { Center, Image, Space, Text } from '@mantine/core';
import { useMainCardStyles } from '~/styles/page/Main/useMainCardStyles';
import mainCard1 from 'public/image/MainCard/Main_Card1.webp';
import mainCard2 from 'public/image/MainCard/Main_Card2.webp';
import useResponsive from '~/hooks/useResponsive';

export default function MainCard({ subTitle, title, idx }) {
  const iamgeArr = [mainCard1, mainCard2];
  const { classes, theme } = useMainCardStyles();
  const { wrapper, font20, lineHeight150, image } = classes;
  const { colors, primaryColor } = theme;
  const { mobile } = useResponsive();
  return (
    <div className={wrapper}>
      <Space h={mobile ? 40 : 48} />
      <Text
        color={colors[primaryColor]}
        align='center'
        weight={700}
        className={font20}
      >
        {subTitle}
      </Text>
      <Space h={mobile ? 20 : 15} />
      <Text
        size={mobile ? 'lg' : 'xl'}
        align='center'
        weight={700}
        className={lineHeight150}
      >
        {title}
      </Text>
      <Space h={mobile ? 20 : 32} />
      <Center>
        <Image
          src={iamgeArr[idx]}
          alt={`main-card-${idx + 1}`}
          width={mobile ? 295 : 340}
          height='auto'
          className={image}
        />
      </Center>
    </div>
  );
}
