import Box from '@mui/material/Box'
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import { Route, Routes } from 'react-router-dom'
// Components
import Footer from "./components/Footer";
import Header from "./components/Header";
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme();

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%'
      }}>
        <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        <Footer />
      </Box>
    </ThemeProvider>
  );
}

export default App;
