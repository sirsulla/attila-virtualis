
import LandingPage from './pages/LandingPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SLPage from './pages/SLPage.jsx'
import TLPage from './pages/TLPage.jsx'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const theme = createTheme({
  typography: {
    fontFamily: [
      'Montserrat',
      'system-ui',
      'Avenir',
      'Helvetica',
      'Arial',
      'sans-serif',
    ].join(','),
  },
});

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter basename="/attila-virtualis">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/card/:id" element={<SLPage />} />
          <Route path="/carousel/:pageId" element={<TLPage />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}