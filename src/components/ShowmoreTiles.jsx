import { useState, useRef, useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function Showmore({ text, charLimit = 300, sentenceLimit = null }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [shouldScroll, setShouldScroll] = useState(false);
  const containerRef = useRef(null);

  const getSentenceLimitedText = (fullText, limit) => {
    const sentences = fullText.match(/[^.!?]+[.!?]+/g) || [fullText];
    return sentences.slice(0, limit).join('').trim();
  };

  const truncatedText = sentenceLimit 
    ? getSentenceLimitedText(text, sentenceLimit)
    : text.substring(0, charLimit);
  
  const isTruncated = sentenceLimit 
    ? getSentenceLimitedText(text, sentenceLimit).length < text.length
    : text.length > charLimit;
  const displayText = isExpanded ? text : truncatedText;

  const handleToggle = () => {
    if (isExpanded) {
      // Összezáráskor beállítjuk a scroll flag-et
      setShouldScroll(true);
    }
    setIsExpanded(!isExpanded);
  };

  useEffect(() => {
    // Csak összezáráskor scrollozunk
    if (shouldScroll && !isExpanded && containerRef.current) {
      containerRef.current.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'start'
      });
      // Use setTimeout to defer setState and avoid cascading renders
      const timer = setTimeout(() => setShouldScroll(false), 0);
      return () => clearTimeout(timer);
    }
  }, [isExpanded, shouldScroll]);

  return (
    <Box ref={containerRef}>
      <Typography 
        variant="body1" 
        paragraph 
        sx={{ 
          width: '100%', 
          textAlign: 'center', 
          mb: 0, 
          whiteSpace: 'pre-wrap',
          display: 'flex',
          flexWrap: 'wrap',
          gap: 0.5,
          fontSize: {xs: '80%', md: '100%'},
        }}
      >
        {displayText}
        {isTruncated && !isExpanded && '...'}
        {isTruncated && (
          <ExpandMoreIcon
            onClick={handleToggle}
            sx={{
              cursor: 'pointer',
              ml: 'auto',
              fontSize: '2rem',
              transition: 'transform 0.3s ease',
              transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)',
              '&:hover': {
                opacity: 0.7
              }
            }}
          />
        )}
      </Typography>
    </Box>
  );
}
