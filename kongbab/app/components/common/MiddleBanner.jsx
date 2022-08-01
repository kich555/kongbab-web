import { Space, Text } from '@mantine/core';

import useMiddleBannerStyles from '~/constants/common/useMiddleBannerStyles';

export default function MiddleBanner({ title, children }) {
  const { classes, theme } = useMiddleBannerStyles();
  const { wrapper, font18, font40 } = classes;
  const { colors, primaryColor, white } = theme;
  return (
    <div className={wrapper}>
      <Space h={100} />
      <Text
        color={colors[primaryColor]}
        align='center'
        weight={700}
        className={font18}
      >
        {title}
      </Text>
      <Space h={24} />
      <Text color={white} align='center' weight={700} className={font40}>
        {children}
      </Text>
      <Space h={100} />
    </div>
  );
}
