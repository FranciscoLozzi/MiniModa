import React from 'react';

import kylyLogo from '../assets/kyly.png'; // Variável renomeada para 'kylyLogo'
import petitLogo from '../assets/petit.png'; // Variável renomeada para 'petitLogo'
import tiptopLogo from '../assets/tiptop.png'; // Variável renomeada para 'tiptopLogo'
import elianLogo from '../assets/elian.png'; // Variável renomeada para 'elianLogo'
import pimpolhoLogo from '../assets/pimpolho.png'; // Variável renomeada para 'pimpolhoLogo'
import cartersLogo from '../assets/carters.png'; // Variável renomeada para 'cartersLogo'


const Parceiros = () => {
  const partners = [

    { name: 'KYLY', logo: kylyLogo, color: '#FFD700' },
    { name: 'Petit Cherie', logo: petitLogo, color: '#E6E6FA' },
    { name: 'tipTop', logo: tiptopLogo, color: '#00CED1' },
    { name: 'elian', logo: elianLogo, color: '#FFA500' },
    { name: 'PIMPOLHO', logo: pimpolhoLogo, color: '#FF69B4' },
    { name: 'Carters', logo: cartersLogo, color: '#F5DEB3' }
  ];

  return (
    <div className="parceiros-container" style={{ paddingTop: '180px', padding: '2rem', textAlign: 'center' }}>
      <h1>Nossos Parceiros</h1>
      <p>Conheça as marcas incríveis que fazem parte da família Mini Moda!</p>
      
      <div style={{ marginTop: '3rem', display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '2rem' }}>
        {partners.map((partner, index) => (
          <div key={index} style={{ 
            border: '1px solid #ddd', 
            borderRadius: '10px', 
            padding: '1.5rem', 
            width: '250px', 
            boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
            backgroundColor: partner.color 
          }}>
            <h3>{partner.name}</h3>
            <img 
              src={partner.logo} 
              alt={`Logo ${partner.name}`} 
              style={{ maxWidth: '100px', maxHeight: '80px', marginTop: '1rem', objectFit: 'contain' }} 
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Parceiros;
