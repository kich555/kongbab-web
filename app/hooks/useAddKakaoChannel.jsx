import { useCallback } from 'react';

export default function useAddKakaoChannel() {
  // const channelId = '_eXERxj';
  const channelId = '_eXERxj';

  const addKakaoChannel = useCallback(() => {
    const isBrowser = !!window;
    if (!isBrowser) return;
    const { Kakao } = window;
    Kakao?.Channel.chat({
      channelPublicId: channelId, // Kakao Channel 홈 URL에 명시된 id로 설정
    });
  }, [channelId]);

  return { addKakaoChannel };
}
