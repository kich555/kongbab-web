import { Text, Space, Container } from '@mantine/core';
import useIntroduceSectionStyles from '~/Style/page/Introduce/useIntroduceSectionStyles';

export default function IntroduceSection({
  subTitle,
  title,
  desc1,
  desc2,
  backgroundColor,
}) {
  const { classes, theme } = useIntroduceSectionStyles();
  const { font18, lineHeight150 } = classes;
  const { colors, primaryColor } = theme;
  return (
    <section style={{ backgroundColor }}>
      <Container px={180}>
        <Space h={subTitle === '그럼에도 불구하고' ? 168 : 186} />
        <Text color={colors[primaryColor]} weight={500} className={font18}>
          {subTitle}
        </Text>
        <Space h={12} />
        <Text size='xl' weight={700} className={lineHeight150}>
          {title}
        </Text>
        <Space h={30} />
        <Text
          size='lg'
          color={colors.gray[3]}
          weight={500}
          className={lineHeight150}
        >
          {desc1}
          <br />
          {desc2}
        </Text>
        <Space h={subTitle === '그럼에도 불구하고' ? 168 : 186} />
      </Container>
    </section>
  );
}
