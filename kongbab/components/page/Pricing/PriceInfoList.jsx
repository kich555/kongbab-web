import { Center, Container, Group, Space, Text } from '@mantine/core';
import usePriceInfoListStyles from '~/Style/page/Pricing/usePriceInfoListStyles';
import PriceInfo from './PriceInfo';
import Title from 'components/Title';

export default function PriceInfoList({ plans }) {
  const { classes, theme, cx } = usePriceInfoListStyles();
  const { colors } = theme;
  const {
    wrapper,
    listWrapper,
    list,
    another,
    box,
    title,
    listTitle,
    anotherTitle,
    anotherDesc,
    lineHeight150,
    footer,
  } = classes;
  const items = plans.map((plan) => (
    <PriceInfo
      key={plan.title}
      title={plan.title}
      price={plan.price}
      options={plan.options}
    />
  ));

  return (
    <Container className={wrapper}>
      <Title title='요금 안내' />
      <Space h={80} />
      <Group spacing={6}>
        <div className={list}>
          <Center className={cx(title, listTitle)}>
            <Text size='md' color='white' weight={700}>
              차임 연체 (주택, 상가)
            </Text>{' '}
          </Center>
          <ul className={box}>{items}</ul>
        </div>
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
      </Group>
      <Space h={30} />
      <Text size='sm' align='left' className={cx(footer, lineHeight150)}>
        * 수임료 외 인지대, 송달료, 집행신청비용, 보증보험료가 발생합니다.
        소송목적물가액에 따라 달라지나, 평균 30-50만원 내외입니다.
        <br />* 명도소송의 강제집행은 별도 요금이 부과됩니다.
      </Text>
    </Container>
  );
}
