import { Space, Text, Center } from '@mantine/core';
import parse from 'html-react-parser';
import ProblemArrow from '~/asset/icon/ProblemArrow';
import useProblemCardStyles from '~/Style/page/Introduce/Problem/useProblemCardStyles';

import ProblemImage1 from '~/asset/image/Introduce/ProblemImage1';
import ProblemImage2 from '~/asset/image/Introduce/ProblemImage2';
import ProblemImage3 from '~/asset/image/Introduce/ProblemImage3';
import useResponsive from '~/hooks/useResponsive';

export default function ProblemCard({ title, desc, advantage, idx }) {
  const arr = [
    <ProblemImage1 key='profileImage_1' />,
    <ProblemImage2 key='profileImage_2' />,
    <ProblemImage3 key='profileImage_3' />,
  ];
  const { classes, cx, theme } = useProblemCardStyles();
  const { white } = theme;
  const { wrapper, inner, footer, font20, font30, lineHeight150 } = classes;
  const { mobile } = useResponsive();
  return (
    <div className={wrapper}>
      <div className={inner}>
        <Center>{arr[idx]}</Center>
        <Space h={mobile ? 25 : 41} />
        <Text align='center' weight={700} className={font30}>
          {title}
        </Text>
        <Space h={mobile ? 26 : 20} />
        <Text align='center' className={cx(font20, lineHeight150)}>
          {parse(desc)}
        </Text>
        <Space h={mobile ? 25 : 30} />
        <Center>
          <ProblemArrow />
        </Center>
        <Space h={mobile ? 26 : 36} />
      </div>
      <div className={footer}>
        <Text
          color={white}
          align='center'
          weight={700}
          className={cx(font30, lineHeight150)}
        >
          {parse(advantage)}
        </Text>
      </div>
    </div>
  );
}
