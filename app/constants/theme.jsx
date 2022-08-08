const BASIC_THEME = {
  components: {
    Container: {
      defaultProps: {
        size: 1080,
      },
    },
  },

  fontFamily: 'Pretendard',
  lineHeight: '100%',
  black: '#000000',
  breakpoints: {
    lg: 1132,
    md: 974,
    sm: 764,
    xs: 375,
  },
  fontSizes: {
    xs: '12px',
    sm: '14px',
    md: '16px',
    lg: '24px',
    xl: '36px',
  },
  colors: {
    carrot: '#FF4500',
    red: ['#FF0000'],
    dark: ['#040000', '#000000'],
    gray: ['#F7F7F7', '#EEEEEE', '#DADADA', '#666666'],
    blue: ['#364B60', '#B8C8D5', '#EDF2FB', '#93A4B4', '#6F8396', '#0A1C2D'],
    green: ['#075554', '#4BC5C3', '#3EAEAD', '#EFFAFA'],
    magenta: ['#6F2D44', '#FDE9F0'],
  },

  primaryColor: 'carrot',
};

export default BASIC_THEME;
