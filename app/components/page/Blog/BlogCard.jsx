import { Card, Image, Text } from '@mantine/core';
import useResponsive from '~/hooks/useResponsive';
import useBlogCardStyles from '~/Style/page/Blog/useBlogCardStyles';

export default function BlogCard({ imageSrc, link, category, title, desc }) {
const { classes, theme } = useBlogCardStyles();
  const {
    card,
    cardSection,
    image,

    titleText,
    descText,
    content,
  } = classes;
  const { colors, fn } = theme;
  const linkProps = {
    href: link,
    target: '_blank',
    rel: 'noopener noreferrer',
  };
  const { mobile } = useResponsive();
  return (
    <Card className={card}>
      <Card.Section className={cardSection}>
        <a {...linkProps}>
          <Image src={imageSrc} styles={{ image }} width={mobile ? 324 : 344} />
        </a>
      </Card.Section>
      <div className={content}>
        <Text color={colors[theme.primaryColor]} size='sm'>
          {category}
        </Text>
        <div className={titleText}>
          <Text
            className={titleText}
            {...linkProps}
            component='a'
            weight={500}
            lineClamp={2}
          >
            {title}
          </Text>
        </div>
        <Text
          className={descText}
          size='sm'
          color={colors.gray[3]}
          lineClamp={2}
        >
          {desc}
        </Text>
      </div>
    </Card>
  );
}
