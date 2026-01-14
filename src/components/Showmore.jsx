import { useState } from 'react';
import { Box, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function Showmore({ text, charLimit = 300 }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const isTruncated = text.length > charLimit;
  const displayText = isExpanded ? text : text.substring(0, charLimit);

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
          mb: 2, 
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
              ml: 1,
              fontSize: '2.5rem',
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
