'use client';
import { common } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

const greenPalette = {
  green: '#4CAF50',
  darkGreen: '#388E3C', 
  lightGreen: '#81C784',  // светлый зеленый для акцентов
  background: '#F5F5F5', // светлый фон (практически белый)
  surface: '#FFFFFF',    // белые поверхности
  white: '#FFFFFF',
  black: '#000000',
  grey: '#9E9E9E', 
  divider: '#BDBDBD',    // светлый серый для разделителей
};

const minimalistGreenTheme = createTheme({
  palette: {
    primary: {
      dark: greenPalette.darkGreen,
      light: greenPalette.lightGreen,
      main: greenPalette.green,
    },
    secondary: {
      main: greenPalette.green,
    },
    background: {
      default: greenPalette.background,
      paper: greenPalette.surface,
    },
    text: {
      primary: greenPalette.white,
      secondary: greenPalette.black,
    },
    divider: greenPalette.divider,
  },
  typography: {
    fontFamily: 'var(--font-ubuntu)',
    h1: {
      fontWeight: 600,
      fontSize: '2.25rem',
      letterSpacing: '0.5px',
    },
    h2: {
      fontWeight: 600,
      fontSize: '1.75rem',
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.5,
    },
    button: {
      fontWeight: 500,
      textTransform: 'none',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '4px', // Минимум округлостей для более строгого вида
          textTransform: 'none', // Без изменения регистра
          padding: '8px 16px', // Стандартные отступы
          backgroundColor: greenPalette.green,
          color: '#fff',
          '&:hover': {
            backgroundColor: greenPalette.lightGreen,
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: 'none', // Без тени для минималистичного вида
          borderRadius: '4px', // Четкие прямые углы
          backgroundColor: greenPalette.surface, // Белый фон для карточек
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        h1: {
          fontWeight: 600,
          color: greenPalette.black,
        },
        h2: {
          fontWeight: 500,
          color: greenPalette.black,
        },
        body1: {
          color: greenPalette.black,
        },
      },
    },
  },
  cssVariables: true,
});

export default minimalistGreenTheme;