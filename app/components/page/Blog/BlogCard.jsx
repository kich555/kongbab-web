import { Box, Space, Text } from '@mantine/core';
import useResponsive from '~/hooks/useResponsive';
import useBlogCardStyles from '~/styles/page/Blog/useBlogCardStyles';

export default function BlogCard({ imageSrc, link, category, title, desc }) {
  const { classes, theme } = useBlogCardStyles();
  const { card, descText } = classes;
  const { colors } = theme;
  const linkProps = {
    href: link,
    target: '_blank',
    rel: 'noopener noreferrer',
  };
  const { mobile } = useResponsive();
  return (
    <Box component='a' {...linkProps} className={card}>
      <img
        alt={`thumbnail-${title}`}
        src={imageSrc}
        width={mobile ? 324 : 344}
        height='auto'
      />

      <div>
        <Space h={18} />
        <Text color={colors[theme.primaryColor]} size='sm'>
          {category}
        </Text>
        <Space h={mobile ? 8 : 12} />
        <Text size={20} color='black' weight={500} lineClamp={2}>
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
    </Box>
  );
}
