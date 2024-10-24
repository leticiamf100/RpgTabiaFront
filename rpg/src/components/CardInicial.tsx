import React from 'react';

interface CardInicialProps {
  logo: string; // Caminho da logo
  description: string; // Descrição do projeto
}

const CardInicial: React.FC<CardInicialProps> = ({ logo, description }) => {
  return (
    <div className="card-inicial">
      <img src={logo} alt="Logo do Projeto" className="logo" />
      <p className="description">{description}</p>
    </div>
  );
};

export default CardInicial;
