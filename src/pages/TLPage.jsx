import { useParams, useLocation } from "react-router-dom";
import { useEffect, useRef } from "react";
import { Container, Typography, Box } from "@mui/material";

import { tlPagesData } from "../data/tlpagesdata";
import Leftbutton from '../components/Leftbutton';
import Footer from '../components/Footer';

export default function TLPage() {
  const { pageId } = useParams();
  const location = useLocation();
  const pageRef = useRef(null);

  useEffect(() => {
    // Scroll to top immediately
    if (pageRef.current) {
      pageRef.current.scrollIntoView({ behavior: 'auto', block: 'start' });
    }
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, [pageId]);

  // Find content from tlpagesData based on id
  const contentData = tlPagesData.find(item => item.id === parseInt(pageId, 10));
  
  if (!contentData) return (
    <Box sx={{ backgroundColor:  '#ffffff', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <Typography sx={{ color: '#000000' }}>Page not found</Typography>
    </Box>
  );

  const title = contentData.title;
  const image = contentData.image;

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
      overflowX: 'hidden'
    }}>
      <Container sx={{ 
        width: { xs: '100%', sm: '90%', md: 'min(900px, 95%)', lg: 'min(900px, 90%)' }, 
        mx: 'auto', 
        color: '#000000', 
        py: { xs: 2, sm: 3, md: 5 },
        px: { xs: 2, sm: 2 },
        boxSizing: 'border-box',
        backgroundColor: '#ffffff' 
      }}>
        <Leftbutton />

        <Typography 
          variant="h4" 
          sx={{ 
            mb: { xs: 2, sm: 3, md: 4 }, 
            textAlign: 'center',
            fontSize: { xs: '1.5rem', sm: '1.75rem', md: '2.125rem' }
          }}
        >
          {title}
        </Typography>

        <Box sx={{ 
          display: 'flex', 
          justifyContent: 'center', 
          mb: { xs: 3, sm: 4, md: 5 }
        }}>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
            <img
              src={image}
              alt={title}
              style={{ 
                maxWidth: '100%', 
                height: 'auto',
                maxHeight: 'clamp(250px, 60vw, 500px)',
                objectFit: 'cover', 
                borderRadius: '3px', 
                marginBottom: 'clamp(15px, 3vw, 30px)',
                display: 'block'
              }}
            />
            {contentData?.caption && (
              <Typography
                variant="caption"
                sx={{
                  display: 'block',
                  textAlign: 'center',
                  color: '#666666',
                  fontStyle: 'italic',
                  fontSize: { xs: '0.75rem', sm: '0.8rem', md: '0.85rem' },
                  whiteSpace: 'pre-wrap',
                  lineHeight: 1.5,
                  px: { xs: 0, sm: 0 }
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
            fontSize: { xs: '0.9rem', sm: '1rem', md: '1.1rem' }
          }}
        >
          {contentData ? contentData.content : 'Content not available'}
        </Typography>
      </Container>
      <Footer/>
    </Box>
  );
}
