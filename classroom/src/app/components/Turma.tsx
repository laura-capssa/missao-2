"use client";

import React, { useState } from 'react';
import HeaderTabs from './header/HeaderTabs';
import Alunos from './Alunos';
import Atividades from './Atividades';

interface TurmaProps {
  turmaId: string;
}

const Turma: React.FC<TurmaProps> = ({ turmaId }) => {
  const [activeTab, setActiveTab] = useState<'Atividades' | 'Alunos'>('Atividades');

  const handleTabChange = (newValue: 'Atividades' | 'Alunos') => {
    setActiveTab(newValue); 
  };

  return (
    <div className="p-8 bg-white min-h-screen mt-4">
      <HeaderTabs tabs={['Atividades', 'Alunos']} onTabChange={handleTabChange} />
      <div className="mt-4">
        {activeTab === 'Atividades' ? (
          <Atividades turmaId={turmaId} />
        ) : (
          <Alunos turmaId={turmaId} />
        )} 
      </div> 
    </div>
  );
};

export default Turma;
