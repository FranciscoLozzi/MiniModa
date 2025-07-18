import React from 'react';

const CardProduto = ({ produto, onToggleFavorito, onAdicionarAoCarrinho }) => { 

  
  const handleAdicionarClick = () => {
    onAdicionarAoCarrinho(produto);
  
    alert(`${produto.nome} adicionado(a) ao carrinho!`);
  };

  return (
    <div className="card-produto">
   
      <button 
        className={`btn-favorito ${produto.favorito ? 'favoritado' : ''}`}
        onClick={() => onToggleFavorito(produto.id)}
      >
        {produto.favorito ? '❤️' : '♡'}
      
      </button>

      <img src={produto.img} alt={produto.nome} />
      <h3>{produto.nome}</h3>
      <p className="descricao">{produto.desc}</p>
      <p className="preco">R$ {parseFloat(produto.preco).toFixed(2).replace('.', ',')}</p>
      

      <button 
        className="btn-adicionar"
        onClick={handleAdicionarClick} 
      >

      </button>
    </div>
  );
};

export default CardProduto;