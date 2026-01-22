import { useState } from 'react';
import { Box, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function Showmore({ text, charLimit = 300, sentenceLimit = null }) {
  const [isExpanded, setIsExpanded] = useState(false);

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
    setIsExpanded(!isExpanded);
  };

  return (
    <Box>
      <Typography 
        variant="body1" 
        paragraph 
        sx={{ 
          width: '100%', 
          textAlign: 'justify', 
          mb: 0, 
          whiteSpace: 'pre-wrap',
          display: 'flex',
          flexWrap: 'wrap',
          gap: 0.5
        }}
      >
        {displayText}
        {isTruncated && !isExpanded && '...'}
        {isTruncated && (
          <ExpandMoreIcon
            onClick={handleToggle}
            sx={{
              cursor: 'pointer',
              ml: '800px',
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
