"use client";

import React, { useEffect, useState } from 'react';
import { getTurmaAtividades } from '../mockData';

const Atividades = ({ turmaId }) => {
  const [atividades, setAtividades] = useState([]);

  useEffect(() => {
    const fetchAtividades = async () => {
      const atividadesData = await getTurmaAtividades(turmaId);
      setAtividades(atividadesData);
    };

    fetchAtividades();
  }, [turmaId]);

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Atividades</h2>
      <ul>
        {atividades.map((atividade, index) => (
          <li key={index} className="mb-2">{atividade}</li>
        ))}
      </ul>
    </div>
  );
};

export default Atividades;
