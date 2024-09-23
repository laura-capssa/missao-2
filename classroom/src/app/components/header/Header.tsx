'use client';

import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, Typography, Drawer, Box, Button, Icon, Divider } from '@mui/material';
import { useRouter } from 'next/navigation';

const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const router = useRouter();

  const handleDrawerToggle = (open: boolean) => {
    setDrawerOpen(open);
  };

  const handleMenuClose = (path?: string) => {
    setDrawerOpen(false);
    if (path) { router.push(path); }
  };

  const menuItems = [
    { text: 'Início', icon: <img src="../imagens/icon3.png" alt="Início Icon" width={15} height={15} style={{ marginRight: '15px' }} />, path: '/' },
    { text: 'Agenda', icon: <img src="../imagens/icon4.png" alt="Agenda Icon" width={15} height={15} style={{ marginRight: '15px' }} /> },
    { text: 'Minhas Inscrições', icon: <img src="../imagens/icon5.png" alt="Inscrições Icon" width={30} height={24} style={{ marginRight: '15px' }} /> },
    { text: 'Pendentes', icon: <img src="../imagens/icon6.png" alt="Pendentes Icon" width={20} height={24} style={{ marginRight: '15px' }} /> },
    { text: 'Estrutura de Software', icon: <img src="../imagens/icon7.png" alt="Estrutura Icon" width={32} height={24} />, path: '/turma/estrutura-de-software' },
    { text: 'IJ - Programação', icon: <img src="../imagens/icon8.png" alt="Programação Icon" width={30} height={24} />, path: '/turma/programacao' },
    { text: 'Turmas arquivadas', icon: <img src="../imagens/icon1.png" alt="Turmas arquivadas Icon" width={20} height={24} style={{ marginRight: '15px' }} /> },
    { text: 'Configurações', icon: <img src="../imagens/icon9.png" alt="Configurações Icon" width={20} height={24} style={{ marginRight: '15px' }} /> },
  ];

  return (
    <>
      <AppBar position="relative" sx={{ backgroundColor: 'white', boxShadow: '0px 1px 4px rgba(0, 0, 0, 0.1)' }}>
        <Toolbar sx={{ display: 'flex', alignItems: 'center' }}>
          <IconButton edge="start" color="inherit" aria-label="menu" onClick={() => handleDrawerToggle(true)} sx={{ marginRight: 2 }}>
            <img src="../imagens/icon2.png" alt="Icone" width={27} height={30} />
          </IconButton>
          <Icon sx={{ width: 32, height: 44 }}>
            <img src="../imagens/icon.png" alt="Icone" />
          </Icon>
          <Typography variant="h5" sx={{ height: 23, color: '#555555', flexGrow: 1, marginLeft: 2, fontFamily: 'Roboto, sans-serif' }}>
            Google Sala de Aula
          </Typography>
        </Toolbar>
      </AppBar>

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
    </>
  );

};

export default Header;
