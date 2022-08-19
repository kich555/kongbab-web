import { Text, Space, Container } from '@mantine/core';
import useResponsive from '~/hooks/useResponsive';
import useIntroduceSectionStyles from '~/Style/page/Introduce/useIntroduceSectionStyles';

export default function IntroduceSection({
  subTitle,
  title,
  desc,
  backgroundColor,
}) {
  const { classes, theme } = useIntroduceSectionStyles();
  const { lineHeight150 } = classes;
  const { colors, primaryColor } = theme;

  const { mobile } = useResponsive();
  return (
    <section style={{ backgroundColor }}>
      <Container px={26}>
        <Space h={mobile ? 64 : 186} />
        <Text size={18} color={colors[primaryColor]} weight={500}>
          {subTitle}
        </Text>
        <Space h={12} />
        <Text
          size={mobile ? 'lg' : 'xl'}
          weight={700}
          className={lineHeight150}
        >
          {title}
        </Text>
        <Space h={30} />
        <Text
          size={mobile ? 'md' : 'lg'}
          color={colors.gray[3]}
          weight={500}
          className={lineHeight150}
        >
          {desc}
        </Text>
        <Space h={mobile ? 64 : 186} />
      </Container>
    </section>
  );
}
