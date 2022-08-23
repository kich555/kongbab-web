import { Group, Anchor } from '@mantine/core';
import Kakao from '~/asset/icon/Kakao';
import Naver from '~/asset/icon/Naver';
import useAddKakaoChannel from '~/hooks/useAddKakaoChannel';

export default function SNSGroup() {
  const { addKakaoChannel } = useAddKakaoChannel();
  return (
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
  );
}
