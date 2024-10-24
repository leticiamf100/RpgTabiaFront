import React, { useEffect, useState } from 'react';
import './ResultCard.css'; // Certifique-se de que o CSS esteja no lugar correto.

interface ResultCardProps {
  title: string;
  imagem: string;
}

export const ResultCard: React.FC<ResultCardProps> = ({ title, imagem }) => {
  const [showCard, setShowCard] = useState(false); // Estado para controlar a exibição do card

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowCard(true); // Atualiza para mostrar o card após um atraso
    }, 1000); // Tempo em milissegundos

    // Limpeza do efeito
    return () => clearTimeout(timer);
  }, []); // Executa apenas uma vez após a montagem do componente

  if (!showCard) {
    return null; // Não renderiza nada até que o tempo tenha passado
  }
  
  return (
    <div className="result-card">
      <h3>{title}</h3>
      <img src={imagem} alt={title} />
    </div>
  );
};
