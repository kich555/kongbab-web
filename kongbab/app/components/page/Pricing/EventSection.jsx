import { Container, Text, Center, Space, Image } from '@mantine/core';
import useEventSectionStyles from '~/Style/page/Pricing/useEventSectionStyles';
import DefaultButton from '~/components/common/DefaultButton';
import useResponsive from '~/hooks/useResponsive';
import bannerSrc from '~/asset/image/Pricing_middle_banner_Image.png';
export default function EventSection(params) {
  const { classes, theme } = useEventSectionStyles();
  const { colors, primaryColor } = theme;
  const { horizontal, warpper, font30, buttonWrapper, imageBox } = classes;
  const { tablet } = useResponsive();
  return (
    <>
      <section className={horizontal}>
        <Space h={tablet ? 60 : 150} />
        <Container className={warpper}>
          <div>
            <Space h={tablet ? 10 : 8} />
            <Text color={colors.gray[3]} weight={700}>
              콩밥이 당신의 부동산을 지켜드립니다
            </Text>
            <Space h={tablet ? 15 : 19} />
            <Text className={font30} weight={700}>
              첫 상담, 10% 할인 쿠폰을 드립니다
            </Text>
            <Space h={tablet ? 30 : 38} />
            <div className={buttonWrapper}>
              <DefaultButton
                label='10% 할인 받기'
                sx={(theme) => ({
                  backgroundColor: colors[primaryColor],
                })}
              />
            </div>
          </div>
          <Image src={bannerSrc} className={imageBox} />
        </Container>
        {tablet ? <Space h={15} /> : <Space w={20} />}
      </section>
    </>
  );
}
