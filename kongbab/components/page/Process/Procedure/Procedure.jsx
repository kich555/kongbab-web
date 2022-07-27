import { Text, Space, Group, Badge, Center } from '@mantine/core';
import useProcedureStyles from '~/Style/page/Process/useProcedureStyles';
import Sticker from './Sticker/Sticker';
import StickerList from './Sticker/StickerList';

export default function Procedure({ procedureForm }) {
  const { title, desc, condition, procedureList, badgeContent } = procedureForm;
  const { classes, theme } = useProcedureStyles();
  const { lineHeight150, badge, badgeWrapper } = classes;
  const { colors } = theme;
  return (
    <>
      <div className={badgeWrapper}>
        <Text size='lg' component='span' weight={700}>
          {title}
        </Text>
        {badgeContent && <span className={badge}>{badgeContent}</span>}
      </div>
      <Space h={24} />
      <Text size='sm' className={lineHeight150}>
        {desc}
      </Text>
      {condition && (
        <>
          <Space h={15} />
          <Text size='sm' weight={700} color={colors.blue[0]}>
            {condition}
          </Text>
        </>
      )}
      <Space h={29} />
      <Group position='center' spacing={24}>
        <StickerList procedureList={procedureList} />
        {/* <Sticker>
          <Text weight={700} className={font18}>
            소송 준비
          </Text>
          <Space h={7} />
          <Text size='sm' color={colors.blue[0]}>
            질문지 작성, 계약서 등 증거자료 송부
          </Text>
        </Sticker>
        <Sticker icon>
          <Text weight={500} className={font18}>
            가처분 신청서 작성
          </Text>
        </Sticker>
        <Sticker>
          <Text weight={500} className={font18}>
            가처분 신청서 최종확인 (PDF)
          </Text>
        </Sticker>
        <Sticker icon>
          <Text weight={500} className={font18}>
            법원에 접수
          </Text>
        </Sticker>
        <Sticker icon>
          <Text weight={500} className={font18}>
            소가 계산, 결제방법 전달
          </Text>
        </Sticker>
        <Sticker>
          <Text weight={700} className={font18}>
            인지송달료 결제
          </Text>
          <Space h={7} />
          <Text size='sm' color={colors.blue[0]}>
            법원에 직접 납부
          </Text>
        </Sticker>
        <Sticker icon>
          <Text weight={500} className={font18}>
            가처분 신청완료
          </Text>
        </Sticker> */}
      </Group>
    </>
  );
}
