import { Container, Text, Group, Space } from '@mantine/core';
import Title from 'components/Title';
import useLitigationInfoStyles from '~/Style/page/Process/useLitigationInfoStyles';

export default function LitigationInfo(params) {
  const { classes, cx } = useLitigationInfoStyles();
  const {
    lineHeight150,
    box,
    backgroundGreen,
    backgroundRed,
    backgroundBlue,
    font40,
    content,
  } = classes;
  return (
    <Container size={804} px={0}>
      <Title title='명도소송 유형' />
      <Space h={36} />
      <Text align='center' className={content}>
        명도소송은 임차인이 임대료를 내지 않거나 계약이 종료된 후에도 퇴거하지
        않는 등의 경우에 임대인이 임차인을 상대로 인도 또는 퇴거를 구하는
        소송입니다.{' '}
      </Text>
      <Space h={60} />
      <Group position='center' spacing={24}>
        <Container size={252} className={cx(box, backgroundGreen)}>
          <Text align='center' weight={700} className={font40}>
            🏦
          </Text>
          <Space h={20} />
          <Text size='lg' weight={700} align='center'>
            상가
          </Text>
          <Space h={12} />
          <Text size='xs' align='center' className={lineHeight150}>
            상가임대차보호법이 적용되는 상가는 월세가 3기 이상 연체시 명도소송
            가능
          </Text>
        </Container>
        <Container size={252} className={cx(box, backgroundRed)}>
          <Text align='center' weight={700} className={font40}>
            🏠
          </Text>
          <Space h={20} />
          <Text size='lg' weight={700} align='center'>
            주택
          </Text>
          <Space h={12} />
          <Text size='xs' align='center' className={lineHeight150}>
            주택임대차보호법이 적용되는 주택은 월세가 2기 이상 연체시 명도소송
            가능
          </Text>
        </Container>
        <Container size={252} className={cx(box, backgroundBlue)}>
          <Text align='center' weight={700} className={font40}>
            🏢
          </Text>
          <Space h={20} />
          <Text size='lg' weight={700} align='center'>
            기타
          </Text>
          <Space h={12} />
          <Text size='xs' align='center' className={lineHeight150}>
            일반 건물, 토지 등
          </Text>
        </Container>
      </Group>
    </Container>
  );
}
