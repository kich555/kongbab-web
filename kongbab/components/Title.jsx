import useTitleStyles from '~/Style/component/useTitleStyles';

export default function Title({ title }) {
  const { classes } = useTitleStyles();
  const { section } = classes;
  return <section className={section}>{title}</section>;
}
