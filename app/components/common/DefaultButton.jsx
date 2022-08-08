import { Button, Text } from '@mantine/core';
import useDefaultButtonStyles from '~/Style/components/useDefaultButtonStyles';

export default function DefaultButton({ className = '', label, sx }) {
  const { classes, cx } = useDefaultButtonStyles();
  const { defaultBtn } = classes;
  return (
    <Button
      sx={sx}
      variant='filled'
      radius={8}
      className={cx(defaultBtn, className)}
    >
      <Text weight={700}>{label}</Text>
    </Button>
  );
}
