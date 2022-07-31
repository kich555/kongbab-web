import { Text, Center, Space, Group } from '@mantine/core';
import useResponsive from '~/hooks/useResponsive';
import Arrow from '~/asset/icon/procedure/Arrow';
import useProcedureStyles from '~/Style/page/Process/useProcedureStyles';
import StickerList from '~/components/page/Process/Procedure/Sticker/StickerList';

export default function Consultation({ procedureForm }) {
  const { classes, cx } = useProcedureStyles();
  const { centerColumn, lineHeight150, pointer } = classes;
  const { title, desc, link, procedureList } = procedureForm;
  const { mobile } = useResponsive();

  const handleClick = () => {
    console.log('window', window.Kakao);
    window.Kakao.Channel.addChannel({
      channelPublicId: '_eXERxj',
    });
  };
  return (
    <Center className={centerColumn}>
      <Text size='lg' weight={700}>
        {title}
      </Text>
      <Space h={mobile ? 15 : 24} />
      <Text size='sm' className={lineHeight150}>
        {desc}
      </Text>
      <Space h={4} />
      <Text
        onClick={handleClick}
        component='button'
        href='#'
        size='sm'
        className={cx(lineHeight150, pointer)}
      >
        {link}
      </Text>

      <Space h={mobile ? 40 : 50} />
      <Group position='center' spacing={24}>
        <StickerList procedureList={procedureList} />
      </Group>
      {mobile ? <Arrow /> : <Space h={30} />}
    </Center>
  );
}
