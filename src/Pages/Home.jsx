import React from 'react';
import BannerPrincipal from '../components/BannerPrincipal.jsx';
import Categorias from '../components/Categorias.jsx';
import BannerLiquida from '../components/BannerLiquida.jsx';

const Home = () => {
  return (
    <>
      <BannerPrincipal />
      <Categorias />
      <BannerLiquida />
    </>
  );
};

export default Home;   