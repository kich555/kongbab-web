import { Button, Text } from '@mantine/core';
import useDefaultButtonStyles from '../app/Style/component/useDefaultButtonStyles';

export default function DefaultButton({ backgroundColor, className, label }) {
  const { classes } = useDefaultButtonStyles();
  const { defaultBtn } = classes;
  return (
    <Button
      sx={(theme) => ({
        backgroundColor,
      })}
      variant='filled'
      radius={8}
      className={`${defaultBtn} ${className}`}
    >
      <Text weight={700}>{label}</Text>
    </Button>
  );
}
