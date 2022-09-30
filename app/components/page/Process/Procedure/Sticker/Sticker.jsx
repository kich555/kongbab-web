import { Badge, Text } from '@mantine/core';
import useStickerStyles from '~/styles/components/useStickerStyles';
import { Logo } from '~/asset/icon/Logo';

export default function Sticker({ children, icon }) {
  const { classes, cx, theme } = useStickerStyles();
  const { warpper, basic, outline, miniIcon, basicFont } = classes;
  const { white, black, colors, primaryColor } = theme;

  const sticker = icon ? (
    <Badge className={cx(warpper, outline)} variant='outline'>
      <Text
        align='center'
        className={basicFont}
        color={colors[primaryColor]}
        weight={500}
      >
        {children}
      </Text>
      <Logo className={miniIcon} width={24} variant='default' />
    </Badge>
  ) : (
    <Badge className={cx(warpper, basic)} variant='filled'>
      <Text align='center' className={basicFont} color={black} weight={500}>
        {children}
      </Text>
    </Badge>
  );

  return <>{sticker}</>;
}
