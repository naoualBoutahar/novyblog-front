import { createTheme } from '@mui/material/styles';

// Create a theme instance.
const theme = createTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#7BAFFF',
      light: '#95bdfd',
      dark: '#5679b1',
    },
    secondary: {
      main: '#FF067E',
      light: '#ff3a98',
      dark: '#b90058',
    },
    grey: {
      main: '#AEAEAE',
      dark:'#9b9b9b',
    },
    error: {
      main: '#ff564a',
      light: '#fd7970',
      dark: '#b33930',
    },
    white: '#ffffff',
    background: {
      default: '#FAFAFA',
      paper: '#FAFAFA',
      nav: '#F1F4F8',
    },
    text: {
      main: '#303167',
      primary: '#303167',
      secondary: 'rgba(14,14,14,0.54)',
      disabled: 'rgba(0,0,0,0.35)',
      hint: 'rgba(0,0,0,0.35)',
    },
    common: {
      grey1: '#F8F8F8',
      grey2: '#C3C3C3',
      grey3: '#e5e5e5',
      chip1: '#5E60C6',
    },
    warning: {
      main: '#ff9800',
    },
    info: {
      main: '#7BAFFF',
    },
    success: {
      main: '#41CF7C',
      light: '#6ad898',
      dark: '#2e9659',
    },
    divider: '#DEE2E6',
  },

});

export default theme;
