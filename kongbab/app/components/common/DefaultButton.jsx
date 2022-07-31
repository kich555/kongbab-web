import { Button, Text } from '@mantine/core';
import useDefaultButtonStyles from '~/Style/components/useDefaultButtonStyles';

export default function DefaultButton({ className = '', label, sx }) {
  const { classes } = useDefaultButtonStyles();
  const { defaultBtn } = classes;
  return (
    <Button
      sx={sx}
      variant='filled'
      radius={8}
      className={`${defaultBtn} ${className}`}
    >
      <Text weight={700}>{label}</Text>
    </Button>
  );
}
