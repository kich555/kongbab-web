import { createStyles } from '@mantine/core';

const useFormBoxStyles = createStyles((theme) => ({
  inputWrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    maxWidth: '436px',
    height: '50px',
    padding: '17px, 20px',
    border: '1px solid #EEEEEE',
    borderRadius: '8px',
    backgroundColor: theme.white,
    color: theme.black,
    '&:hover': {
      border: '1px solid #000000 !important',
    },
  },

  errorBorder: {
    border: '1px solid #FF0000',
  },
  textInput: {
    width: '100%',
    height: '18px',
    // margin: '15px 0 ',
    marginLeft: '20px',
    border: 'none',
    backgroundColor: 'inherit',
    '&:focus': {
      outline: 'none',
    },
  },

  fileInput: {
    maxWidth: '436px',
    width: '100%',
    backgroundColor: theme.colors.gray[0],
  },

  submmit: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '50px',

    textAlign: 'center',
    backgroundColor: theme.colors[theme.primaryColor],
    color: theme.white,
    fontWeight: 700,
  },
  button: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100px',
    height: '50px',
    border: '1px solid #EEEEEE',
    backgroundColor: 'white',
    color: theme.black,
    '&:hover': {
      backgroundColor: theme.colors.gray[0],
    },
  },

  listWrapper: {
    width: '100%',
  },
  icon: {
    marginRight: '16px',
    cursor: 'pointer',
  },

  input: {
    width: '20px',
    height: '20px',
    marginRight: '8px',
    border: '1px solid #EEEEEE',
    borderRadius: '6px',
    backgroundColor: '#FFFFFF',
    accentColor: theme.black,
  },

  label: {
    height: '20px',
    display: 'flex',
    alignItems: 'end',
  },
  anchor: {
    color: '#3787E4',
  },

  error: {
    marginTop: '10px',
    color: theme.colors.red[0],
  },
}));

export default useFormBoxStyles;
