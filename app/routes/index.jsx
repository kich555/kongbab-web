import MainThirdSection from '~/components/page/Main/MainThirdSection';
import CommonFooterSection from '~/components/common/CommonFooterSection';
import MainCardSection from '~/components/page/Main/MainCardSection';
import MainHeader from '~/components/page/Main/MainHeader';
import ConsultationForm from '~/components/page/Main/ConsultationForm';
import CouponSticker, {
  ConsultButtonSticker,
} from '~/components/page/Main/CouponSticker';
import { showNotification } from '@mantine/notifications';
import { Form } from '@remix-run/react';
import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Space, Text, Button, Anchor } from '@mantine/core';
import useFormBoxStyles from '~/Style/page/Main/useFormBoxStyles';
import useResponsive from '~/hooks/useResponsive';
import { redirect } from '@remix-run/node';

export async function action() {
  return redirect('/md/home');
}

export default function Home() {
  const form = useRef();
  const nameRef = useRef();
  const phoneNumberRef = useRef();
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [errorStatus, setErrorStatus] = useState({ name: '', phoneNumber: '' });
  const [isChecked, setIsChecked] = useState(false);
  const { classes, theme, cx } = useFormBoxStyles();
  const {
    error,
    inputWrapper,
    input,
    fileInput,
    label,
    textInput,
    listWrapper,
    anchor,
    icon,
    button,
    errorBorder,
    submmit,
  } = classes;
  const { colors } = theme;

  const handleNameValidate = () => {
    if (nameRef.current.value === '') {
      setIsError(true);
      setErrorStatus((prevErrorStatus) => ({
        ...prevErrorStatus,
        name: '이름을 입력해 주세요.',
      }));
      return;
    }
  };

  const handlePhoneNumberValidate = () => {
    if (phoneNumberRef.current.value === '') {
      setIsError(true);
      setErrorStatus((prevErrorStatus) => ({
        ...prevErrorStatus,
        phoneNumber: '휴대폰 번호를 입력해 주세요.',
      }));
      return;
    }
  };

  const sendEmail = async (e) => {
    handleNameValidate();
    handlePhoneNumberValidate();
    if (nameRef.current.value === '' || phoneNumberRef.current.value === '')
      return null;
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
      <>
        <CouponSticker />
        <ConsultButtonSticker />
      </>
      <MainHeader />
      <MainCardSection />
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
                <div
                  className={cx(inputWrapper, {
                    [errorBorder]: errorStatus?.name,
                  })}
                >
                  <input
                    type='text'
                    name='name'
                    placeholder='이름을 입력해 주세요'
                    ref={nameRef}
                    className={textInput}
                  />
                </div>
                {errorStatus?.name && (
                  <>
                    <Space h={10} />
                    <Text size='sm' color={colors.red[0]} component='em'>
                      {errorStatus.name}
                    </Text>
                  </>
                )}
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
                <div
                  className={cx(inputWrapper, {
                    [errorBorder]: errorStatus?.phoneNumber,
                  })}
                >
                  <input
                    type='number'
                    name='phoneNumber'
                    placeholder='01012345678'
                    ref={phoneNumberRef}
                    className={textInput}
                  />
                </div>
                {errorStatus?.phoneNumber && (
                  <>
                    <Space h={10} />
                    <Text size='sm' color={colors.red[0]} component='em'>
                      {errorStatus.phoneNumber}
                    </Text>
                  </>
                )}
              </label>

              <Space h={50} />

              <label className={label}>
                <input
                  type='checkbox'
                  onChange={(e) => setIsChecked(e.currentTarget.checked)}
                  value={isChecked}
                  className={input}
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
                name='intent'
                disabled={isLoading || !isChecked}
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

// export function ErrorBoundary({ error }) {
//   console.error('error', error);

//   return <div>An unexpected error occurred: {error.text}</div>;
// }

// export function CatchBoundary() {
//   const caught = useCatch();
//   console.log('caught--->', caught);
//   if (caught.status === 404) {
//     return <div>Note not found</div>;
//   }

//   throw new Error(`Unexpected caught response with status: ${caught.status}`);
// }
