import { Container, Space, Text } from '@mantine/core';
import useMiddleBannerStyles from '~/Style/components/useMiddleBannerStyles';
import useResponsive from '~/hooks/useResponsive';

export default function MiddleBanner({ title, desc }) {
  const { classes, theme } = useMiddleBannerStyles();
  const { section, wrapper } = classes;
  const { colors, primaryColor, white } = theme;

  const { mobile } = useResponsive();
  return (
    <section className={section}>
      <Container px={mobile ? 26 : 0} className={wrapper}>
        <Space h={mobile ? 60 : 100} />
        <Text
          size={18}
          color={colors[primaryColor]}
          align='center'
          weight={700}
        >
          {title}
        </Text>
        <Space h={mobile ? 20 : 24} />
        <Text size={40} color={white} align='center' weight={700}>
          {desc}
        </Text>
        <Space h={mobile ? 56 : 100} />
      </Container>
    </section>
  );
}
