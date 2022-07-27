import { Text, Space } from '@mantine/core';
import useProcedureStyles from '~/Style/page/Process/useProcedureStyles';
import Sticker from './Sticker';

export default function StickerList({ procedureList }) {
  const { classes, theme } = useProcedureStyles();
  const { font18 } = classes;
  const { colors } = theme;
  const items = procedureList.map(
    (sticker, idx) => {
      if (sticker.subtitle && sticker.gradation) {
        return (
          <Sticker key={idx} icon>
            <Text weight={700} className={font18}>
              {sticker.title}
            </Text>
            <Space h={7} />
            <Text size='sm'>{sticker.subtitle}</Text>
          </Sticker>
        );
      }
      if (sticker.subtitle && sticker.gradation === false) {
        return (
          <Sticker key={idx}>
            <Text weight={700} className={font18}>
              {sticker.title}
            </Text>
            <Space h={7} />
            <Text size='sm' color={colors.blue[0]}>
              {sticker.subtitle}
            </Text>
          </Sticker>
        );
      }
      if (sticker.gradation) {
        return (
          <Sticker key={idx} icon>
            <Text weight={500} className={font18}>
              {sticker.title}
            </Text>
          </Sticker>
        );
      } else {
        return (
          <Sticker key={idx}>
            <Text weight={500} className={font18}>
              {sticker.title}
            </Text>
          </Sticker>
        );
      }
    }
    // sticker.subtitle && sticker.gradation ? (
    //   <Sticker icon>
    //     <Text weight={700} className={font18}>
    //       {sticker.title}
    //     </Text>
    //     <Space h={7} />
    //     <Text size='sm' color={colors.blue[0]}>
    //       {sticker.subtitle}
    //     </Text>
    //   </Sticker>
    // ) : sticker.gradation ? (
    //   <Sticker icon>
    //     <Text weight={500} className={font18}>
    //       {sticker.title}
    //     </Text>
    //   </Sticker>
    // ) : (
    //   <Sticker>
    //     <Text weight={500} className={font18}>
    //       {sticker.title}
    //     </Text>
    //   </Sticker>
    // )
  );

  return <>{items}</>;
}
