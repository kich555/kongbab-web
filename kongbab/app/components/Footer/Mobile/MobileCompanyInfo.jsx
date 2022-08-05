import { Text, Space, Group } from '@mantine/core';

import useFooterStyles from '~/Style/components/useFooterStyles';

export default function MobileCompanyInfo() {
  const { classes, theme } = useFooterStyles();
  const { lineHeight150, flexRow, menuItem } = classes;
  const { colors, white } = theme;
  return (
    <div>
      <Space h={45} />
      <Text size='sm' color={white} weight={700}>
        법률사무소 이소
      </Text>
      <Space h={20} />
      <Text size='sm' color={colors.gray[3]} className={lineHeight150}>
        대표 김서영
        <br />
        서울 강남구 테헤란로2길 27, 11층 (역삼동)
        <br />
        광고책임변호사 김서영
        <br />
        사업자등록번호 770-31-00160
        <br />
        통신판매업 2016-서울서초-1999호
        <Space h={20} />
        <Group spacing={20}>
          <ul className={flexRow}>
            <li className={menuItem}>개인정보처리방침</li>
            <li className={menuItem}>면책약관</li>
          </ul>
          © 2016-2022. ESO LAW. All rights reserved.
        </Group>
      </Text>
    </div>
  );
}
