import { Text, Divider, Space, MediaQuery } from '@mantine/core';

import CheckIcon from '~/asset/icon/CheckIcon';
import useResponsive from '~/hooks/useResponsive';
import usePriceInfo from '~/Style/page/Pricing/usePriceInfoStyles';

export default function PriceInfo({ title, price, options }) {
  const { classes, theme, cx } = usePriceInfo();
  const { header, box, deskTopBox, list, listItem } = classes;
  const { colors } = theme;
  const { mobile, tablet } = useResponsive();

  const optionList = options.map((option, idx) => {
    if (option === '') {
      if (mobile) return null;
      return (
        <li key={idx} className={listItem}>
          {' '}
        </li>
      );
    }

    if (option.includes('법원출석')) {
      const firstWord = option.split(' ')[0];
      const secondWord = option.split(' ')[1];
      return (
        <li key={idx} className={listItem}>
          <CheckIcon />
          <Space w={15} />
          <Text weight={700} component='span'>
            {firstWord}
          </Text>{' '}
          {secondWord}
        </li>
      );
    }
    return (
      <li key={idx} className={listItem}>
        <CheckIcon />
        <Space w={15} />
        {option}
      </li>
    );
  });

  const mobileBox = {
    maxWidth: '325px',
    padding: '45px 40px 25px 40px',
    borderRadius: '20px',
    boxShadow: '0 4px 10px rgba(54, 75, 96, 0.05)',
  };

  return (
    <MediaQuery smallerThan='md' styles={mobileBox}>
      <li className={cx(box, deskTopBox)}>
        <div className={header} />
        {tablet && <Space h={30} />}
        <Text size='lg' weight={700}>
          {title}
        </Text>
        <Space h={20} />
        <Text size='lg' weight={700}>
          {price}
          <Text size='sm' component='span'>
            {' '}
            만원
          </Text>
        </Text>
        <Space h={20} />
        <Text size='xs' color={colors.blue[3]}>
          카드 결제 가능, 부가세 별도
        </Text>
        <Space h={8} />
        <Divider
          my='sm'
          style={{
            borderTopColor: '#EDF0F4',
          }}
        />
        <Space h={8} />
        <ul className={list}>{optionList}</ul>
      </li>
    </MediaQuery>
  );
}
