import MainThirdSection from '~/components/page/Main/MainThirdSection';
import CommonFooterSection from '~/components/common/CommonFooterSection';
import MainSecondSection from '~/components/page/Main/MainSecondSection';
import MainHeader from '~/components/page/Main/MainHeader';
import ConsultationForm from '~/components/page/Main/ConsultationForm';

import { showNotification } from '@mantine/notifications';
import { Form, useLoaderData, useCatch } from '@remix-run/react';
import { useState, useRef, useEffect } from 'react';
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
} from '@mantine/core';
import useFormBoxStyles from '~/Style/page/Main/useFormBoxStyles';
import Garbage from '~/asset/icon/Garbage';
import useResponsive from '~/hooks/useResponsive';

export default function Home() {
  const form = useRef();
  const [files, setFiles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [errorStatus, setErrorStatus] = useState('');
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

  // const { EMAIL_JS_ID, EMAIL_JS_TEMPLETE_ID, EMAIL_JS_PUBLIC_KEY } = ENV;

  const sendEmail = async (e) => {
    setIsLoading(true);
    e.preventDefault();
    showNotification({
      id: 'load-data',
      loading: true,
      title: '상담신청 접수중..',
      message: '현재 상담신청을 접수중에 있습니다.',
      autoClose: false,
      disallowClose: true,
    });

    try {
      const res = await emailjs.sendForm(
        'service_q63us0l',
        'template_5ecee0u',
        form.current,
        'rlshOywZSsoBrngBN'
      );
      console.log('res', res);
      setIsLoading(false);
      showNotification({
        title: '상담신청이 접수되었습니다.',
      });
    } catch (e) {
      console.log(e);
      setIsLoading(false);
      showNotification({
        title: '신청 접수가 실패하였습니다.',
        message: '다시 시도해주시기 바랍니다.',
        color: 'red',
      });
    }
  };
  const { mobile } = useResponsive();
  return (
    <>
      <MainHeader />
      <MainSecondSection />
      <MainThirdSection />
      {!mobile && (
        <ConsultationForm>
          <>
            <Form
              method='post'
              ref={form}
              encType='multipart/form-data'
              onSubmit={sendEmail}
            >
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
                    className={cx(textInput, error)}
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
                  <Text
                    size='md'
                    color={colors.gray[3]}
                    weight={500}
                    component='span'
                  >
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
                  <Text
                    size='md'
                    color={colors.gray[3]}
                    weight={500}
                    component='span'
                  >
                    (선택)
                  </Text>
                </Text>
                <Space h={10} />
                <FileButton
                  name='files'
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
                        <input
                          className={textInput}
                          value={file.name}
                          disabled
                        />
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
              <Button
                type='submit'
                radius='md'
                name='intent'
                disabled={isLoading}
                loading={isLoading}
                className={submmit}
              >
                카톡 상담신청
              </Button>
            </Form>
          </>
        </ConsultationForm>
      )}
      <CommonFooterSection />
    </>
  );
}

export function ErrorBoundary({ error }) {
  console.error('error', error);

  return <div>An unexpected error occurred: {error.text}</div>;
}

export function CatchBoundary() {
  const caught = useCatch();
  console.log('caught--->', caught);
  if (caught.status === 413) {
    return <div>Note not found</div>;
  }

  throw new Error(`Unexpected caught response with status: ${caught.status}`);
}
