'use client';
import React from 'react';
import { Drawer, Box, Button, Typography, Divider } from '@mui/material';
import { useRouter } from 'next/navigation';

interface MenuProps {
  drawerOpen: boolean;
  handleDrawerToggle: (open: boolean) => void;
}

const Menu: React.FC<MenuProps> = ({ drawerOpen, handleDrawerToggle }) => {
  const router = useRouter();

  const handleMenuClose = (path?: string) => {
    handleDrawerToggle(false);
    if (path) {
      router.push(path);
    }
  };

  const menuItems = [
    { text: 'Início', icon: <img src="../imagens/icon3.png" alt="Início Icon" width={15} height={15} style={{ marginRight: '12px' }} />, path: '/' },
    { text: 'Agenda', icon: <img src="../imagens/icon4.png" alt="Agenda Icon" width={15} height={15} style={{ marginRight: '12px' }} /> },
    { text: 'Minhas Inscrições', icon: <img src="../imagens/icon5.png" alt="Inscrições Icon" width={30} height={24} style={{ marginRight: '9px' }} /> },
    { text: 'Pendentes', icon: <img src="../imagens/icon6.png" alt="Pendentes Icon" width={20} height={24} style={{ marginRight: '9px' }} /> },
    { text: 'Estrutura de Software', icon: <img src="../imagens/icon7.png" alt="Estrutura Icon" width={32} height={24} />, path: '/turma/estrutura-de-software' },
    { text: 'IJ - Programação', icon: <img src="../imagens/icon8.png" alt="Programação Icon" width={30} height={24} />, path: '/turma/programacao' },
    { text: 'Turmas arquivadas', icon: <img src="../imagens/icon1.png" alt="Turmas arquivadas Icon" width={20} height={24} style={{ marginRight: '12px' }} /> },
    { text: 'Configurações', icon: <img src="../imagens/icon9.png" alt="Configurações Icon" width={20} height={24} style={{ marginRight: '12px' }} /> },
  ];

  return (
    <Drawer anchor="left" open={drawerOpen} onClose={() => handleDrawerToggle(false)}>
      <Box sx={{ width: 250, padding: 2 }}>
        {menuItems.map((item, index) => (
          <React.Fragment key={index}>
            {item.path ? (
              <Button
                sx={{
                  justifyContent: 'flex-start',
                  width: '100%',
                  textTransform: 'none',
                  marginBottom: 2,
                  color: '#555555',
                  fontFamily: 'Roboto, sans-serif',
                  fontWeight: 580,
                  padding: '8px 16px',
                  display: 'flex',
                  alignItems: 'center'
                }}
                onClick={() => handleMenuClose(item.path)}
              >
                {item.icon && <Box sx={{ marginRight: 1 }}>{item.icon}</Box>}
                {item.text}
              </Button>
            ) : (
              <Typography
                sx={{
                  justifyContent: 'flex-start',
                  width: '100%',
                  textTransform: 'none',
                  marginBottom: 2,
                  color: '#555555',
                  fontFamily: 'Roboto, sans-serif',
                  padding: '8px 16px',
                  display: 'flex',
                  alignItems: 'center'
                }}
              >
                {item.icon && <Box sx={{ marginRight: 1 }}>{item.icon}</Box>}
                {item.text}
              </Typography>
            )}
            {item.text === 'Agenda' && <Divider sx={{ backgroundColor: '#D3D3D3', marginBottom: 2 }} />}
            {item.text === 'IJ - Programação' && <Divider sx={{ backgroundColor: '#D3D3D3', marginBottom: 2 }} />}
          </React.Fragment>
        ))}
      </Box>
    </Drawer>
  );
};

export default Menu;
