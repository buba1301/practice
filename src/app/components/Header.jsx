import React from 'react';

import '../../css/Header.css';

const Header = () => {
  const a = 'b';

  return (
    <header className='header logo'>
      <img
        // src='./img/logo.svg'
        width='90'
        height='90'
        alt='Logo' />
    </header>
  );
};

export default Header;
