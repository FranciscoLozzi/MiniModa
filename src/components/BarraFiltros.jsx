import React from 'react';

const BarraFiltros = ({ filtroAtivo, onFiltroClick }) => {
  const filtros = [
    { id: 'preco_asc', nome: 'Menor preço', icone: '↓$' },
    { id: 'preco_desc', nome: 'Maior preço', icone: '↑$' },
    { id: 'vendidos_desc', nome: 'Mais vendidos', icone: '★' }, 
    { id: 'promocoes', nome: 'Promoções', icone: '%' }, 
    { id: 'data_desc', nome: 'Data de postagem', icone: '📅' }, 
    { id: 'favoritos', nome: 'Favoritos', icone: '❤' },
    { id: 'nome_asc', nome: 'Nome de A-Z', icone: 'A' },
    { id: 'nome_desc', nome: 'Nome de Z-A', icone: 'Z' },
  ];

  return (
    <aside className="barra-filtros">
      <h3>Filtrar por:</h3>
      <div className="filtros-grid">
        {filtros.map((filtro) => {
          const isAtivo = filtroAtivo === filtro.id;

          return (
            <div 
              key={filtro.id} 
              className={`filtro-item ${isAtivo ? 'ativo' : ''}`}
              onClick={() => onFiltroClick(filtro.id)}
            >
              <div className="filtro-icone">{filtro.icone}</div>
              <p>{filtro.nome}</p>
            </div>
          );
        })}
      </div>
    </aside>
  );
};

export default BarraFiltros;
