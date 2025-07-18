// src/components/GradeProdutos.jsx
import React from 'react';
import CardProduto from './CardProduto';

const GradeProdutos = ({ produtos, onToggleFavorito, onAdicionarAoCarrinho }) => { 
  return (
    <div className="grade-produtos">
      {produtos.map(produto => (
        <CardProduto 
          key={produto.id} 
          produto={produto} 
          onToggleFavorito={onToggleFavorito}
          onAdicionarAoCarrinho={onAdicionarAoCarrinho} 
        />
      ))}
    </div>
  );
};

export default GradeProdutos;