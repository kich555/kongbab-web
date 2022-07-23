import useTitleStyles from '~/Style/component/useTitleStyles';

export default function Title({ title, style }) {
  const { classes } = useTitleStyles();
  const { section } = classes;

  return (
    <section style={style} className={section}>
      {title}
    </section>
  );
}
