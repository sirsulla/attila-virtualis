import { useParams, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Container, Typography, Box } from "@mui/material";

import { tlPagesData } from "../data/tlpagesdata";
import Leftbutton from '../components/Leftbutton';
import Footer from '../components/Footer';

export default function TLPage() {
  const { pageId } = useParams();
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

  // Find content from tlpagesData based on title (pageId now contains the title)
  const contentData = tlPagesData.find(item => item.title === pageId);
  
  if (!contentData) return (
    <Box sx={{ backgroundColor:  '#ffffff', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <Typography sx={{ color: '#000000' }}>Page not found</Typography>
    </Box>
  );

  const title = contentData.title;
  const image = contentData.image;

  return (
    <Box sx={{ backgroundColor: '#ffffff', minHeight: '100vh', width: '100vw', m: 0, p: 0, display: 'flex', flexDirection: 'column' }}>
      <Container sx={{ width: 'min(900px, 100%)', mx: 'auto', color: '#000000', py: 5, backgroundColor: '#ffffff' }}>
        <Leftbutton />

        <Typography variant="h4" sx={{ mb: 4, textAlign: 'center' }}>
          {title}
        </Typography>

        <Box sx={{ display: 'flex', justifyContent: 'center', mb: 5 }}>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <img
              src={image}
              alt={title}
              style={{ maxWidth: '100%', maxHeight: '500px', objectFit: 'cover', borderRadius: '3px', marginBottom: '30px' }}
            />
            {contentData?.caption && (
              <Typography
                variant="caption"
                sx={{
                  display: 'block',
                  textAlign: 'center',
                  color: '#666666',
                  fontStyle: 'italic',
                  fontSize: '0.85rem',
                  whiteSpace: 'pre-wrap',
                  lineHeight: 1.5,
                }}
                dangerouslySetInnerHTML={{ __html: contentData.caption }}
              />
            )}
          </Box>
        </Box>

        <Typography
          variant="body1"
          paragraph
          sx={{
            width: '100%',
            textAlign: 'justify',
            mb: 2,
            whiteSpace: 'pre-wrap',
            lineHeight: 1.8,
          }}
        >
          {contentData ? contentData.content : 'Content not available'}
        </Typography>
      </Container>
      <Footer/>
    </Box>
  );
}
