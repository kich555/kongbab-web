import { Form } from '@remix-run/react';
import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import {
  Space,
  Text,
  FileButton,
  Button,
  Checkbox,
  List,
  Anchor,
  Group,
  Center,
} from '@mantine/core';
import useFormBoxStyles from '~/Style/page/Main/useFormBoxStyles';
import Garbage from '~/asset/icon/Garbage';
import { redirect } from '@remix-run/node';

export const action = async ({ request }) => {
  return new Response(null, {
    status: 302,
    headers: {
      Location: '/md/home',
    },
  });
};

export default function FormBox() {
  const form = useRef();
  const [files, setFiles] = useState([]);
  const [isChecked, setIsChecked] = useState(false);
  const { classes, theme, cx } = useFormBoxStyles();
  const {
    error,
    inputWrapper,
    input,
    fileInput,
    label,
    textInput,
    button,
    submmit,
  } = classes;
  const { colors } = theme;

  return (
    // <Form method='post' ref={form} key='consult'>
    <Form action='/md/home' method='post'>
      <label>
        <Text size='md' weight={500}>
          이름
        </Text>
        <Space h={10} />
        <div className={inputWrapper}>
          <input
            type='text'
            name='name'
            placeholder='김임차'
            className={textInput}
          />
        </div>
        {/* {errors?.slug ? (
        <em className='text-red-600'>{errors.slug}</em>
      ) : null} */}
      </label>

      <Space h={35} />

      <label>
        <Text size='md' weight={500} component='div'>
          휴대폰 번호{' '}
          <Text size='md' color={colors.gray[3]} weight={500} component='span'>
            (숫자만 입력)
          </Text>
        </Text>
        <Space h={10} />
        <div className={inputWrapper}>
          <input
            type='number'
            name='phoneNumber'
            placeholder='01012345678'
            className={textInput}
          />
        </div>
        {/* {errors?.slug ? (
        <em className='text-red-600'>{errors.slug}</em>
      ) : null} */}
      </label>

      <Space h={35} />

      <label>
        <Text size='md' weight={500} component='div'>
          임대차 계약서{' '}
          <Text size='md' color={colors.gray[3]} weight={500} component='span'>
            (선택)
          </Text>
        </Text>
        <Space h={10} />
        <FileButton
          // name='files'
          onChange={setFiles}
          accept='image/png,image/jpeg'
          multiple
        >
          {(props) => (
            <Button radius='md' {...props} className={button}>
              파일 첨부
            </Button>
          )}
        </FileButton>
        {/* {errors?.slug ? (
        <em className='text-red-600'>{errors.slug}</em>
      ) : null} */}
      </label>

      <List size='sm' mt={5}>
        <Group spacing={10}>
          {files.map((file, index) => (
            <List.Item key={index}>
              <div className={cx(inputWrapper, fileInput)}>
                <input className={textInput} value={file.name} disabled />
                <Garbage style={{ marginRight: '16px' }} />
              </div>
            </List.Item>
          ))}
        </Group>
      </List>

      <Space h={35} />
      <Checkbox
        onChange={(e) => setIsChecked(e.currentTarget.checked)}
        checked={isChecked}
        value={isChecked}
        label={
          <>
            (필수){' '}
            <Anchor
              size='md'
              href='https://mantine.dev'
              target='_blank'
              color='#3787E4'
            >
              개인정보 처리방침
            </Anchor>{' '}
            동의
          </>
        }
        size='md'
        color='black'
        classNames={{ input, label }}
      />
      <Space h={42} />
      <Button type='submit' radius='md' className={submmit}>
        카톡 상담신청
      </Button>
    </Form>
  );
}
