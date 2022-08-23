import { Text, Space, Group, Anchor, useMantineTheme } from '@mantine/core';
import Kakao from '~/asset/icon/Kakao';
import Naver from '~/asset/icon/Naver';
import useAddKakaoChannel from '~/hooks/useAddKakaoChannel';
import MultiLineText from '~/components/common/CustomMantine/MultiLineText';

export default function CompanyInfo() {
  const { addKakaoChannel } = useAddKakaoChannel();
  const theme = useMantineTheme();
  const { white, colors } = theme;

  return (
    <div>
      <Space h={50} />
      <Text size='sm' color={white} weight={700}>
        법률사무소 이소
      </Text>
      <Space h={15} />
      <MultiLineText size='sm' color={colors.gray[4]}>
        대표변호사 김서영 | 서울 강남구 테헤란로2길 27, 패스트파이브 빌딩 11층
        (역삼동) | 광고책임변호사 김서영
        <br />
        사업자등록번호 770-31-00160 | 통신판매업 2016-서울서초-1999호
        <Space h={15} />
        <Group spacing={10}>
          <Anchor
            component='button'
            type='button'
            onClick={addKakaoChannel}
            sx={{ height: '40px' }}
          >
            <Kakao />
          </Anchor>
          <Anchor
            href='https://blog.naver.com/PostList.naver?blogId=congbablaw&widgetTypeCall=true&categoryNo=1&directAccess=true'
            target='_blank'
            rel='noreferrer'
            sx={{ height: '40px' }}
          >
            <Naver />
          </Anchor>
        </Group>
        <Space h={17} />
        <Group spacing={20}>
          <div>
            <Text
              component='a'
              weight={500}
              href='https://congbab.notion.site/2022-08-01-6ba190142b8845ec9cdcc2e290941e4b'
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
              href='https://congbab.notion.site/2022-08-01-2dc692457f604414ae79a6076e43789e'
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
