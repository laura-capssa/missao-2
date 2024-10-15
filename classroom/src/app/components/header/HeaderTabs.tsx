import { Tabs, Tab, Box } from '@mui/material';
import { useState } from 'react';

interface HeaderTabsProps {
  tabs: string[];
  onTabChange: (tab: 'Atividades' | 'Alunos') => void;
}

const HeaderTabs: React.FC<HeaderTabsProps> = ({ tabs, onTabChange }) => {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
    onTabChange(newValue === 0 ? 'Atividades' : 'Alunos');
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        TabIndicatorProps={{
          style: {
            backgroundColor: '#1976d2',
            height: '3px',
            borderRadius: '2px',
          },
        }}
        sx={{
          '& .MuiTab-root': {
            minWidth: 'auto',
            textTransform: 'none',
            fontWeight: 'bold',
            marginRight: '20px',
            marginLeft: '20px',
          },
          '& .Mui-selected': {
            color: '#1976d2',
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
