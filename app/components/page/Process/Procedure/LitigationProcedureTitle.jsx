import {
  Container,
  Center,
  Badge,
  Group,
  Text,
  Space,
  Box,
} from '@mantine/core';
import useResponsive from '~/hooks/useResponsive';
import useLitigationProcedureTitleStyles from '~/Style/page/Process/useLitigationProcedureTitleStyles';
import { Logo } from '~/asset/icon/Logo';

export default function LitigationProcedureTitle() {
  const { classes, theme } = useLitigationProcedureTitleStyles();
  const { colors, primaryColor } = theme;
  const { titleWrapper, group } = classes;
  const { mobile } = useResponsive();

  return (
    <Container>
      <Space h={mobile ? 100 : 200} />
      <Center className={titleWrapper}>
        <Text size={mobile ? 28 : 36} weight={700}>
          소송진행 절차
        </Text>
        {mobile && <Space h={30} />}
        <Group spacing={mobile ? 12 : 8} className={group}>
          <Badge
            size='xl'
            variant='outline'
            sx={{ border: '1px solid #DADADA' }}
          >
            <Text size='sm'>고객님 진행</Text>
          </Badge>
          <Badge
            size='xl'
            variant='outline'
            sx={{ border: '1px solid #FF4500' }}
          >
            <Text component='span' size='sm' color={colors[primaryColor]}>
              콩밥 변호사
            </Text>
            <Box
              component={Logo}
              variant='default'
              width={12}
              sx={{ marginLeft: '7px' }}
            />
          </Badge>
        </Group>
      </Center>
    </Container>
  );
}
