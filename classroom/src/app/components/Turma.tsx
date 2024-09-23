"use client";

import React, { useState } from 'react';
import HeaderTabs from './HeaderTabs';
import Alunos from './Alunos';
import Atividades from './Atividades';

interface TurmaProps {
  turmaId: string;
}

const Turma: React.FC<TurmaProps> = ({ turmaId }) => {
  // Estado que controla qual aba está ativa (inicialmente 'Atividades')
  const [activeTab, setActiveTab] = useState<'Atividades' | 'Alunos'>('Atividades');

  // Função que será passada para o HeaderTabs para alterar a aba ativa
  const handleTabChange = (newValue: 'Atividades' | 'Alunos') => {
    setActiveTab(newValue); // Atualiza a aba ativa com base no clique
  };

  return (
    <div className="p-8 bg-white min-h-screen mt-4">
      
      
      {/* Passa a função de mudança de aba para o HeaderTabs */}
      <HeaderTabs tabs={['Atividades', 'Alunos']} onTabChange={handleTabChange} />

      {/* Exibe as atividades ou alunos com base na aba ativa */}
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
