import { Badge, Text } from '@mantine/core';
import useStickerStyles from '~/Style/component/useStickerStyles';
import { Logo } from '../../../../Logo';

export default function Sticker({ children, icon }) {
  const { classes, cx, theme } = useStickerStyles();
  const { warpper, basic, gradient, miniIcon, basicFont } = classes;
  const { white, black } = theme;

  const sticker = icon ? (
    <Badge
      className={cx(warpper, gradient)}
      variant='gradient'
      gradient={{ from: '#FF4545', to: '#FF9D66', deg: 90 }}
    >
      <Text className={basicFont} color={white} weight={500}>
        {children}
      </Text>
      <Logo className={miniIcon} width={24} variant='white' />
    </Badge>
  ) : (
    <Badge className={cx(warpper, basic)} variant='filled'>
      <Text className={basicFont} color={black} weight={500}>
        {children}
      </Text>
    </Badge>
  );

  return <>{sticker}</>;
}
