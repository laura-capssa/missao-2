import { Tabs, Tab, Box } from '@mui/material';
import { useState } from 'react';

interface HeaderTabsProps {
  tabs: string[];
}

const HeaderTabs: React.FC<HeaderTabsProps> = ({ tabs }) => {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="primary" // Cor do indicador (linha azul)
        textColor="primary" // Cor do texto ativo
        
        TabIndicatorProps={{
          style: {
            backgroundColor: '#1976d2', // Cor do indicador azul
            height: '3px', // Altura da linha de seleção
            borderRadius: '2px', // Bordas arredondadas da linha
          },
        }}
        sx={{
          '& .MuiTab-root': {
            minWidth: 'auto', // Remove o espaçamento extra entre as abas
            textTransform: 'none', // Deixa o texto sem todas maiúsculas
            fontWeight: 'bold', // Texto em negrito
            marginRight: '20px', // Espaçamento entre as abas
            marginLeft: '20px',
          },
          '& .Mui-selected': {
            color: '#1976d2', // Cor do texto da aba selecionada
          },
        }}
      >
        {tabs.map((tab, index) => (
          <Tab key={index} label={tab} />
        ))}
      </Tabs>
    </Box>
  );
};

export default HeaderTabs;
