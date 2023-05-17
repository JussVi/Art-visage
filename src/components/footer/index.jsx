import React from 'react';
import './style.css'

const Footer = () => {
  return (
    <div className='footer-wrap'>
      <span className="footer-underline"></span>
      <div className="container">
        <div className="footer-map-wrap">
          <span className="footer-logo"></span>
        </div>
        <span className="footer-underline"></span>
        <div className="footer-nav-wrap">
          <nav className="footer-nav-menu">
            <a href="/" className="footer-nav-menu-item">Главная</a>
            <a href="/" className="footer-nav-menu-item">Курсы</a>
            <a href="/" className="footer-nav-menu-item">О нас</a>
            <a href="/" className="footer-nav-menu-item">Мастеры</a>
            <a href="/" className="footer-nav-menu-item">Галерея</a>
            <a href="/" className="footer-nav-menu-item">Контакты</a>
          </nav>
          <span className="footer-co">© 2023 Студия Арт Визаж</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;