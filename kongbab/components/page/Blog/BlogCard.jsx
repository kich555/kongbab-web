import useBlogCardStyles from '~/Style/page/Blog/useBlogCardStyles';
import { Card, Image, Text } from '@mantine/core';

export default function BlogCard({ image, link, category, title, desc }) {
  const { classes, theme } = useBlogCardStyles();
  const {
    card,
    cardSection,
    imageBackground,
    categoryText,
    titleText,
    descText,
    content,
  } = classes;
  const { colors } = theme;
  const linkProps = {
    href: link,
    target: '_blank',
    rel: 'noopener noreferrer',
  };

  return (
    <Card className={card}>
      <Card.Section className={cardSection}>
        <a {...linkProps}>
          <Image className={imageBackground} src={image} height={175} />
        </a>
      </Card.Section>
      <div className={content}>
        <Text
          className={categoryText}
          color={colors[theme.primaryColor]}
          size='xs'
        >
          {category}
        </Text>
        <div className={titleText}>
          <Text className={titleText} {...linkProps} component='a' weight={500}>
            {title}
          </Text>
        </div>
        <Text
          className={descText}
          size='sm'
          color={colors['blue'][0]}
          lineClamp={2}
        >
          {desc}
        </Text>
      </div>
    </Card>
  );
}
