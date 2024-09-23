import React from 'react';
import { Box, Typography } from '@mui/material';

interface CustomCardProps {
  title: string;
}

const CustomCard: React.FC<CustomCardProps> = ({ title }) => { // Usando "title" como prop
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        backgroundColor: '#37474F', 
        borderRadius: '16px',
        padding: '16px',
        color: 'white',
        maxWidth: '900px',
        margin: 'auto',
      }}
    >
      <Box sx={{ flex: 1 }}>
        <Typography variant="h4" component="div">
          {title} 
        </Typography>
        <Typography variant="body1" component="div">
          2024
        </Typography>
      </Box>
    </Box>
  );
};

export default CustomCard;
