// src/components/Footer.js
import React from 'react';
import ScrollArrow from './ScrollArrow';

function Footer() {
  return (
    <footer className="bg-base-200 text-base-content p-4">
      <div className="container mx-auto text-center">
      <ScrollArrow className='bottom-10 bg-opacity-20 backdrop-blur-md  bg-primary relative w-10 rounded-lg' direction="top" targetId="services" />
        <p>&copy; 2024 Заправка картриджей. Все права защищены.</p>
        <p>Телефон: 8(700)961-96-63</p>
      </div>
    </footer>
  );
}

export default Footer;
