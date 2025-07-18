import React from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import logoImg from '../assets/logo.png';
import cartIcon from '../assets/cart-icon.png'; 

const Header = ({ toggleCartModal, itensNoCarrinho }) => { 
  const location = useLocation();

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <header>
      <div className="header-top-row">
        <Link to="/" onClick={handleScrollToTop}>
          <img src={logoImg} alt="Logo MiniModa" className="logo-img" />
        </Link>
        
        <div className="cart-icon">
          <button onClick={toggleCartModal} className="cart-button"> 
            <img src={cartIcon} alt="Ícone Carrinho" className="cart-img" />
            {itensNoCarrinho > 0 && ( 
              <span className="cart-count">{itensNoCarrinho}</span>
            )}
          </button>
        </div>
      </div>

      <nav>
        <ul>
          <li>
            <NavLink to="/" className={({ isActive }) => (isActive && location.pathname === '/' ? 'active' : '')}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/produtos" className={({ isActive }) => (isActive && location.pathname.startsWith('/produtos') ? 'active' : '')}>
              Produtos
            </NavLink>
          </li>
          <li>
            <NavLink to="/sobre" className={({ isActive }) => (isActive ? 'active' : '')}>
              Sobre
            </NavLink>
          </li>
          

            <NavLink to="/parceiros" className={({ isActive }) => (isActive ? 'active' : '')}>
            Parceiros</NavLink>

          
          <li>
            <NavLink to="/contato" className={({ isActive }) => (isActive ? 'active' : '')}>
              Contato
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;