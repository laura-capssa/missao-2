"use client";

import React, { useState, useEffect } from 'react';
import Alunos from './Alunos';
import Atividades from './Atividades';

interface TurmaProps {
  turmaId: string;
}

const Turma: React.FC<TurmaProps> = ({ turmaId }) => {
  const [activeTab, setActiveTab] = useState<'atividades' | 'pessoas'>('atividades');

  const handleTabChange = (tab: 'atividades' | 'pessoas') => {
    setActiveTab(tab);
  };

  return (
    <div className="p-8 bg-white min-h-screen mt-4">
      <h1 className="text-2xl font-bold mb-4">{`Turma: ${turmaId.replace('-', ' ')}`}</h1>
      <div className="flex border-b mb-4">
        <button 
          className={`flex-1 py-2 text-center font-bold ${activeTab === 'atividades' ? 'border-b-2 border-green-500 text-green-500' : 'text-gray-500'}`}
          onClick={() => handleTabChange('atividades')}
        >
          Atividades
        </button>
        <button 
          className={`flex-1 py-2 text-center font-bold ${activeTab === 'pessoas' ? 'border-b-2 border-green-500 text-green-500' : 'text-gray-500'}`}
          onClick={() => handleTabChange('pessoas')}
        >
          Alunos
        </button>
      </div>

      <div className="mt-4">
        {activeTab === 'atividades' ? (
          <Atividades turmaId={turmaId} />
        ) : (
          <Alunos turmaId={turmaId} />
        )}
      </div>
    </div>
  );
};

export default Turma;
