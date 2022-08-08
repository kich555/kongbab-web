import { useCallback } from 'react';

export default function useAddKakaoChannel(params) {
  // const channelId = '_eXERxj';
  const channelId = '_xhhXIxj';
  const addChannel = useCallback(() => {
    const isBrowser = !!window;
    if (!isBrowser) return;
    const { Kakao } = window;
    Kakao?.Channel.createChatButton({
      channelPublicId: channelId, // Kakao Channel 홈 URL에 명시된 id로 설정
    });
  }, [channelId]);

  return { addChannel };
}
