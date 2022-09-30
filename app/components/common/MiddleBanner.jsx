import { Container, Space, Text } from '@mantine/core';
import useMiddleBannerStyles from '~/styles/components/useMiddleBannerStyles';
import useResponsive from '~/hooks/useResponsive';

export default function MiddleBanner({ title, desc }) {
  const { classes, theme } = useMiddleBannerStyles();
  const { section, wrapper, lineHeight150 } = classes;
  const { colors, primaryColor, white } = theme;

  const { mobile } = useResponsive();
  return (
    <section className={section}>
      <Container px={mobile ? 26 : 0} className={wrapper}>
        <Space h={mobile ? 60 : 100} />
        <Text
          size={mobile ? 16 : 18}
          color={colors[primaryColor]}
          align='center'
          weight={700}
        >
          {title}
        </Text>
        <Space h={mobile ? 20 : 24} />
        <Text
          size={mobile ? 24 : 40}
          color={white}
          align='center'
          weight={700}
          className={lineHeight150}
        >
          {desc}
        </Text>
        <Space h={mobile ? 56 : 100} />
      </Container>
    </section>
  );
}
