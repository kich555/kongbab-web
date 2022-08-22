import { Container, Space, Text } from '@mantine/core';
import DefaultButton from '~/components/common/DefaultButton';
import useMainHeaderStyles from '~/Style/page/Main/useMainHeaderStyles';
import InfiniteVerticalCarousel from '~/components/page/Main/InfiniteVerticalCarousel';
import useResponsive from '~/hooks/useResponsive';

export default function MainHeader(params) {
  const { classes, theme } = useMainHeaderStyles();

  const { backgorund, wrapper, inner, button, lineHeight150 } = classes;
  const { colors, primaryColor } = theme;

  const { mobile, tablet } = useResponsive();
  return (
    <section className={backgorund}>
      {mobile ? <Space h={50} /> : <Space w={180} />}
      <Container px={tablet ? 26 : 0} className={wrapper}>
        <div className={inner}>
          <div>
            <Text
              align={mobile && 'center'}
              size={mobile ? 14 : 18}
              color={colors[primaryColor]}
              weight={500}
            >
              온라인 명도소송
            </Text>
            <Space h={12} />
            <Text
              size={mobile ? 28 : 40}
              align={mobile && 'center'}
              weight={700}
              className={lineHeight150}
            >
              임차인의 월세 연체,
              <br />
              이제 참지마세요
            </Text>
            <Space h={mobile ? 15 : 20} />
            <Text
              size={mobile ? 14 : 16}
              align={mobile && 'center'}
              weight={500}
              className={lineHeight150}
            >
              보증금이 모두 소진되기 전에 명도소송을 시작하세요.
              <br />
              14년 경력의 변호사가 확실히 해결해 드립니다.
            </Text>
            <Space h={mobile ? 20 : 50} />
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
