
import LandingPage from './pages/LandingPage';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import SLPage from './pages/SLPage.jsx'
import TLPage from './pages/TLPage.jsx'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { useEffect } from 'react';

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

// Scroll restoration component
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    const scrollToTop = () => {
      // Force scroll on multiple elements
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
      document.documentElement.scroll({ top: 0, left: 0, behavior: 'instant' });
      document.body.scroll({ top: 0, left: 0, behavior: 'instant' });
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    };
    
    // Scroll immediately
    scrollToTop();
    
    // And scroll multiple more times to ensure it works
    const timer1 = setTimeout(scrollToTop, 5);
    const timer2 = setTimeout(scrollToTop, 15);
    const timer3 = setTimeout(scrollToTop, 50);
    const timer4 = setTimeout(scrollToTop, 100);
    const timer5 = setTimeout(scrollToTop, 200);
    
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
      clearTimeout(timer5);
    };
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter basename="/attila-virtualis">
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/card/:id" element={<SLPage />} />
          <Route path="/carousel/:pageId" element={<TLPage />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}