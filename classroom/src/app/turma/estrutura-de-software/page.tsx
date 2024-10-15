"use client";

import React from 'react';
import Turma from '../../components/Turma';

const EstruturaSoftware: React.FC = () => {
  const turmaId = 'estrutura-de-software';

  return (
    <main className="p-8 bg-white min-h-screen">
      <h1 className="text-3xl font-bold mb-6"></h1>
      <Turma turmaId={turmaId} />
    </main>
  );
};

export default EstruturaSoftware; 
