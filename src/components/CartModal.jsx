// src/components/CartModal.jsx
import React from 'react';

const CartModal = ({ carrinho, onClose, onRemover }) => {
  const calcularTotal = () => {
    return carrinho.reduce((total, item) => total + (parseFloat(item.preco) * item.quantidade), 0).toFixed(2);
  };

  return (
   
    <div className="cart-modal-overlay" onClick={onClose}>

      <div className="cart-modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="cart-modal-header">
          <h2>Seu Carrinho</h2>
          <button className="cart-modal-close-btn" onClick={onClose}>X</button>
        </div>

        <div className="cart-modal-body">
          {carrinho.length === 0 ? (
            <p>Seu carrinho está vazio.</p>
          ) : (
            <ul className="cart-modal-list">
              {carrinho.map(item => (
                <li key={item.id} className="cart-modal-item">
                  <img src={item.img} alt={item.nome} className="cart-item-img" />
                  <div className="cart-item-details">
                    <p className="cart-item-name">{item.nome}</p>
                    <p className="cart-item-price">R$ {parseFloat(item.preco).toFixed(2).replace('.', ',')} x {item.quantidade}</p>
                    <p className="cart-item-subtotal">Subtotal: R$ {(parseFloat(item.preco) * item.quantidade).toFixed(2).replace('.', ',')}</p>
                  </div>
              
                  <button 
                    className="cart-item-remove-btn" 
                    onClick={() => onRemover(item.id)}
                  >
                    Remover
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="cart-modal-footer">
          <h3>Total: R$ {calcularTotal().replace('.', ',')}</h3>
          {carrinho.length > 0 && (
            <button className="cart-checkout-btn">Finalizar Compra</button>
          )}
        </div>
      </div>
    </div>
  );
};

export default CartModal;
