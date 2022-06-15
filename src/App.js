import React, {} from 'react';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';
import Header from './components/Header';
import { Grid } from '@mui/material';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Grid container sx={{height: '150vh' }}>
      </Grid>
    </ThemeProvider>
  );
}

export default App;
