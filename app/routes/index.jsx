import MainThirdSection from '~/components/page/Main/MainThirdSection';
import CommonFooterSection from '~/components/common/CommonFooterSection';
import MainCardSection from '~/components/page/Main/MainCardSection';
import MainHeader from '~/components/page/Main/MainHeader';
import ConsultationForm from '~/components/page/Main/ConsultationForm';
import { ConsultButtonSticker } from '~/components/page/Main/CouponSticker';
import { showNotification } from '@mantine/notifications';
import { useActionData, useCatch, useTransition } from '@remix-run/react';
import useResponsive from '~/hooks/useResponsive';
import { redirect } from '@remix-run/node';
import {
  validateName,
  validatePhoneNumber,
} from '~/components/page/Main/utils/validation.server';
import { badRequest } from '~/utils/actionHandler';
import axios from 'axios';

export async function action({ request }) {
  const formData = await request.formData();
  const { ...fields } = Object.fromEntries(formData);
  const { name, phoneNumber } = fields;

  const fieldErrors = {
    name: validateName(name),
    phoneNumber: validatePhoneNumber(phoneNumber),
  };

  const arrayedObj = Object.values(fieldErrors);
  if (arrayedObj.some(Boolean)) {
    return badRequest({ fieldErrors, fields });
  }

  await axios.post(
    'https://api.emailjs.com/api/v1.0/email/send',
    {
      service_id: 'service_vqi5s6p',
      template_id: 'template_ffvwc5c',
      user_id: 'hgNgqPqkkAgqBYwjb',
      template_params: { name: 'name', phoneNumber: 'phoneNumber' },
      accessToken: 'YYG_7bM6IxrcOC2D7xlw-',
    },
    { headers: { 'X-Requested-With': 'XMLHttpRequest' }, withCredentials: true }
  );

  return redirect('/');
  // return redirect('/md/home');
}

export default function Home() {
  const actionData = useActionData();
  const transition = useTransition();
  let isPosting = transition.state === 'submitting';
  let isLoading = transition.state === 'loading';

  const { mobile } = useResponsive();

  return (
    <>
      <>
        {/* <CouponSticker /> */}
        <ConsultButtonSticker />
      </>
      <MainHeader />
      <MainCardSection />
      <MainThirdSection />
      {!mobile && (
        <ConsultationForm
          actionData={actionData}
          isPosting={isPosting}
          isLoading={isLoading}
        />
      )}
      <CommonFooterSection />
    </>
  );
}

export function ErrorBoundary({ error }) {
  console.error('error', error);
  showNotification({
    title: '신청 접수가 실패하였습니다.',
    message: '다시 시도해주시기 바랍니다.',
    color: 'red',
    autoClose: 3000,
  });
  return <div>An unexpected error occurred: {error.text}</div>;
}

export function CatchBoundary() {
  const caught = useCatch();
  console.log('caught--->', caught);
  if (caught.status === 404) {
    return <div>Note not found</div>;
  }
  showNotification({
    title: '신청 접수가 실패하였습니다.',
    message: '다시 시도해주시기 바랍니다.',
    color: 'red',
    autoClose: 3000,
  });
  throw new Error(`Unexpected caught response with status: ${caught.status}`);
}
