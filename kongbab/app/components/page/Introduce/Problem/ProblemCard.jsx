import { Image, Space, Text, Center } from '@mantine/core';
import parse from 'html-react-parser';
import ProblemArrow from '~/asset/icon/ProblemArrow';
import useProblemCardStyles from '~/Style/page/Introduce/Problem/useProblemCardStyles';

import ProblemImage1 from '~/asset/image/Problem/Problem_Image1.png';
import ProblemImage2 from '~/asset/image/Problem/Problem_Image2.png';
import ProblemImage3 from '~/asset/image/Problem/Problem_Image3.png';

export default function ProblemCard({ title, desc, advantage, idx }) {
  const arr = [ProblemImage1, ProblemImage2, ProblemImage3];
  const { classes, cx, theme } = useProblemCardStyles();
  const { white } = theme;
  const { wrapper, inner, footer, font20, font30, lineHeight150 } = classes;

  return (
    <div className={wrapper}>
      <div className={inner}>
        <Image src={arr[idx]} width={280} alt='problem-card' />
        <Space h={41} />
        <Text align='center' weight={700} className={font30}>
          {title}
        </Text>
        <Space h={20} />
        <Text align='center' className={cx(font20, lineHeight150)}>
          {parse(desc)}
        </Text>
        <Space h={30} />
        <Center>
          <ProblemArrow />
        </Center>
        <Space h={37} />
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
