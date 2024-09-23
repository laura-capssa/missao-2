import Link from 'next/link';
import { Box, Typography, IconButton } from '@mui/material';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import FolderOpenIcon from '@mui/icons-material/FolderOpen';

interface CardProps {
  href: string;
  title: string;
  group: string;
}

const Card: React.FC<CardProps> = ({ href, title, group }) => {
  return (
    <Link href={href} style={{ textDecoration: 'none' }}>
      <Box
        sx={{
          width: 320,
          backgroundColor: 'white',
          borderRadius: '16px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
          overflow: 'hidden',
          transition: 'transform 0.3s ease',
          '&:hover': {
            transform: 'scale(1.05)',
          },
        }}
      >
        {/* Cabeçalho com título e fundo azul */}
        <Box
          sx={{
            backgroundColor: '#0072C6',
            height: '80px',
            padding: 2,
            display: 'flex',
            justifyContent: 'space-between',
            color: 'white',
          }}
        >
          <Typography variant="h6">{title}</Typography>
        </Box>

        {/* Conteúdo do cartão */}
        <Box sx={{ padding: 2, minHeight: '150px' }}>
          <Typography variant="body1" color="text.secondary">
            {group}
          </Typography>
        </Box>

        {/* Linha de separação */}
        <Box
          sx={{
            borderTop: '1px solid #e0e0e0', // A linha de separação
          }}
        />

        {/* Rodapé com ícones */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'right',
            padding: 2,
            backgroundColor: 'white',
          }}
        >
          <IconButton>
            <TrendingUpIcon sx={{ color: 'black' }} />
          </IconButton>
          <IconButton>
            <FolderOpenIcon sx={{ color: 'black' }} />
          </IconButton>
        </Box>
      </Box>
    </Link>
  );
};

export default Card;
