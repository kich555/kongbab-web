import { Container, Group, Space, Text } from '@mantine/core';
import parse from 'html-react-parser';
import MAIN_CONSTANTS from '~/constants/page/mainPageData';
import useResponsive from '~/hooks/useResponsive';
import useMainCardSectionStyles from '~/Style/page/Main/useMainCardSectionStyles';
import MainCard from './MainCard';
import MainLargeCard from './MainLargeCard';

export default function MainCardSection() {
  const { CARD_SECTION } = MAIN_CONSTANTS;
  const { classes, theme, cx } = useMainCardSectionStyles();
  const { lineHeight150 } = classes;
  const { colors } = theme;

  const items = CARD_SECTION.slice(0, 2).map((item, idx) => (
    <MainCard
      key={parse(item.title)}
      subTitle={parse(item.subTitle)}
      title={parse(item.title)}
      idx={idx}
    />
  ));
  const { mobile } = useResponsive();

  return (
    <section>
      <Space h={mobile ? 70 : 150} />
      <Text size={mobile ? 16 : 20} align='center' color={colors.gray[3]}>
        새로운 명도소송의 시작
      </Text>
      <Space h={mobile ? 20 : 36} />
      <Text
        size={mobile ? 24 : 40}
        align='center'
        weight={700}
        className={cx({ [lineHeight150]: mobile })}
      >
        빠르고 간편한 소송을 위한,
        {mobile && <br />}
        법률서비스
      </Text>
      <Space h={mobile ? 30 : 100} />
      <Container px={mobile ? 15 : 0}>
        <Group spacing={24}>{items}</Group>
        <Space h={24} />
        <MainLargeCard
          subTitle={parse(CARD_SECTION[2].subTitle)}
          title={parse(CARD_SECTION[2].title)}
          desc={parse(CARD_SECTION[2].desc)}
        />
      </Container>
      <Space h={mobile ? 50 : 150} />
    </section>
  );
}
