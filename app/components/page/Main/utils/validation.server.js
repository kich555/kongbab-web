export const validateName = (name) => {
    if (typeof name !== 'string' || name.length === 0) {
        return '이름을 입력해 주세요';
      }
    return '';
}

export const validatePhoneNumber = (phoneNumber) => {
    if (typeof phoneNumber !== 'string' || phoneNumber.length === 0) {
        return '전화번호를 입력해 주세요';
      }
    if(phoneNumber.length < 11) {
        return '전화번호를 확인해 주세요';
    }
    return '';
}

