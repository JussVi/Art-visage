import React from 'react';
import './style.css'

const Header = () => {
  return (
    <div className='header-wrap'>
      <span className="header-logo"></span>
      <nav className="header-nav-menu">
        <a href="/" className="header-nav-menu-item">Главная</a>
        <a href="/courses" className="header-nav-menu-item">Курсы</a>
        <a href="/about" className="header-nav-menu-item">О нас</a>
        <a href="/masters" className="header-nav-menu-item">Мастеры</a>
        <a href="/gallery" className="header-nav-menu-item">Галерея</a>
        <a href="/contacts" className="header-nav-menu-item">Контакты</a>
      </nav>
      <div className="header-social-wrap">
        <a href="https://www.instagram.com/art.visage.bishkek/" className="header-social-instagram"></a>
        <a href="/" className="header-social-facebook"></a>
      </div>
    </div>
  );
};

export default Header;