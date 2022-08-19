import { Text, Space, useMantineTheme } from '@mantine/core';
import Sticker from '~/components/page/Process/Procedure/Sticker/Sticker';

export default function StickerList({ procedureList }) {
  const theme = useMantineTheme();
  const { colors } = theme;
  
  const items = procedureList.map((sticker, idx) => {
    if (sticker.subtitle && sticker.gradation) {
      return (
        <Sticker key={idx} icon>
          <Text size={18} weight={500}>
            {sticker.title}
          </Text>
          <Space h={7} />
          <Text size='sm' weight={400}>
            {sticker.subtitle}
          </Text>
        </Sticker>
      );
    }
    if (sticker.subtitle && sticker.gradation === false) {
      return (
        <Sticker key={idx}>
          <Text size={18} weight={500}>
            {sticker.title}
          </Text>
          <Space h={7} />
          <Text size='sm' weight={400} color={colors.gray[3]}>
            {sticker.subtitle}
          </Text>
        </Sticker>
      );
    }
    if (sticker.gradation) {
      return (
        <Sticker key={idx} icon>
          <Text size={18} weight={500}>
            {sticker.title}
          </Text>
        </Sticker>
      );
    } else {
      return (
        <Sticker key={idx}>
          <Text size={18} weight={500}>
            {sticker.title}
          </Text>
        </Sticker>
      );
    }
  });

  return <>{items}</>;
}
