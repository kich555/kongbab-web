import { createStyles } from '@mantine/core';

const useFormBoxStyles = createStyles((theme) => ({
  inputWrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '17px, 20px',
    border: '1px solid #EEEEEE',
    borderRadius: '8px',
    backgroundColor: theme.white,
    color: theme.black,
    '&:hover': {
      border: '1px solid #000000 !important',
    },
  },
  textInput: {
    height: '18px',
    margin: '15px 0 ',
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

  input: {
    // width: '20px',
    // height: '20px',
    border: '1px solid #EEEEEE',
    borderRadius: '6px',
    // backgroundColor: '#FFFFFF',
  },

  label: {
    paddingLeft: '8px',
    lineHeight: '100%',
  },

  error: {
    marginTop: '10px',
    color: theme.colors[theme.primaryColor],
  },
}));

export default useFormBoxStyles;
