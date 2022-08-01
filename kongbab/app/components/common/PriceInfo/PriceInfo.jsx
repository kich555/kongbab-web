import { Text, Divider, Space, MediaQuery } from '@mantine/core';

import CheckIcon from '~/asset/icon/CheckIcon';
import useResponsive from '~/hooks/useResponsive';
import usePriceInfo from '~/Style/components/PriceInfo/usePriceInfoStyles';

export default function PriceInfo({ subTitle, title, price, options }) {
  const { classes, theme, cx } = usePriceInfo();
  const {
    header,
    box,
    deskTopBox,
    subTitleTextBox,
    titleText,
    list,
    listItem,
    row,
  } = classes;
  const { colors, primaryColor } = theme;
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
      if (firstWord === '본인') {
        return (
          <>
            <li>
              <div key={idx} className={listItem}>
                <CheckIcon />
                <Space w={15} />
                <Text weight={700} component='span'>
                  {firstWord}{' '}
                </Text>
                <Space w={4} />
                {secondWord}
              </div>
              <Space h={8} />
              <div className={row}>
                <Space w={29} />
                <Text size='xs' color={colors.gray[3]}>
                  통상 1-2회 출석 필요합니다.
                  <br />
                  콩밥에서 법정 출석 가이드를 제공합니다.
                </Text>
              </div>
            </li>
            <Space h={15} />
          </>
        );
      }
      return (
        <li key={idx} className={listItem}>
          <CheckIcon />
          <Space w={15} />
          <Text weight={700} component='span'>
            {firstWord}
          </Text>
          <Space w={4} />
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
        <Text
          size='sm'
          weight={700}
          color={colors[primaryColor]}
          className={subTitleTextBox}
        >
          {subTitle}
        </Text>
        <Space h={12} />
        <Text weight={700} className={titleText}>
          {title}
        </Text>
        <Space h={22} />
        <Text size='lg' weight={700}>
          {price}
          <Text size='sm' component='span'>
            {' '}
            만원
          </Text>
        </Text>
        <Space h={30} />

        <Divider
          my='sm'
          style={{
            borderTopColor: colors.gray[1],
          }}
        />
        <Space h={20} />
        <ul className={list}>{optionList}</ul>
      </li>
    </MediaQuery>
  );
}
