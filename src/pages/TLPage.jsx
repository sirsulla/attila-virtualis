import { useParams, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Container, Typography, Box } from "@mui/material";
import { slPagesData } from "../data/slpagesdata";
import { tlPagesData } from "../data/tlpagesdata";
import Leftbutton from '../components/Leftbutton';

export default function TLPage() {
  const { pageId, itemIndex } = useParams();
  const location = useLocation();

  useEffect(() => {
    // Add small delay to ensure page is rendered before scrolling
    const timer = setTimeout(() => {
      window.scrollTo(0, 0);
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    }, 0);
    return () => clearTimeout(timer);
  }, [location]);

  const slpage = slPagesData.find(c => c.id === parseInt(pageId));
  
  if (!slpage) return (
    <Box sx={{ backgroundColor:  '#ffffff', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <Typography sx={{ color: '#000000' }}>Page not found</Typography>
    </Box>
  );

  const itemIdx = parseInt(itemIndex);
  const title = slpage.caroustexts[itemIdx];
  const image = slpage.carousimages[itemIdx];
  
  // Find content from tlpagesData based on title
  const contentData = tlPagesData.find(item => item.title === title);

  if (!title || !image) {
    return (
      <Box sx={{ backgroundColor:  '#ffffff', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Typography sx={{ color:  '#000000' }}>Item not found</Typography>
      </Box>
    );
  }

  return (
    <Box sx={{ backgroundColor: '#ffffff', minHeight: '100vh', width: '100vw', m: 0, p: 0, display: 'flex', flexDirection: 'column' }}>
      <Container sx={{ width: 'min(900px, 100%)', mx: 'auto', color: '#000000', py: 5, backgroundColor: '#ffffff' }}>
        <Leftbutton />

        <Typography variant="h4" sx={{ mb: 4, textAlign: 'center' }}>
          {title}
        </Typography>

        <Box sx={{ display: 'flex', justifyContent: 'center', mb: 4 }}>
          <img
            src={image}
            alt={title}
            style={{ maxWidth: '100%', maxHeight: '500px', objectFit: 'cover', borderRadius: '3px' }}
          />
        </Box>

        <Typography
          variant="body2"
          sx={{
            display: 'block',
            textAlign: 'center',
            mb: 4,
            color: 'rgba(255, 255, 255, 0.7)',
            fontStyle: 'italic',
            fontSize: '1rem',
          }}
        >
          {title}
        </Typography>

        <Typography
          variant="body1"
          paragraph
          sx={{
            width: '100%',
            textAlign: 'justify',
            mb: 6,
            whiteSpace: 'pre-wrap',
            lineHeight: 1.8,
          }}
        >
          {contentData ? contentData.content : 'Content not available'}
        </Typography>
      </Container>
    </Box>
  );
}
