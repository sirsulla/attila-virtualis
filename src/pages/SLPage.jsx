import { useParams, useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Container, Typography, Box } from "@mui/material";
import { slPagesData } from "../data/slpagesdata";
import SlCarousel from '../components/SlCarousel';
import Leftbutton from '../components/Leftbutton';

export default function CardPage() {
  const { id } = useParams();
  const navigate = useNavigate();
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
    <Box sx={{ backgroundColor: '#ffffff', minHeight: '100vh', width: '100vw', m: 0, p: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <Container sx={{ width: 'min(900px, 100%)', mx: 'auto', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', color: '#000000', py: 5 }}>

        <Leftbutton to="/#section-tiles" />

        <Button
          onClick={() => navigate(-1)}
          sx={{ color: '#ffffff', mb: 3, alignSelf: 'flex-start', '&:hover': { backgroundColor: 'rgba(255, 255, 255, 0.1)' }, display: 'flex', alignItems: 'center', gap: 1, fontFamily: 'Montserrat' }}
        >
          <img src={arrowIcon} alt="back" style={{ width: '24px', height: '24px', filter: 'brightness(0) invert(1)' }} />
          Back
        </Button>

        <Typography variant="h4" sx={{ mb: 4 }}>
          {slpage.title}
        </Typography>

        <Typography variant="body1" paragraph sx={{ width: '100%', textAlign: 'justify', mb: 6, whiteSpace: 'pre-wrap' }}>
          {slpage.text}
        </Typography>

        <Typography variant="h5" sx={{ mb: 6 }}>
          Még néhány érdekesség:

        </Typography>

        <Box sx={{ display: 'flex', justifyContent: 'center', backgroundColor: '#ffffff' }}>
          <SlCarousel images={slpage.carousimages} captions={slpage.caroustexts} pageId={slpage.id}/>
        </Box>
      </Container>
    </Box>
  );
}