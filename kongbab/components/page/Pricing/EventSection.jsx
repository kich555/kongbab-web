import { Container, Text, Center } from '@mantine/core';
import useEventSectionStyles from '~/Style/page/Pricing/useEventSectionStyles';
import DefaultButton from '../../DefaultButton';

export default function EventSection(params) {
  const { classes, theme } = useEventSectionStyles();
  const { colors } = theme;
  const { warpper, title, buttonWrapper } = classes;
  return (
    <Container className={warpper}>
      <Text color={colors['green'][2]} weight={700}>
        콩밥이 당신의 부동산을 지켜드립니다
      </Text>
      <Text className={title} weight={700}>
        2번째부터 10% 할인된 요금으로 만나세요.
      </Text>
      <div className={buttonWrapper}>
        <DefaultButton
          label='10% 할인 받기'
          sx={(theme) => ({
            backgroundColor: theme.colors.green[1],
          })}
        />
        <Center style={{ marginLeft: '20px' }}>
          <Text size='sm' color={colors['green'][0]}>
            베이직 요금 제외, 부동산 명의자 기준
          </Text>
        </Center>
      </div>
    </Container>
  );
}
