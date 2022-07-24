import { Text, Divider } from '@mantine/core';
import CheckIcon from '~/asset/icon/CheckIcon';
import usePriceInfo from '~/Style/page/Pricing/usePriceInfoStyles';

export default function PriceInfo({ title, price, options }) {
  const { classes, theme } = usePriceInfo();
  const { box, list, listItem, marginTop20 } = classes;
  const { colors } = theme;

  const optionList = options.map((option) => {
    if (option === '') {
      return (
        <li key={option} className={listItem}>
          {' '}
        </li>
      );
    }
    if (option.includes('법원출석')) {
      const firstWord = option.split(' ')[0];
      const secondWord = option.split(' ')[1];
      return (
        <li key={option} className={listItem}>
          <CheckIcon style={{ marginRight: '15px' }} />
          <Text weight={700} component='span'>
            {firstWord}
          </Text>{' '}
          {secondWord}
        </li>
      );
    }
    return (
      <li key={option} className={listItem}>
        <CheckIcon style={{ marginRight: '15px' }} />
        {option}
      </li>
    );
  });

  console.log('optionList', optionList);
  return (
    <li className={box}>
      <Text size='lg' weight={700}>
        {title}
      </Text>
      <div className={marginTop20}>
        <Text size='lg' weight={700} component='span'>
          {price}
        </Text>
        <Text size='sm' component='span'>
          {' '}
          만원
        </Text>
      </div>
      <Text size='xs' color={colors['blue'][3]} className={marginTop20}>
        카드 결제 가능, 부가세 별도
      </Text>
      <Divider
        my='sm'
        style={{
          marginTop: '20px',
          marginBottom: '20px',
          borderTopColor: '#EDF0F4',
        }}
      />
      <ul className={list}>{optionList}</ul>
    </li>
  );
}
