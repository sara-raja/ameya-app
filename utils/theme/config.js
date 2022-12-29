import { createTheme } from '@mui/material';

const themeOptions = {
    palette: {
        type: 'light',
        primary: {
          main: '#1F1769',
          light: '#1F1769',
          dark: '#1F1769',
        },
        secondary: {
          main: '#f50057',
        },
        text: {
          primary: '#1F1769',
          secondary: '#8F5FCA',
          disabled: '#EEEDF6',
        },
        divider: '#EEEDF6',
      },
    typography: {
        fontFamily:'Cabin'
      },
  };
  
  const theme = createTheme(themeOptions);
//   const theme = createTheme({});
  
  export { theme }