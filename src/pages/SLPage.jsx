import { useParams, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Container, Typography, Box } from "@mui/material";
import { slPagesData } from "../data/slpagesdata";
import SlCarousel from '../components/SlCarousel';
import Leftbutton from '../components/Leftbutton';
import Showmore from '../components/Showmore';
import Footer from '../components/Footer';

export default function CardPage() {
  const { id } = useParams();
  const location = useLocation();
  const slpage = slPagesData.find(c => c.id === parseInt(id));
  
  useEffect(() => {
    // Add small delay to ensure page is rendered before scrolling
    const timer = setTimeout(() => {
      window.scrollTo(0, 0);
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    }, 0);
    return () => clearTimeout(timer);
  }, [location]);
  
   if (!slpage) return <Typography>Card not found</Typography>;

  return (
    <Box sx={{ 
      backgroundColor: '#ffffff', 
      minHeight: '100vh', 
      width: '100%', 
      m: 0, 
      p: 0, 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center',
      overflowX: 'hidden'
    }}>
      <Container sx={{ 
        width: { xs: '95%', sm: '90%', md: 'min(900px, 95%)', lg: 'min(900px, 90%)' },
        mx: 'auto', 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        textAlign: 'center', 
        color: '#000000', 
        py: { xs: 2, sm: 3, md: 5 },
        px: { xs: 1, sm: 2 }
      }}>

        <Leftbutton to="/#section-tiles" />

        <Typography 
          variant="h5" 
          sx={{ 
            mb: { xs: 2, sm: 3, md: 4 },
            fontSize: { xs: '1.5rem', sm: '1.75rem', md: '2rem' },
            wordBreak: 'break-word',
            mx: { xs: 2, sm: 0 }
          }}
        >
          {slpage.title}
        </Typography>

        <Box sx={{ 
          mb: { xs: 1.5, sm: 2, md: 2 },
          width: '100%',
          mx: { xs: 2, sm: 0 }
        }}>
          <Showmore text={slpage.text} sentenceLimit={slpage.numberofsentences} />
        </Box>

        <Typography 
          variant="h6" 
          sx={{ 
            mb: { xs: 2.5, sm: 3.5, md: 5 },
            fontSize: { xs: '1rem', sm: '1.15rem', md: '1.25rem' },
            mx: { xs: 2, sm: 0 }
          }}
        >
          Még néhány érdekesség:
        </Typography>

        <Box sx={{ 
          display: 'flex', 
          justifyContent: 'center', 
          backgroundColor: '#ffffff',
          width: '100%',
          mx: { xs: 2, sm: 0 }
        }}>
          <SlCarousel images={slpage.carousimages} captions={slpage.caroustexts} carouselTexts={slpage.caroustexts}/>
        </Box>
        
      </Container>
      <Footer/>
    </Box>
  );
}