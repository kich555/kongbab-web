import { Center, Image, Space, Text } from '@mantine/core';
import { useMainCardStyles } from '~/Style/page/Main/useMainCardStyles';
import mainCard1 from '~/asset/image/MainCard/Main_Card1.png';
import mainCard2 from '~/asset/image/MainCard/Main_Card2.png';

export default function MainCard({ subTitle, title, idx }) {
  const iamgeArr = [mainCard1, mainCard2];
  const { classes, theme } = useMainCardStyles();
  const { wrapper, font20, lineHeight150, image } = classes;
  const { colors, primaryColor } = theme;
  return (
    <div className={wrapper}>
      <Space h={48} />
      <Text
        color={colors[primaryColor]}
        align='center'
        weight={700}
        className={font20}
      >
        {subTitle}
      </Text>
      <Space h={15} />
      <Text size='xl' align='center' weight={700} className={lineHeight150}>
        {title}
      </Text>
      <Space h={32} />
      <Center>
        <Image
          src={iamgeArr[idx]}
          alt={`main-card-${idx + 1}`}
          width={340}
          height='auto'
          className={image}
        />
      </Center>
    </div>
  );
}
