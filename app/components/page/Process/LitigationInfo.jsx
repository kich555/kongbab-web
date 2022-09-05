import { Container, Text, Group, Space } from '@mantine/core';
import parse from 'html-react-parser';
import useResponsive from '~/hooks/useResponsive';
import useLitigationInfoStyles from '~/Style/page/Process/useLitigationInfoStyles';
import PROCESS_CONSTANTS from '~/constants/page/processPageData';
import Title from '~/components/common/Title';

export default function LitigationInfo() {
  const { LITIGATION_INFO } = PROCESS_CONSTANTS;
  const { classes, theme } = useLitigationInfoStyles();
  const { colors } = theme;
  const { lineHeight150, box, maxWidth } = classes;
  const { mobile } = useResponsive();

  const items = LITIGATION_INFO.map((item) => (
    <Container key={item.title} size={252} px={25} className={box}>
      <Text size={40} align='center' weight={700} ml={mobile && 21}>
        {item.icon}
      </Text>
      {!mobile && <Space h={20} />}
      <div className={maxWidth}>
        <Text
          component='div'
          size={mobile ? 20 : 24}
          align={mobile ? 'left' : 'center'}
          weight={700}
        >
          {item.title}
        </Text>
        <Space h={12} />
        <Text
          component='div'
          align={mobile ? 'left' : 'center'}
          className={lineHeight150}
          size={mobile ? 14 : 13}
          color={colors.gray[3]}
        >
          {parse(item.desc)}
        </Text>
      </div>
    </Container>
  ));

  return (
    <Container size={804} px={0}>
      <Title title='명도소송 유형' />
      <Space h={mobile ? 20 : 36} />
      <Text size={mobile ? 16 : 20} align='center' className={lineHeight150}>
        명도소송은 임차인이 임대료를 내지 않거나
        {mobile && <br />}
        계약이 종료된 후에도 퇴거하지 않는 등의 경우에
        <br />
        {!mobile && '임대인이 임차인을 상대로'} 인도 또는 퇴거를 구하는
        소송입니다.{' '}
      </Text>
      <Space h={mobile ? 50 : 60} />
      <Group position='center' spacing={24}>
        {items}
      </Group>
    </Container>
  );
}
