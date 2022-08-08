import { Container, Center, Badge, Group, Text, Space } from '@mantine/core';
import useResponsive from '~/hooks/useResponsive';
import useProcedureStyles from '~/Style/page/Process/useProcedureStyles';
import { Logo } from '~/components/common/Logo';

export default function LitigationProcedureTitle() {
  const { classes, theme } = useProcedureStyles();
  const { colors, primaryColor } = theme;
  const { titleFont, titleWrapper, group } = classes;
  const { mobile } = useResponsive();
  return (
    <Container>
      <Space h={mobile ? 100 : 200} />
      <Center className={titleWrapper}>
        <Text weight={700} className={titleFont}>
          소송진행 절차
        </Text>
        {mobile && <Space h={30} />}
        <Group spacing={mobile ? 12 : 8} className={group}>
          <Badge
            size='xl'
            variant='outline'
            style={{ border: '1px solid #DADADA' }}
          >
            <Text size='sm'>고객님 진행</Text>
          </Badge>
          <Badge
            size='xl'
            variant='outline'
            style={{ border: '1px solid #FF4500' }}
          >
            <Text color={colors[primaryColor]} size='sm' component='span'>
              콩밥 변호사
            </Text>
            <Logo width={12} variant='default' style={{ marginLeft: '7px' }} />
          </Badge>
        </Group>
      </Center>
    </Container>
  );
}
