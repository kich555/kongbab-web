import { Image, Space, Text } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import useAddKakaoChannel from '~/hooks/useAddKakaoChannel';
import CouponClose from '~/asset/icon/CouponClose';
import { Logo } from '~/asset/icon/Logo';
import CouponImage from 'public/image/Coupon/CouponImage.png';
import useCouponStickerStyles from '~/Style/page/Main/useCouponStickerStyles';
import useResponsive from '~/hooks/useResponsive';

export default function CouponSticker() {
  const [opened, handlers] = useDisclosure(true);
  const { classes, theme, cx } = useCouponStickerStyles();
  const { wrapper, inner, closeButton, clicked } = classes;
  const { colors } = theme;

  return (
    <div className={cx(wrapper, { [clicked]: opened === false })}>
      <CouponClose className={closeButton} onClick={handlers.close} />
      <div className={inner}>
        <Image src={CouponImage} width={125} />
        <Space h={17} />
        <Text weight={700} align='center'>
          첫 상담 10% 할인
        </Text>
        <Space h={10} />
        <Text color={colors.gray[3]} size='sm' align='center'>
          상담자 기준
          <br />
          상담 시작일로부터 1년간 사용
        </Text>
      </div>
    </div>
  );
}

export function ConsultButtonSticker() {
  const { mobile } = useResponsive();
  const { addKakaoChannel } = useAddKakaoChannel();
  const { classes, theme } = useCouponStickerStyles();
  const { buttonWrapper } = classes;
  const { white } = theme;

  return (
    <button onClick={addKakaoChannel} className={buttonWrapper}>
      {!mobile && <Logo width={21} variant='white' />}
      <Space w={8} />
      <Text size={mobile ? 'sm' : 'md'} color={white} weight={700}>
        카톡 상담 신청
      </Text>
    </button>
  );
}
