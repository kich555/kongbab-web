import { Container, Space, Text } from '@mantine/core';
import { Link } from '@remix-run/react';
import useNotFoundPageStyles from '~/Style/page/useNotFoundPageStyles';
import ErrorIcon from '~/asset/icon/ErrorIcon';

export default function NotFoundPage(params) {
  const { classes, theme, cx } = useNotFoundPageStyles();
  const { wrapper, inner, content, link } = classes;
  const { colors, white } = theme;
  return (
    <main className={wrapper}>
      <Container size='xs' className={inner}>
        <ErrorIcon />
        <Space h={40} />
        <Text align='center' weight={500} className={content}>
          요청하신 페이지를 찾을 수 없거나
          <br />
          예기치 못한 오류가 발생하였습니다
        </Text>
        <Space h={60} />
        <Link to='/' className={link}>
          <Text color={white} weight={500}>
            홈으로 이동
          </Text>
        </Link>
      </Container>
    </main>
  );
}
