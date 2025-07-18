import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import PaginaProdutos from './Pages/PaginaProdutos';
import HomePage from './Pages/Home'; 
import Sobre from './components/Sobre'; 

import Header from './components/Header';
import Footer from './components/Footer';
import CartModal from './components/CartModal';
import Contact from './components/Contato';
import Partners from './components/Parceiros';

import { produtosIniciais } from './data/produtos'; 

function App() {

  const [produtos, setProdutos] = useState(produtosIniciais);

  const [carrinho, setCarrinho] = useState([]);

  const [isCartModalOpen, setIsCartModalOpen] = useState(false);

  const handleToggleFavorito = (idProduto) => {
    setProdutos(prevProdutos =>
      prevProdutos.map(produto =>
        produto.id === idProduto
          ? { ...produto, favorito: !produto.favorito } 
          : produto
      )
    );
  };


  const handleAdicionarAoCarrinho = (produtoAdicionado) => {
    setCarrinho(prevCarrinho => {

      const produtoExistente = prevCarrinho.find(item => item.id === produtoAdicionado.id);

      if (produtoExistente) {

        return prevCarrinho.map(item =>
          item.id === produtoAdicionado.id
            ? { ...item, quantidade: item.quantidade + 1 }
            : item
        );
      } else {

        return [...prevCarrinho, { ...produtoAdicionado, quantidade: 1 }];
      }
    });

  };


  const handleRemoverDoCarrinho = (idProdutoParaRemover) => {
    setCarrinho(prevCarrinho => {

      const newCarrinho = prevCarrinho.filter(item => item.id !== idProdutoParaRemover);
      return newCarrinho;
    });
  };


  const toggleCartModal = () => {
    setIsCartModalOpen(prev => !prev);
  };

  return (
    <Router>

      <Header 
        toggleCartModal={toggleCartModal} 
        itensNoCarrinho={carrinho.reduce((acc, item) => acc + item.quantidade, 0)} 
      />
      

      <Routes>
        <Route 
          path="/" 
          element={<HomePage produtos={produtos} onToggleFavorito={handleToggleFavorito} />} 
        />
        
        <Route
          path="/produtos"
          element={
            <PaginaProdutos
              produtos={produtos}
              onToggleFavorito={handleToggleFavorito}
              onAdicionarAoCarrinho={handleAdicionarAoCarrinho}
            />
          }
        />

        <Route 
          path="/produtos/:categoria"
          element={
            <PaginaProdutos
              produtos={produtos}
              onToggleFavorito={handleToggleFavorito}
              onAdicionarAoCarrinho={handleAdicionarAoCarrinho}
            />
          }
        />

        <Route path="/sobre" element={<Sobre />} /> 

        <Route path="/parceiros" element={<Partners />} />

        <Route path="/contato" element={<Contact />} />

      </Routes>
      
      <Footer />
      {isCartModalOpen && (
        <CartModal
          carrinho={carrinho}
          onClose={toggleCartModal}
          onRemover={handleRemoverDoCarrinho}
        />
      )}
    </Router>
  );
}

export default App;
