import { Text, Center, Space, Group } from '@mantine/core';
import useResponsive from '~/hooks/useResponsive';
import Arrow from '~/asset/icon/procedure/Arrow';
import useProcedureStyles from '~/Style/page/Process/useProcedureStyles';
import StickerList from '~/components/page/Process/Procedure/Sticker/StickerList';
import useAddKakaoChannel from '~/hooks/useAddKakaoChannel';

export default function Consultation({ procedureForm }) {
  const { classes, cx } = useProcedureStyles();
  const { centerColumn, lineHeight150, pointer } = classes;
  const { title, desc, link, procedureList } = procedureForm;
  const { mobile } = useResponsive();

  // const handleClick = () => {
  //   console.log('window', window.Kakao);
  //   window.Kakao.Channel.addChannel({
  //     channelPublicId: '_eXERxj',
  //   });
  // };

  const { addKakaoChannel } = useAddKakaoChannel();
  return (
    <div className={centerColumn}>
      <Text size='lg' weight={700}>
        {title}
      </Text>
      <Space h={mobile ? 15 : 24} />
      <Text size='sm' className={lineHeight150}>
        {desc}
      </Text>
      <Space h={4} />
      <Text
        onClick={addKakaoChannel}
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
    </div>
  );
}
