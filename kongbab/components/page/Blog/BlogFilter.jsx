import { Group } from '@mantine/core';
import useBlogFilterStyles from '~/Style/page/Blog/useBlogFilterStyles';

export default function BlogFilter({ options, setActive, active }) {
  const { classes, cx } = useBlogFilterStyles();
  const { category, categoryActive } = classes;
  const items = options.map((option) => (
    <div
      key={option}
      className={cx(category, { [categoryActive]: active === option })}
      onClick={(e) => {
        e.preventDefault();
        setActive(option);
      }}
    >
      {option}
    </div>
  ));

  return (
    <Group style={{ marginTop: '80px' }} spacing={10}>
      {items}
    </Group>
  );
}
