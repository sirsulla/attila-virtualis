import { useParams, useNavigate } from "react-router-dom";
import { Container, Typography, Box, Button } from "@mui/material";
import { slPagesData } from "../data/slpagesdata";
import { tlPagesData } from "../data/tlpagesdata";
import arrowIcon from "../components/arrows.png";

export default function TLPage() {
  const { pageId, itemIndex } = useParams();
  const navigate = useNavigate();

  const slpage = slPagesData.find(c => c.id === parseInt(pageId));
  
  if (!slpage) return (
    <Box sx={{ backgroundColor: '#000000', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <Typography sx={{ color: '#ffffff' }}>Page not found</Typography>
    </Box>
  );

  const itemIdx = parseInt(itemIndex);
  const title = slpage.caroustexts[itemIdx];
  const image = slpage.carousimages[itemIdx];
  
  // Find content from tlpagesData based on title
  const contentData = tlPagesData.find(item => item.title === title);

  if (!title || !image) {
    return (
      <Box sx={{ backgroundColor: '#000000', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Typography sx={{ color: '#ffffff' }}>Item not found</Typography>
      </Box>
    );
  }

  return (
    <Box sx={{ backgroundColor: '#000000', minHeight: '100vh', width: '100vw', m: 0, p: 0, display: 'flex', flexDirection: 'column' }}>
      <Container sx={{ width: 'min(900px, 100%)', mx: 'auto', color: '#ffffff', py: 5 }}>
        <Button
          onClick={() => navigate(-1)}
          sx={{ color: '#ffffff', mb: 3, '&:hover': { backgroundColor: 'rgba(255, 255, 255, 0.1)' }, display: 'flex', alignItems: 'center', gap: 1, fontFamily: 'Montserrat' }}
        >
          <img src={arrowIcon} alt="back" style={{ width: '24px', height: '24px', filter: 'brightness(0) invert(1)' }} />
          Back
        </Button>

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
