import { Container, Group, Space } from '@mantine/core';
import Title from '~/components/common/Title';
import useResponsive from '~/hooks/useResponsive';
import ProblemCard from './ProblemCard';

export default function ProblemSection({ problems }) {
  const items = problems.map((problem, idx) => (
    <ProblemCard
      key={problem.title}
      idx={idx}
      title={problem.title}
      desc={problem.desc}
      advantage={problem.advantage}
    />
  ));

  const { mobile } = useResponsive();
  return (
    <section style={{ backgroundColor: '#F7F7F7' }}>
      <Container px={mobile ? 26 : 0}>
        <Space h={30} />
        <Title title='콩밥이 해결하고 싶은 문제' />
        <Space h={100} />
        <Group spacing={24} style={{ justifyContent: 'center' }}>
          {items}
        </Group>
        <Space h={mobile ? 70 : 150} />
      </Container>
    </section>
  );
}
