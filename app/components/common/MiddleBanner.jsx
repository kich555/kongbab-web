import { Container, Space, Text } from '@mantine/core';
import useMiddleBannerStyles from '~/constants/common/useMiddleBannerStyles';
import useResponsive from '~/hooks/useResponsive';

export default function MiddleBanner({ title, desc }) {
  const { classes, theme } = useMiddleBannerStyles();
  const { section, wrapper, font18, font40 } = classes;
  const { colors, primaryColor, white } = theme;

  const { mobile } = useResponsive();
  return (
    <section className={section}>
      <Container px={mobile ? 26 : 0} className={wrapper}>
        <Space h={mobile ? 60 : 100} />
        <Text
          color={colors[primaryColor]}
          align='center'
          weight={700}
          className={font18}
        >
          {title}
        </Text>
        <Space h={mobile ? 20 : 24} />
        <Text color={white} align='center' weight={700} className={font40}>
          {desc}
        </Text>
        <Space h={mobile ? 56 : 100} />
      </Container>
    </section>
  );
}
