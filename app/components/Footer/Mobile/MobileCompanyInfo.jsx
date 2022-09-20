import { Text, Space, Group, useMantineTheme } from '@mantine/core';
import MultiLineText from '~/components/common/CustomMantine/MultiLineText';

export default function MobileCompanyInfo() {
  const theme = useMantineTheme();
  const { white, colors } = theme;

  return (
    <div>
      <Space h={45} />
      <Text size='sm' color={white} weight={700}>
        법률사무소 이소
      </Text>
      <Space h={20} />
      <MultiLineText size='sm' color={colors.gray[4]}>
        대표변호사 김서영
        <br />
        서울 강남구 테헤란로2길 27,
        <br />
        패스트파이브 빌딩 11층 (역삼동)
        <br />
        광고책임변호사 김서영
        <br />
        사업자등록번호 770-31-00160
        <br />
        통신판매업 2016-서울서초-1999호
        <Space h={20} />
        <Group spacing={20}>
          <div>
            <Text
              component='a'
              weight={500}
              href='https://congbablaw.notion.site/2022-08-01-56b78ab071a14253b4dc79eb48089fe1'
              target='_blank'
              rel='noreferrer noopener'
            >
              개인정보처리방침
            </Text>
            <Text component='span' sx={{ padding: '0 6px' }}>
              {' '}
              |{' '}
            </Text>
            <Text
              component='a'
              weight={500}
              href='https://congbablaw.notion.site/2022-08-01-595fbfa7f8a84e2bab2072db545e3d48'
              target='_blank'
              rel='noreferrer noopener'
            >
              면책약관
            </Text>
          </div>
          © 2016-2022. ESO LAW. All rights reserved.
        </Group>
      </MultiLineText>
    </div>
  );
}
