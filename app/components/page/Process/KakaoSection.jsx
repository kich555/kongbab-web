import { Text, Container, Space, Image } from '@mantine/core';
import useResponsive from '~/hooks/useResponsive';
import useKakaoSectionStyles from '~/Style/page/Process/useKakaoSectionStyles';
import KakaoImage from '~/asset/image/Process/Process_Kakao_Image.webp';
export default function KakaoSection() {
  const { classes, theme, cx } = useKakaoSectionStyles();
  const { colors } = theme;
  const { wrapper, lineHeight150, underLine } = classes;
  const { mobile } = useResponsive();

  return (
    <Container px={0}>
      <Space h={mobile ? 100 : 180} />
      <Text
        size={mobile ? 16 : 20}
        color={colors[theme.primaryColor]}
        weight={700}
        align='center'
      >
        더이상 기다리지 마세요
      </Text>
      <Space h={mobile ? 12 : 20} />
      <Text
        size={mobile ? 28 : 36}
        className={cx({ [lineHeight150]: mobile })}
        weight={700}
        align='center'
      >
        실시간 진행사항 {mobile && <br />}
        카카오 알림톡으로 발송
      </Text>
      <Space h={mobile ? 40 : 60} />
      <div className={wrapper}>
        <Space h={mobile ? 26 : 40} />

        <Image src={KakaoImage} width={mobile ? 173 : 287} alt='kakao-image' />
      </div>
      <Space h={mobile ? 30 : 40} />
      <Container size={920} px={mobile ? 30 : 0}>
        <Text size={mobile ? 16 : 20} className={lineHeight150} align='center'>
          매번 법률사무실에 연락드려서 {mobile && <br />}
          진행사항 확인하기 번거롭지 않으신가요?
          <br />
          {mobile && <br />}
          콩밥은 고객님의{' '}
          <Text
            size={mobile ? 16 : 20}
            className={underLine}
            component='span'
            weight={900}
            // underline
          >
            소송 지연을 방지하고자 모니터링을 진행
          </Text>{' '}
          하여 빠르게 대응하고, 모든 과정을 알림톡으로 전달드립니다.
        </Text>
      </Container>
    </Container>
  );
}
