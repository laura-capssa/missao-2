"use client";
import React from 'react';
import Turma from '../../components/Turma';
import CustomCard from '../header-turmas/CustomCard';
const Programacao: React.FC = () => {
  const turmaId = 'programacao';

  return (
    <main className="p-8 bg-white min-h-screen">
      <CustomCard title="Programação"/>
      <Turma turmaId={turmaId} />
    </main>
  );
};

export default Programacao;
