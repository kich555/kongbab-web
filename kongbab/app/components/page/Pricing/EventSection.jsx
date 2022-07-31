import { Container, Text, Center, Space } from '@mantine/core';
import useEventSectionStyles from '~/Style/page/Pricing/useEventSectionStyles';
import DefaultButton from '~/components/common/DefaultButton';
import useResponsive from '~/hooks/useResponsive';

export default function EventSection(params) {
  const { classes, theme } = useEventSectionStyles();
  const { colors } = theme;
  const { horizontal, warpper, font30, buttonWrapper, sticker } = classes;
  const { tablet } = useResponsive();
  return (
    <>
      <section className={horizontal}>
        <Space h={tablet ? 60 : 150} />
        <Container className={warpper}>
          <Space h={tablet ? 10 : 8} />
          <Text color={colors.blue[0]} weight={700}>
            콩밥이 당신의 부동산을 지켜드립니다
          </Text>
          <Space h={tablet ? 15 : 19} />
          <Text className={font30} weight={700}>
            2번째부터 10% 할인된 요금으로 만나세요.
          </Text>
          <Space h={tablet ? 30 : 38} />
          <div className={buttonWrapper}>
            <DefaultButton
              label='10% 할인 받기'
              sx={(theme) => ({
                backgroundColor: theme.colors.gray[0],
              })}
            />
            {tablet ? <Space h={15} /> : <Space w={20} />}
            <Text size='sm' color={colors.blue[0]} className={sticker}>
              베이직 요금 제외, 부동산 명의자 기준
            </Text>
          </div>
        </Container>
      </section>
    </>
  );
}
