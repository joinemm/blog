import React from 'react';
import { version } from 'react';
import { createTheme, ThemeProvider, Container, Box, CssBaseline, Icon } from '@mui/material';

console.log('Running react ' + version);

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Container component="main" fixed>
        cool blog bro
      </Container>
    </ThemeProvider>
  );
}

export default App;
