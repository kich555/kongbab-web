import { Card, Image, Space, Text } from '@mantine/core';
import useResponsive from '~/hooks/useResponsive';
import useBlogCardStyles from '~/Style/page/Blog/useBlogCardStyles';

export default function BlogCard({ imageSrc, link, category, title, desc }) {
  const { classes, theme } = useBlogCardStyles();
  const { card, cardSection, image, descText } = classes;
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
        {/* <a {...linkProps}> */}
        <Image
          alt={`thumbnail-${title}`}
          src={imageSrc}
          styles={{ image }}
          width={mobile ? 322 : 344}
        />
        {/* </a> */}
      </Card.Section>
      <div>
        <Space h={18} />
        <Text color={colors[theme.primaryColor]} size='sm'>
          {category}
        </Text>
        <Space h={mobile ? 8 : 12} />
        <Text size={20} {...linkProps} component='a' weight={500} lineClamp={2}>
          {title}
        </Text>
        {!mobile && <Space h={18} />}
        <Text
          size='sm'
          color={colors.gray[3]}
          lineClamp={2}
          className={descText}
        >
          {desc}
        </Text>
      </div>
    </Card>
  );
}
