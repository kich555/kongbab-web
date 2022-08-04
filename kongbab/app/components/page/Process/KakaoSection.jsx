import { Text, Container, Space, Image } from '@mantine/core';
import useResponsive from '~/hooks/useResponsive';
import useKakaoSectionStyles from '~/Style/page/Process/useKakaoSectionStyles';
import KakaoImage from '~/asset/image/Process/Process_Kakao_Image.png';
export default function KakaoSection(params) {
  const { classes, cx } = useKakaoSectionStyles();
  const { wrapper, font20, titleFont, lineHeight150, underLine } = classes;
  const { mobile } = useResponsive();

  return (
    <Container px={0}>
      <Space h={mobile ? 100 : 180} />
      <Text
        className={font20}
        variant='gradient'
        gradient={{ from: '#FF0000', to: '#FF8541', deg: 90 }}
        weight={700}
        align='center'
      >
        더이상 기다리지 마세요
      </Text>
      <Space h={mobile ? 12 : 20} />
      <Text className={titleFont} weight={700} align='center'>
        실시간 진행사항을 카카오 알림톡으로 발송
      </Text>
      <Space h={mobile ? 40 : 60} />
      <div className={wrapper}>
        <Space h={40} />

        <Image src={KakaoImage} width={287} alt='kakao-image' />
      </div>
      <Space h={mobile ? 30 : 40} />
      <Container size={920} px={mobile ? 30 : 0}>
        <Text className={cx(font20, lineHeight150)} align='center'>
          매번 법률사무실에 연락드려서
          {mobile && <br />}
          진행사항 확인하기 번거롭지 않으신가요?
          <br />
          {mobile && <br />}
          콩밥은 고객님의{' '}
          <Text
            className={cx(font20, underLine)}
            component='span'
            weight={900}
            underline
          >
            소송 지연을 방지하고자
          </Text>{' '}
          모니터링을 진행하여 빠르게 대응하고, 모든 과정을 알림톡으로
          전달드립니다.
        </Text>
      </Container>
    </Container>
  );
}
