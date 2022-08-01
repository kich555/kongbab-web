import { Text, Space, Group } from '@mantine/core';
import useProcedureStyles from '~/Style/page/Process/useProcedureStyles';
import StickerList from '~/components/page/Process/Procedure/Sticker/StickerList';

export default function Procedure({ procedureForm }) {
  const { title, desc, condition, procedureList, badgeContent } = procedureForm;
  const { classes, theme } = useProcedureStyles();
  const { lineHeight150, badge, badgeWrapper, maxWidth } = classes;
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
          <Text size='sm' weight={700} color={colors.gray[3]}>
            {condition}
          </Text>
        </>
      )}
      <Space h={29} />
      <Group position='center' spacing={24} className={maxWidth}>
        <StickerList procedureList={procedureList} />
      </Group>
    </>
  );
}
