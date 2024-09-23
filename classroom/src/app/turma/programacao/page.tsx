"use client"; // Adicione esta linha no topo

import React from 'react';
import Turma from '../../components/Turma';


const Programacao: React.FC = () => {
  const turmaId = 'programacao';

  const tabs = ['Mural', 'Atividades', 'Alunos'];

  return (
    <main className="p-8 bg-white min-h-screen">
      
      <Turma turmaId={turmaId} />
    </main>
  );
};

export default Programacao;
