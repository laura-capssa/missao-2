'use client'; // Indica que este componente é um Client Component

import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, Typography, MenuItem, MenuList, Paper, Popper, ClickAwayListener, Icon } from '@mui/material';
import { useRouter } from 'next/navigation'; // Usando useRouter de next/navigation

const Header = () => {
  const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const router = useRouter(); // Agora usamos useRouter da nova API de navegação do Next.js

  const handleMenuToggle = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
    setOpen(!open);
  };

  const handleMenuClose = (path?: string) => {
    setOpen(false);
    setAnchorEl(null);
    if (path) {
      router.push(path); // Usando router.push para navegação
    }
  };

  const handleClickAway = () => {
    setOpen(false);
    setAnchorEl(null);
  };

  return (
    <AppBar position="relative"
      sx={{ 
        backgroundColor: 'white', 
        boxShadow: '0px 1px 4px rgba(0, 0, 0, 0.1)'
      }}>
      <Toolbar sx={{ display: 'flex', alignItems: 'center' }}>
        <IconButton edge="start" color="inherit" aria-label="menu" onClick={handleMenuToggle} sx={{ marginRight: 2 }}>
          <img src="../imagens/icon2.png" alt="Icone" width={27} height={30} />
        </IconButton>
        <Icon sx={{ width: 32, height: 44 }} >
          <img src="../imagens/icon.png" alt="Icone" style={{ width: '100%', height: '100%' }} />
        </Icon>
        <Typography variant="h5" sx={{ height: 17, color: '#555555', flexGrow: 1, marginLeft: 2, fontFamily: 'Roboto, sans-serif'}}>
          Google Sala de Aula
        </Typography>

        {/* Menu Interativo */}
        <Popper open={open} anchorEl={anchorEl} placement="bottom-end" role={undefined}>
          <ClickAwayListener onClickAway={handleClickAway}>
            <Paper>
              <MenuList>
                <MenuItem onClick={() => handleMenuClose('/estrutura-de-software')}>
                  Estrutura de Software
                </MenuItem>
                <MenuItem onClick={() => handleMenuClose('/programacao')}>
                  Programação
                </MenuItem>
              </MenuList>
            </Paper>
          </ClickAwayListener>
        </Popper>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
