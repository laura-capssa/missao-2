'use client';
import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, Typography, Box, Icon } from '@mui/material';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AppsIcon from '@mui/icons-material/Apps';
import Menu from './Menu';

const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleDrawerToggle = (open: boolean) => {
    setDrawerOpen(open);
  };

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
          <Box sx={{ width: 175, height: 100, position: 'fixed', top: 17, right: 0 }}>
            <IconButton sx={{ color: '#333333' }}>
              <NotificationsIcon />
            </IconButton>
            <IconButton sx={{ color: '#333333' }}>
              <AppsIcon />
            </IconButton>
            <IconButton sx={{ color: '#333333' }}>
              <AccountCircleIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      <Menu drawerOpen={drawerOpen} handleDrawerToggle={handleDrawerToggle} />
    </>
  );
};

export default Header;
