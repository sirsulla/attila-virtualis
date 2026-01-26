import { useParams, useLocation } from "react-router-dom";
import { useEffect, useRef } from "react";
import { Container, Typography, Box } from "@mui/material";
import { slPagesData } from "../data/slpagesdata";
import SlCarousel from '../components/SlCarousel';
import Leftbutton from '../components/Leftbutton';
import Showmore from '../components/Showmore';
import Footer from '../components/Footer';

export default function CardPage() {
  const { id } = useParams();
  const location = useLocation();
  const pageRef = useRef(null);
  const slpage = slPagesData.find(c => c.id === parseInt(id));

  useEffect(() => {
    // Scroll to top immediately
    if (pageRef.current) {
      pageRef.current.scrollIntoView({ behavior: 'auto', block: 'start' });
    }
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, [id]);
  
   if (!slpage) return <Typography>Card not found</Typography>;

  return (
    <Box 
      ref={pageRef}
      sx={{ 
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
          Válasszon témát!
        </Typography>

        <Box sx={{ 
          display: 'flex', 
          justifyContent: 'center', 
          backgroundColor: '#ffffff',
          width: '100%',
          mx: { xs: 2, sm: 0 }
        }}>
          <SlCarousel images={slpage.carousimages} captions={slpage.caroustexts} carouselTexts={slpage.caroustexts} carouselIds={slpage.carouselIds} />
        </Box>
        
      </Container>
      <Footer/>
    </Box>
  );
}