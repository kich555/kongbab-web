import { Text, Space, Group } from '@mantine/core';
import useProcedureStyles from '~/Style/page/Process/useProcedureStyles';

import StickerList from './Sticker/StickerList';

export default function Procedure({ procedureForm }) {
  const { title, desc, condition, procedureList, badgeContent } = procedureForm;
  const { classes, theme } = useProcedureStyles();
  const { lineHeight150, badge, badgeWrapper } = classes;
  const { colors } = theme;
  return (
    <>
      <div className={badgeWrapper}>
        <Text size='lg' component='span' weight={700}>
          {title}
        </Text>
        {badgeContent && <span className={badge}>{badgeContent}</span>}
      </div>
      <Space h={24} />
      <Text size='sm' className={lineHeight150}>
        {desc}
      </Text>
      {condition && (
        <>
          <Space h={15} />
          <Text size='sm' weight={700} color={colors.blue[0]}>
            {condition}
          </Text>
        </>
      )}
      <Space h={29} />
      <Group position='center' spacing={24}>
        <StickerList procedureList={procedureList} />
      </Group>
    </>
  );
}
