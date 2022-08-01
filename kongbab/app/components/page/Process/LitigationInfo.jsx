import { Container, Text, Group, Space } from '@mantine/core';
import useResponsive from '~/hooks/useResponsive';
import useLitigationInfoStyles from '~/Style/page/Process/useLitigationInfoStyles';
import PROCESS_CONSTANTS from '~/constants/page/processPageData';
import Title from '~/components/common/Title';

export default function LitigationInfo(params) {
  const { LITIGATION_INFO } = PROCESS_CONSTANTS;
  const { classes, theme } = useLitigationInfoStyles();
  const { colors } = theme;
  const { lineHeight150, box, maxWidth, font40, content } = classes;
  const { mobile } = useResponsive();

  const items = LITIGATION_INFO.map((item) => (
    <Container
      key={item.title}
      size={252}
      px={mobile ? 30 : 36}
      className={box}
      style={item.backGround}
    >
      <Text align='center' weight={700} className={font40}>
        {item.icon}
      </Text>
      {mobile ? <Space w={36} /> : <Space h={20} />}
      <div className={maxWidth}>
        <Text size='lg' align={mobile ? 'left' : 'center'} weight={700}>
          {item.title}
        </Text>
        <Space h={12} />
        <Text
          align={mobile ? 'left' : 'center'}
          className={lineHeight150}
          size='xs'
          color={colors.gray[3]}
        >
          {item.desc}
        </Text>
      </div>
    </Container>
  ));

  return (
    <Container size={804} px={0}>
      <Title title='명도소송 유형' />
      <Space h={mobile ? 20 : 36} />
      <Text align='center' className={content}>
        명도소송은 임차인이 임대료를 내지 않거나 계약이 종료된 후에도 퇴거하지
        않는 등의 경우에 임대인이 임차인을 상대로 인도 또는 퇴거를 구하는
        소송입니다.{' '}
      </Text>
      <Space h={mobile ? 50 : 60} />
      <Group position='center' spacing={24}>
        {items}
      </Group>
    </Container>
  );
}
