import { Center, Container, Text } from '@mantine/core';
import usePriceInfoListStyles from '~/Style/page/Pricing/usePriceInfoListStyles';
import PriceInfo from './PriceInfo';

export default function PriceInfoContainer({ plans }) {
  const { classes, theme } = usePriceInfoListStyles();
  const { colors } = theme;
  const {
    wrapper,
    list,
    another,
    box,
    title,
    listTitle,
    anotherTitle,
    anotherDesc,
    notification,
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
    <Container size={1080} className={wrapper}>
      <div style={{ display: 'flex' }}>
        <div className={list}>
          <Center className={`${title} ${listTitle}`}>
            <Text size='md' color='white' weight={700}>
              차임 연체 (주택, 상가)
            </Text>{' '}
          </Center>
          <ul className={box}>{items}</ul>
        </div>
        <div className={`${list} ${another}`}>
          <Center className={`${title} ${anotherTitle}`}>
            <Text size='md' color='white' weight={700}>
              그 외 부동산
            </Text>{' '}
          </Center>
          <Center style={{ flexDirection: 'column', height: '100%' }}>
            <Text size='lg' weight={700}>
              별도 문의
            </Text>
            <Text size='sm' color={colors['blue'][3]} className={anotherDesc}>
              기타 사유, 특수한 건물, 토지와 같은 부동산은 상담 후 견적을
              받아보세요.{' '}
            </Text>
          </Center>
        </div>
      </div>
      <Text size='sm' className={notification}>
        수임료 외 인지대, 송달료, 집행신청비용, 보증보험료가 발생합니다.
        소송목적물가액에 따라 달라지나, 평균 30-50만원 내외입니다. 명도소송의
        강제집행은 별도 요금이 부과됩니다.
      </Text>
    </Container>
  );
}
