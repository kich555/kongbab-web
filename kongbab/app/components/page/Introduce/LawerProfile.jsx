import { Image, Space, Text, Center } from '@mantine/core';
import Title from '~/components/common/Title';
import profileImage from '~/asset/image/Profile_Image.png';
import useLwaerProfileStyles from '~/Style/page/Introduce/useLwaerProfileStyles';

export default function LawerProfile({ name, desc }) {
  const { classes, theme } = useLwaerProfileStyles();
  const { colors } = theme;
  const { content, imageWrapper, center } = classes;
  return (
    <section>
      <Space h={28} />
      <Title title='콩밥이 해결하고 싶은 문제' />
      <Space h={50} />
      <Center>
        <Image
          src={profileImage}
          alt='lawer profile'
          width={200}
          height={200}
          className={imageWrapper}
        />
      </Center>
      <Space h={32} />
      <Text size='lg' align='center' weight={700} className={center}>
        {name}
        <Space w={8} />
        <Text size='md' component='span'>
          변호사
        </Text>
      </Text>
      <Space h={40} />
      <Text color={colors.gray[3]} align='center' className={content}>
        {desc}
      </Text>
      <Space h={100} />
    </section>
  );
}
