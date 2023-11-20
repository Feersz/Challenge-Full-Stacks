// styles.js
import { styled } from '@mui/system';
import ImageList from '@mui/material/ImageList';
import TextField from '@mui/material/TextField';
import Modal from '@mui/material/Modal';

export const StyledImageList = styled(ImageList)({
  width: '100%',
  margin: 'auto',
});

export const StyledTextField = styled(TextField)({
  width: '100%',
  marginTop: '8vh',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  '& label': {
    textAlign: 'center',
    width: '100%',
    transition: 'margin-top 0.3s',
    color: 'white', // Color del texto de la etiqueta
  },
  
  '&:focus-within label': {
    marginLeft: '160px',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: 'white', // Color del borde
    },
    '&:hover fieldset': {
      borderColor: 'white', // Color del borde al pasar el mouse
    },
    '&.Mui-focused fieldset': {
      borderColor: 'white', // Color del borde cuando está enfocado
    },
  },
});
  
  
  
  

export const StyledModal = styled(Modal)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  outline: 'none',
  '& img': {
    maxWidth: '100%',
    maxHeight: '100%',
  },
  [theme.breakpoints.up('md')]: {
    '& img': {
      maxWidth: '80%',
      maxHeight: '80%',
    },
  },
  '& .centered-content': {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
  },
}));
