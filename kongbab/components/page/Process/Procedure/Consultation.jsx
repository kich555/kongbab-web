import { Container, Text, Center, Space, Group } from '@mantine/core';
import useProcedureStyles from '~/Style/page/Process/useProcedureStyles';
import StickerList from './Sticker/StickerList';

export default function Consultation({ procedureForm }) {
  const { classes, cx } = useProcedureStyles();
  const { centerColumn, lineHeight150, pointer } = classes;
  const { title, desc, link, procedureList } = procedureForm;

  const handleClick = () => {
    console.log('window', window.Kakao);
    window.Kakao.Channel.addChannel({
      channelPublicId: '_eXERxj',
    });
  };
  return (
    <Container size='xs' px={0}>
      <Center className={centerColumn}>
        <Text size='lg' weight={700}>
          {title}
        </Text>
        <Space h={24} />
        <Text size='sm' className={lineHeight150}>
          {desc}
        </Text>
        <Text
          onClick={handleClick}
          component='button'
          href='#'
          size='sm'
          className={cx(lineHeight150, pointer)}
        >
          {link}
        </Text>
        <Space h={50} />
        <Group position='center' spacing={24}>
          <StickerList procedureList={procedureList} />
        </Group>
        <Space h={30} />
      </Center>
    </Container>
  );
}
