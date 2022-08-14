import { Container, Space, Text } from '@mantine/core';
import DefaultButton from '~/components/common/DefaultButton';
import useMainHeaderStyles from '~/Style/page/Main/useMainHeaderStyles';
import InfiniteVerticalCarousel from '~/components/page/Main/InfiniteVerticalCarousel';
import useResponsive from '~/hooks/useResponsive';

export default function MainHeader(params) {
  const { classes, theme, cx } = useMainHeaderStyles();

  const {
    backgorund,
    wrapper,
    inner,
    subTitle,
    button,
    font18,
    font40,
    lineHeight150,
  } = classes;
  const { colors, primaryColor } = theme;

  const { mobile, tablet } = useResponsive();
  return (
    <section className={backgorund}>
      {mobile ? <Space h={50} /> : <Space w={180} />}
      <Container px={tablet ? 26 : 0} className={wrapper}>
        <div className={inner}>
          <div>
            <Text color={colors[primaryColor]} weight={500} className={font18}>
              온라인 명도소송
            </Text>
            <Space h={12} />
            <Text weight={700} className={cx(font40, lineHeight150)}>
              임차인의 월세 연체,
              <br />
              이제 참지마세요
            </Text>
            <Space h={mobile ? 15 : 20} />
            <Text weight={500} className={cx(subTitle, lineHeight150)}>
              보증금이 모두 소진되기 전에 명도소송을 시작하세요.
            </Text>
            <Space h={mobile ? 10 : 50} />
            <DefaultButton
              className={button}
              sx={(theme) => ({
                backgroundColor: colors[primaryColor],
              })}
              label='카톡 상담신청'
            />
          </div>
          <InfiniteVerticalCarousel />
        </div>
        <Space w={180} />
      </Container>
    </section>
  );
}
