import { Form } from '@remix-run/react';
import { useEffect, useState } from 'react';
import { Space, Text, Button, Anchor } from '@mantine/core';
import useFormBoxStyles from '~/Style/page/Main/useFormBoxStyles';

import { showNotification, updateNotification } from '@mantine/notifications';

export default function FormBox({ actionData, isPosting, isLoading }) {
  const [isChecked, setIsChecked] = useState(false);
  const { classes, theme, cx } = useFormBoxStyles();
  const { inputWrapper, input, label, textInput, anchor, errorBorder, button } =
    classes;
  const { colors } = theme;

  useEffect(() => {
    if (isPosting) {
      showNotification({
        id: 'load-data',
        loading: isPosting,
        title: '상담신청 접수중..',
        message: '현재 상담신청을 접수중에 있습니다.',
        autoClose: false,
        disallowClose: true,
      });
    }
    if (!actionData?.fieldErrors && isLoading) {
      updateNotification({
        id: 'load-data',
        color: 'teal',
        title: '접수 완료',
        message: '상담신청이 접수되었습니다.',
        autoClose: 2000,
      });
    }
    if (actionData?.fieldErrors) {
      updateNotification({
        id: 'load-data',
        color: 'red',
        title: '접수 오류',
        message: '접수가 반려되었습니다.',
        autoClose: 2000,
      });
    }
  }, [isPosting, isLoading, actionData]);

  return (
    <Form method='post'>
      <label htmlFor='name-input'>
        <Text size='md' weight={500}>
          이름
        </Text>
        <Space h={10} />
        <div
          className={cx(inputWrapper, {
            [errorBorder]: actionData?.fieldErrors?.name,
          })}
        >
          <input
            id='name-input'
            type='text'
            name='name'
            placeholder='이름을 입력해 주세요'
            defaultValue={actionData?.fields?.name}
            aria-label='name'
            aria-invalid={Boolean(actionData?.fieldErrors?.name)}
            className={textInput}
          />
        </div>
        {actionData?.fieldErrors?.name && (
          <>
            <Space h={10} />
            <Text size='sm' color={colors.red[0]} component='em'>
              {actionData?.fieldErrors?.name}
            </Text>
          </>
        )}
      </label>

      <Space h={35} />

      <label htmlFor='phoneNumber-input'>
        <Text size='md' weight={500} component='div'>
          휴대폰 번호{' '}
          <Text size='md' color={colors.gray[3]} weight={500} component='span'>
            (숫자만 입력)
          </Text>
        </Text>
        <Space h={10} />
        <div
          className={cx(inputWrapper, {
            [errorBorder]: actionData?.fieldErrors?.phoneNumber,
          })}
        >
          <input
            id='phoneNumber-input'
            type='number'
            name='phoneNumber'
            placeholder='01012345678'
            defaultValue={actionData?.fields?.phoneNumber}
            aria-label='phoneNumber'
            aria-invalid={Boolean(actionData?.fieldErrors?.phoneNumber)}
            className={textInput}
          />
        </div>
        {actionData?.fieldErrors?.phoneNumber && (
          <>
            <Space h={10} />
            <Text size='sm' color={colors.red[0]} component='em'>
              {actionData?.fieldErrors?.phoneNumber}
            </Text>
          </>
        )}
      </label>
      <Space h={50} />
      <label htmlFor='checkbox-input' className={label}>
        <input
          id='checkbox-input'
          type='checkbox'
          name='isAgree'
          value={isChecked}
          aria-label='agree-checkbox'
          aria-invalid={isChecked}
          className={input}
          onChange={() => setIsChecked((checked) => !checked)}
        />
        <span>
          (필수){' '}
          <Anchor
            size='md'
            href='https://congbab.notion.site/2022-08-01-6ba190142b8845ec9cdcc2e290941e4b'
            target='_blank'
            className={anchor}
            rel='noreferrer'
          >
            개인정보 처리방침
          </Anchor>{' '}
          동의
        </span>
      </label>

      <Space h={30} />
      <Button
        type='submit'
        radius='md'
        loading={isPosting}
        disabled={isPosting || !isChecked}
        className={button}
        sx={{
          '&[data-disabled]': { opacity: 0.4, cursor: 'notAllowed' },
          '&[data-loading]': { backgroundColor: 'red', cursor: 'notAllowed' },
        }}
      >
        {isPosting ? '이메일 전송 중..' : '카톡 상담신청'}
      </Button>
    </Form>
  );
}
