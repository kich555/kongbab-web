import parse from 'html-react-parser';
import { Text, Space, Group } from '@mantine/core';
import useProcedureStyles from '~/styles/page/Process/useProcedureStyles';
import StickerList from '~/components/page/Process/Procedure/Sticker/StickerList';
import MultiLineText from '~/components/common/CustomMantine/MultiLineText';

export default function Procedure({ procedureForm }) {
  const { title, desc, condition, procedureList, badgeContent } = procedureForm;
  const { classes, theme } = useProcedureStyles();
  const { badge, badgeWrapper, maxWidth, descBox } = classes;
  const { colors } = theme;

  return (
    <>
      <div className={badgeWrapper}>
        <Text size='lg' component='span' weight={700}>
          {title}
        </Text>
        {badgeContent && (
          <>
            <Text
              component='span'
              size='xs'
              color={colors.magenta[0]}
              weight={600}
              className={badge}
            >
              {badgeContent}
            </Text>
          </>
        )}
      </div>
      <Space h={24} />
      <MultiLineText size='sm' sx={{ height: '63px' }}>
        {parse(desc)}
      </MultiLineText>
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
