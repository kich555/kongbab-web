import { Image, Text, Space, Group } from '@mantine/core';
import Kakao from '~/asset/icon/Kakao';
import useFooterStyles from '~/Style/components/useFooterStyles';
import KakaoSvg from '~/asset/icon/Kakao.svg';

export default function CompanyInfo() {
  const { classes, theme } = useFooterStyles();
  const { lineHeight150, flexRow, menuItem, link } = classes;
  const { colors, white } = theme;
  return (
    <div>
      <Space h={50} />
      <Text size='sm' color={white} weight={700}>
        법률사무소 이소
      </Text>
      <Space h={15} />
      <Text size='sm' color={colors.gray[3]} className={lineHeight150}>
        대표 김서영 | 서울 강남구 테헤란로2길 27, 11층 (역삼동) |광고책임변호사
        김서영
        <br />
        사업자등록번호 770-31-00160 | 통신판매업 2016-서울서초-1999호
        <Space h={15} />
        <Group spacing={10}>
          <Kakao />
          <Image src={KakaoSvg} />
        </Group>
        <Space h={17} />
        <Group spacing={20}>
          <ul className={flexRow}>
            <li className={menuItem}>
              <a
                className={link}
                href='https://congbab.notion.site/2022-08-01-6ba190142b8845ec9cdcc2e290941e4b'
                target='_blank'
                rel='noreferrer noopener'
              >
                개인정보처리방침
              </a>
            </li>
            <li className={menuItem}>
              <a
                className={link}
                href='https://congbab.notion.site/2022-08-01-2dc692457f604414ae79a6076e43789e'
                target='_blank'
                rel='noreferrer noopener'
              >
                면책약관
              </a>
            </li>
          </ul>
          © 2016-2022. ESO LAW. All rights reserved.
        </Group>
      </Text>
    </div>
  );
}