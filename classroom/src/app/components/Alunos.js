"use client";

import React, { useEffect, useState } from 'react';
import { getTurmaAlunos } from '../mockData'; // Ajuste o caminho se necessário

const Alunos = ({ turmaId }) => {
  const [alunos, setAlunos] = useState([]);

  useEffect(() => {
    const fetchAlunos = async () => {
      const alunosData = await getTurmaAlunos(turmaId);
      setAlunos(alunosData);
    };
    
    fetchAlunos(); 
  }, [turmaId]);

  return (
    <div>
      <h2 className="aluno-title">Alunos</h2>
      <ul> 
        {alunos.map((aluno, index) => (
          <li key={index} className="mb-2">{aluno}</li>
        ))}
      </ul>
    </div>
  );
};

export default Alunos;
