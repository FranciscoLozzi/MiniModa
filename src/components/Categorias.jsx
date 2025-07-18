import React from 'react';
import { Link } from 'react-router-dom';

import iconeMeninos from '../assets/categoria-meninos.png';
import iconeMeninas from '../assets/categoria-meninas.png';
import iconeVestidos from '../assets/categoria-vestidos.png'; 
import iconeCalcados from '../assets/categoria-calcados.png';   

const Categorias = () => {
  const itensDeCategoria = [
    { nome: 'Meninos', img: iconeMeninos, link: '/produtos?categoria=masculino' },
    { nome: 'Meninas', img: iconeMeninas, link: '/produtos?categoria=feminino' },
    { nome: 'Vestidos', img: iconeVestidos, link: '/produtos?categoria=vestido' },
    { nome: 'Calçados', img: iconeCalcados, link: '/produtos?categoria=tenis' },
  ];

  return (
    <section className="categories">
      {itensDeCategoria.map(item => (
        <Link to={item.link} key={item.nome} className="category-item">
          <img src={item.img} alt={`Categoria ${item.nome}`} />
          <p>{item.nome}</p>
        </Link>
      ))}
    </section>
  );
};

export default Categorias;