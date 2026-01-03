import { useParams } from "react-router-dom";
import { Container, Typography, Box } from "@mui/material";
import { slPagesData } from "../data/slpagesdata";
import SlCarousel from '../components/SlCarousel';

export default function CardPage() {
  const { id } = useParams();
  const slpage = slPagesData.find(c => c.id === parseInt(id));
   if (!slpage) return <Typography>Card not found</Typography>;

  return (
    <Box sx={{ backgroundColor: '#000000', minHeight: '100vh', width: '100vw', m: 0, p: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <Container sx={{ width: 'min(900px, 100%)', mx: 'auto', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', color: '#ffffff', py: 5 }}>
        <Typography variant="h4" gutterBottom>
          {slpage.title}
        </Typography>

        <Typography variant="body1" paragraph sx={{ width: '100%', textAlign: 'justify' }}>
          {slpage.text}
        </Typography>

        <Box sx={{ display: 'flex', justifyContent: 'center', backgroundColor: '#000000' }}>
          <SlCarousel images={slpage.carousimages} />
        </Box>
      </Container>
    </Box>
  );
}