import {
  Container,
  Image,
  Text,
  Center,
  Space,
  Group,
  Divider,
} from '@mantine/core';
import asset from '~/asset/image/Process_image.png';
import useProcedureStyles from '../../../app/Style/page/Process/useProcedureStyles';
import Sticker from './Sticker';

export default function LitigationProcedure(params) {
  const { classes, theme } = useProcedureStyles();
  const { wrapper } = classes;
  const { colors, black } = theme;
  return (
    <Container size='sm' className={wrapper}>
      <Container size='xs'>
        <Center style={{ flexDirection: 'column', maxWidth: '428px' }}>
          <Text size='lg' weight={700}>
            상담 및 수임 의뢰
          </Text>
          <Space h={24} />
          <Text size='sm' style={{ lineHeight: '150%', textAlign: 'center' }}>
            카카오톡을 통해 상담 후 소송 진행이 가능한 경우 수임 계약을
            맺습니다.
            <br />
            카톡 상담신청
          </Text>
          <Space h={50} />
          <Group position='center' spacing={24}>
            <Sticker>카카오톡 상담</Sticker>
            <Sticker icon>소송 진행 방법 제시</Sticker>
            <Sticker>수임료 결제, 위임장/계약서 전자서명</Sticker>
          </Group>
          <Space h={30} />
        </Center>
      </Container>
      <Center>
        <div className={wrapper}>
          <Divider
            style={{ margin: 'auto' }}
            color={colors.blue[4]}
            variant='dotted'
            orientation='vertical'
            sx={{ height: '60px' }}
          />
        </div>
      </Center>
      <Divider
        style={{ margin: 'auto' }}
        color={colors.blue[4]}
        variant='dotted'
        sx={{ width: '552px' }}
      />
      <Container size={552} px={0}>
        <Center style={{ justifyContent: 'space-between' }}>
          <Divider
            style={{ marginRight: 'auto' }}
            color={colors.blue[4]}
            variant='dotted'
            orientation='vertical'
            sx={{ height: '60px' }}
          />
          <Divider
            style={{ marginLeft: 'auto' }}
            color={colors.blue[4]}
            variant='dotted'
            orientation='vertical'
            sx={{ height: '60px' }}
          />
        </Center>
        <Space h={50} />
      </Container>
      <Container size='sm'>
        <Center style={{ justifyContent: 'space-between' }}>
          <Container
            size='xs'
            px={0}
            style={{ flexGrow: 1, textAlign: 'center', margin: 0 }}
          >
            <Text size='lg' weight={700}>
              부동산점유이전금지 가처분 신청
            </Text>
          </Container>
          <Container
            size='xs'
            px={0}
            style={{ flexGrow: 1, textAlign: 'center', margin: 0 }}
          >
            <Text size='lg' weight={700}>
              소장 제출
            </Text>
          </Container>
        </Center>
      </Container>
      <Container>
        <Space h={40} />
        <Divider size='xs' color='#EDF0F4' />
      </Container>
      <Image src={asset} alt='test' />
      {/* <Sticker>소송 진행 방법 제시</Sticker>
      <Sticker icon>소송 진행 방법 제시</Sticker> */}
    </Container>
  );
}
