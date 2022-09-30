import { Image, Space, Text, Center } from '@mantine/core';
import Title from '~/components/common/Title';
import profileImage from 'public/image/Introduce/Profile_Image.webp';
import useLwaerProfileStyles from '~/styles/page/Introduce/useLwaerProfileStyles';
import useResponsive from '~/hooks/useResponsive';

export default function LawerProfile({ name, desc }) {
  const { classes, theme } = useLwaerProfileStyles();
  const { colors } = theme;
  const { content, imageWrapper, profileName } = classes;
  const { mobile } = useResponsive();
  return (
    <section>
      <Space h={mobile ? 20 : 28} />
      <Title title='대표 변호사' />
      <Space h={50} />
      <Center>
        <Image
          src={profileImage}
          alt='lawer profile'
          width={mobile ? 150 : 200}
          className={imageWrapper}
        />
      </Center>
      <Space h={32} />
      <Text size='lg' align='center' weight={700} className={profileName}>
        {name}
        <Space w={8} />
        <Text size={mobile ? 'sm' : 'md'} component='span'>
          변호사
        </Text>
      </Text>
      <Space h={mobile ? 30 : 40} />
      <Text color={colors.gray[3]} align='center' className={content}>
        {desc}
      </Text>
      <Space h={100} />
    </section>
  );
}
