import { Button, Text } from '@mantine/core';
import useAddKakaoChannel from '~/hooks/useAddKakaoChannel';
import useDefaultButtonStyles from '~/Style/components/useDefaultButtonStyles';

export default function DefaultButton({ className = '', label, sx }) {
  const { addKakaoChannel } = useAddKakaoChannel();
  const { classes, cx } = useDefaultButtonStyles();
  const { defaultBtn } = classes;
  return (
    <Button
      sx={sx}
      variant='filled'
      radius={8}
      className={cx(defaultBtn, className)}
      onClick={addKakaoChannel}
    >
      <Text weight={700}>{label}</Text>
    </Button>
  );
}
