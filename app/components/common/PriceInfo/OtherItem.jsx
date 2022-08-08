import { Center, Space, Text } from '@mantine/core';
import useOtherItemStyles from '~/Style/components/PriceInfo/useOtherItemStyles';
import useResponsive from '~/hooks/useResponsive';

export default function OtherItem() {
  const { classes, theme } = useOtherItemStyles();
  const { wrapper, inner, title, desc } = classes;
  const { colors } = theme;
  const { tablet } = useResponsive();
  return (
    <div className={wrapper}>
      <Center className={title}>
        <Text size='md' color='white' weight={700}>
          그 외 부동산
        </Text>{' '}
      </Center>
      <Center className={inner}>
        <div>
          <Text size='lg' weight={700} align='center'>
            별도 문의
          </Text>
          <Space h={24} />
          <Text
            size='sm'
            align='center'
            color={colors.gray[3]}
            className={desc}
          >
            기타 사유, 특수한 건물, 토지와 같은 부동산은 상담 후 견적을
            받아보세요.
          </Text>
        </div>
      </Center>
    </div>
  );
}
