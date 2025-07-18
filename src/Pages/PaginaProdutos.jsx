import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import BarraFiltros from '../components/BarraFiltros.jsx';
import GradeProdutos from '../components/GradeProdutos.jsx';
import './PaginaProdutos.css';

const PaginaProdutos = ({ produtos, onToggleFavorito, onAdicionarAoCarrinho }) => {
  const [todosProdutos, setTodosProdutos] = useState(produtos);
  const [produtosExibidos, setProdutosExibidos] = useState(produtos);
  const [filtroAtivo, setFiltroAtivo] = useState(null);

  const [searchParams] = useSearchParams();
  const categoriaDaUrl = searchParams.get('categoria');

  useEffect(() => {
    setTodosProdutos(produtos);
    console.log("Produtos iniciais recebidos:", produtos);
  }, [produtos]);
  
  useEffect(() => {
    if (categoriaDaUrl) {
      setFiltroAtivo(categoriaDaUrl);
      console.log("Filtro da URL detectado:", categoriaDaUrl);
    }
  }, [categoriaDaUrl]);

  useEffect(() => {
    console.log("useEffect de filtro acionado. Filtro Ativo:", filtroAtivo);
    let produtosProcessados = [...todosProdutos];

    if (filtroAtivo) {
      switch (filtroAtivo) {
        case 'masculino':
        case 'feminino':
        case 'vestido':
        case 'tenis':
          produtosProcessados = produtosProcessados.filter(
            produto => produto.categoria === filtroAtivo
          );
          break;
        

        case 'preco_asc':
          produtosProcessados.sort((a, b) => parseFloat(a.preco) - parseFloat(b.preco));
          break;
        case 'preco_desc': 
          produtosProcessados.sort((a, b) => parseFloat(b.preco) - parseFloat(a.preco));
          break;

        case 'vendidos_desc': 
          produtosProcessados.sort((a, b) => b.vendidos - a.vendidos);
          break;

        case 'promocoes': 
          produtosProcessados = produtosProcessados.filter(
            produto => produto.promocao === true
          );
          break;

        case 'data_desc': 
          produtosProcessados.sort((a, b) => Date.parse(b.dataPostagem) - Date.parse(a.dataPostagem));
          break;
        
        case 'favoritos':
          produtosProcessados = produtosProcessados.filter(
            produto => produto.favorito === true
          );
          break;

        case 'nome_asc': 
          produtosProcessados.sort((a, b) => a.nome.localeCompare(b.nome));
          break;
        case 'nome_desc': 
          produtosProcessados.sort((a, b) => b.nome.localeCompare(a.nome));
          break;

        default:
          console.warn("Filtro ativo desconhecido ou não implementado:", filtroAtivo);
          break;
      }
    }
    console.log("Produtos exibidos após filtro:", produtosProcessados.length, "produtos.");
    setProdutosExibidos(produtosProcessados);
  }, [filtroAtivo, todosProdutos]); 

  const handleFiltroClick = (idFiltro) => {
    console.log("handleFiltroClick chamado com:", idFiltro);
    setFiltroAtivo(prev => {
      const novoFiltro = (prev === idFiltro ? null : idFiltro);
      console.log("Novo filtro ativo:", novoFiltro);
      return novoFiltro;
    });
  };

  return (
    <>
      <div className="pagina-produtos-container">
        <BarraFiltros
          filtroAtivo={filtroAtivo}
          onFiltroClick={handleFiltroClick}
        />
        <main className="conteudo-principal-produtos">
          {produtosExibidos.length > 0 ? (
            <GradeProdutos 
              produtos={produtosExibidos} 
              onToggleFavorito={onToggleFavorito}
              onAdicionarAoCarrinho={onAdicionarAoCarrinho}
            />
          ) : (
            <div className="sem-produtos-mensagem">
              <p>Nenhum produto encontrado.</p>
            </div>
          )}
        </main>
      </div>
    </>
  );
};

export default PaginaProdutos;
