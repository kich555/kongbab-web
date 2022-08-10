import { Text, MediaQuery, useMantineTheme } from '@mantine/core';
import asset from '~/asset/image/FAQ_image.png';
import ConsultationCard from '~/components/common/ConsultationCard';

export default function FAQConsultationSection(params) {
  const theme = useMantineTheme();
  const { white } = theme;
  return (
    <MediaQuery smallerThan='sm' styles={{ display: 'none' }}>
      <div>
        <ConsultationCard asset={asset}>
          <Text
            style={{
              textAlign: 'center',
              fontSize: '30px',
              lineHeight: '150%',
            }}
            color={white}
            weight={700}
          >
            아직 망설여지나요?
            <br />
            상담은 언제나 환영합니다.
          </Text>
        </ConsultationCard>
      </div>
    </MediaQuery>
  );
}
