"use client"; // Adicione esta linha no topo

import React from 'react';
import Turma from '../../components/Turma';
import MenuTurmas from '../../components/MenuTurmas';

const Programacao: React.FC = () => {
  const turmaId = 'programacao';

  return (
    <main className="p-8 bg-white min-h-screen">
      <MenuTurmas />
      <h1 className="text-3xl font-bold mb-6">IJ - Programação</h1>
      <Turma turmaId={turmaId} />
    </main>
  );
};

export default Programacao;
