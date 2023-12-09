import React from 'react';

import { CssBaseline } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';

import Layout from './layout';

const theme = createTheme({
  typography: {
    fontFamily: '"Fraunces", serif',
    h3: {
      fontWeight: 600,
      letterSpacing: '6px',
    },
    h4: {
      fontSize: '37px',
      fontWeight: 900,
    },
    h5: {
      fontWeight: 900,
    },
    h6: {
      letterSpacing: '3px',
    },
    body1: {
      fontFamily: '"Barlow", sans-serif',
    },
    subtitle1: {
      fontWeight: 900,
    },
    subtitle2: {
      fontFamily: '"Barlow", sans-serif',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          color: '#ffffff',
          textTransform: 'none',
          fontFamily: '"Barlow", sans-serif',
        },
      },
    },

    MuiDialogTitle: {
      styleOverrides: {
        root: {
          padding: 0,
          lineHeight: 1,
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          color: '#ffffff',
        },
        h4: {
          color: 'hsl(212, 27%, 19%)',
        },
        h6: {
          color: 'hsl(210, 4%, 67%)',
        },
        body1: {
          color: 'hsl(210, 4%, 67%)',
        },
        subtitle2: {
          color: 'hsl(210, 4%, 67%)',
        },
      },
    },
  },
});

export const App = () => {
  return (
    <CssBaseline>
      <ThemeProvider theme={theme}>
        <Layout />
      </ThemeProvider>
    </CssBaseline>
  );
};
