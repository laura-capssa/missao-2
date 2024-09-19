'use client';

import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, Typography, Drawer, Box, Button, Icon } from '@mui/material';
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
    { text: 'Início' },
    { text: 'Agenda' },
    { text: 'estrutura-de-software', path: '/estrutura-de-software' },
    { text: 'programacao', path: '/programacao' },
    { text: 'Turmas arquivadas' },
    { text: 'Configurações' },
  ];

  return (
    <>
      <AppBar position="relative" sx={{ backgroundColor: 'white', boxShadow: '0px 1px 4px rgba(0, 0, 0, 0.1)' }}>
        <Toolbar sx={{ display: 'flex', alignItems: 'center' }}>
          <IconButton edge="start" color="inherit" aria-label="menu" onClick={() => handleDrawerToggle(true)} sx={{ marginRight: 2 }}>
            <img src="../imagens/icon2.png" alt="Icone" width={27} height={30} />
          </IconButton>
          <Icon sx={{ width: 32, height: 44 }}>
            <img src="../imagens/icon.png" alt="Icone" style={{ width: '100%', height: '100%' }} />
          </Icon>
          <Typography variant="h5" sx={{ height: 17, color: '#555555', flexGrow: 1, marginLeft: 2, fontFamily: 'Roboto, sans-serif' }}>
            Google Sala de Aula
          </Typography>
        </Toolbar>
      </AppBar>

      <Drawer anchor="left" open={drawerOpen} onClose={() => handleDrawerToggle(false)}>
        <Box sx={{ width: 250, padding: 2 }}>
          {menuItems.map((item, index) => (
            item.path ? (
              <Button
                key={index}
                sx={{ 
                  justifyContent: 'flex-start', 
                  width: '100%', 
                  textTransform: 'none', 
                  marginBottom: 2, 
                  color: '#555555', 
                  fontFamily: 'Roboto, sans-serif',
                  fontWeight: 580,
                  padding: '8px 16px'
                }}
                onClick={() => handleMenuClose(item.path)}
              >
                {item.text}
              </Button>
            ) : (
              <Typography
                key={index}
                sx={{ 
                  justifyContent: 'flex-start', 
                  width: '100%', 
                  textTransform: 'none', 
                  marginBottom: 2, 
                  color: '#555555', 
                  fontFamily: 'Roboto, sans-serif',
                  padding: '8px 16px'
                }}
              >
                {item.text}
              </Typography>
            )
          ))}
        </Box>
      </Drawer>
    </>
  );
};

export default Header;
