"use client"; // Adicione esta linha no topo

import React from 'react';
import Turma from '../../components/Turma';
import MenuTurmas from '../../components/MenuTurmas';
import HeaderTabs from '../../components/HeaderTabs'; // Certifique-se de estar importando corretamente

const Programacao: React.FC = () => {
  const turmaId = 'programacao';

  const tabs = ['Mural', 'Atividades', 'Alunos'];

  return (
    <main className="p-8 bg-white min-h-screen">
      <MenuTurmas />
      <HeaderTabs tabs={tabs} /> {/* Agora as abas serão passadas corretamente */}
      <h1 className="text-3xl font-bold mb-6">IJ - Programação</h1>
      <Turma turmaId={turmaId} />
    </main>
  );
};

export default Programacao;
