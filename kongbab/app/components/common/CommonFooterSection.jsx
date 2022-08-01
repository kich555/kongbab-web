import { Text, Space, Center } from '@mantine/core';
import DefaultButton from '~/components/common/DefaultButton';
import useCommonFooterSectionStyles from '~/Style/components/useCommonFooterSectionStyles';

export default function CommonFooterSection(params) {
  const { classes, theme } = useCommonFooterSectionStyles();
  const { wrapper, subTitle } = classes;
  const { colors, white } = theme;
  return (
    <section className={wrapper}>
      <div>
        <Space h={160} />
        <Text align='center' color={white} weight={700} className={subTitle}>
          보증금이 모두 소진되기 전에
        </Text>
        <Space h={20} />
        <Text size='xl' color={white} align='center' weight={700}>
          더이상 참지 말고 콩밥에 맡기세요
        </Text>
        <Space h={60} />
        <Center>
          <DefaultButton
            label='카톡 상담 신청'
            sx={(theme) => ({
              backgroundColor: theme.white,
              color: theme.black,
            })}
          />
        </Center>
        <Space h={25} />
        <Text size='sm' align='center' color={colors.gray[3]}>
          자세한 상담을 위해 임대차 계약서를 준비해 주세요
        </Text>
        <Space h={90} />
      </div>
    </section>
  );
}
