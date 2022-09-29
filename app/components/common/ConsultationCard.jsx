import useConsultationCardStyles from '~/Style/components/useConsultationCardStyles';
import { Center, Container, Space } from '@mantine/core';
import DefaultButton from '~/components/common/DefaultButton';
import useResponsive from '~/hooks/useResponsive';

export default function ConsultationCard({ asset, children }) {
  const { classes } = useConsultationCardStyles();
  const { warpper, center, button } = classes;
  const { mobile } = useResponsive();
  return (
    <>
      <Space h={mobile ? 80 : 200} />
      <Container
        sx={{
          backgroundImage: `url(${asset})`,
          background: `url(${asset}) no-repeat center/cover`,
        }}
        className={warpper}
      >
        <Center className={center}>
          {children}
          <DefaultButton
            className={button}
            sx={(theme) => ({
              backgroundColor: theme.white,
            })}
            label='카톡 상담신청'
          />
        </Center>
      </Container>
      <Space h={mobile ? 100 : 200} />
    </>
  );
}
