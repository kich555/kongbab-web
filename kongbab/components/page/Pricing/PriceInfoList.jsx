import { Center, Space, Text, Group } from '@mantine/core';
import usePriceInfoListStyles from '~/Style/page/Pricing/usePriceInfoListStyles';
import PriceInfo from './PriceInfo';

export default function PriceInfoList({ plans }) {
  const { classes, theme, cx } = usePriceInfoListStyles();
  const { colors } = theme;
  const { maxWidth } = classes;
  const {
    list,
    another,
    box,
    title,
    listTitle,
    anotherTitle,
    anotherDesc,
    lineHeight150,
  } = classes;

  const items = plans.map((plan) => (
    <PriceInfo
      key={plan.title}
      title={plan.title}
      price={plan.price}
      options={plan.options}
    />
  ));

  const itemList = (
    <div className={list}>
      <Center className={cx(title, listTitle)}>
        <Text size='md' color='white' weight={700}>
          차임 연체 (주택, 상가)
        </Text>{' '}
      </Center>
      <ul className={box}>{items}</ul>
    </div>
  );

  const otherItem = (
    <div className={cx(list, another)}>
      <Center className={cx(title, anotherTitle)}>
        <Text size='md' color='white' weight={700}>
          그 외 부동산
        </Text>{' '}
      </Center>
      <Center style={{ flexDirection: 'column', height: '100%' }}>
        <Text size='lg' weight={700}>
          별도 문의
        </Text>
        <Space h={24} />
        <Text
          size='sm'
          align='center'
          color={colors['blue'][3]}
          className={cx(anotherDesc, lineHeight150)}
        >
          기타 사유, 특수한 건물, 토지와 같은 부동산은 상담 후 견적을
          받아보세요.
        </Text>
      </Center>
    </div>
  );

  return (
    <>
      <Space h={80} />
      <Group spacing={6} className={maxWidth}>
        {itemList}
        {otherItem}
      </Group>
    </>
  );
}
