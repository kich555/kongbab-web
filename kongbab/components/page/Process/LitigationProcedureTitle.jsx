import { Container, Center, Badge, Group, Text } from '@mantine/core';
import { Logo } from '../../Logo';

export default function LitigationProcedureTitle() {
  return (
    <Container>
      <Center style={{ position: 'relative', paddingTop: '120px' }}>
        <Text size='xl' weight={700}>
          소송진행 절차
        </Text>
        <Group
          spacing={8}
          style={{
            position: 'absolute',
            right: 0,
          }}
        >
          <Badge
            size='xl'
            variant='outline'
            style={{ border: '1px solid #CBD1D8' }}
          >
            <Text size='sm'>고객님 진행</Text>
          </Badge>
          <Badge
            size='xl'
            variant='gradient'
            gradient={{ from: '#FF4545', to: '#FF9D66', deg: 90 }}
          >
            <Text size='sm' component='span'>
              콩밥 변호사
            </Text>
            <Logo width={12} variant='white' style={{ marginLeft: '7px' }} />
          </Badge>
        </Group>
      </Center>
    </Container>
  );
}
