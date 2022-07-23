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
    </Container>
  );
}
