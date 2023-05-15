import React from 'react';
import './style.css'

const MainPage = () => {
  return (
    <div className='container'>
      <div className='main-page-wrap'>
        <div className='main-page-block'>
          <h1 className='main-page-header'>Школа парикмахерского искусства</h1>
          <h2 className='main-page-subheader'>Студия Арт Визаж</h2>
          <p className='main-page-text'>Добро пожаловать в Студия Арт Визаж!</p>
          <button className='main-page-button'>Записаться на курс</button>
          <div className='main-block-info'>
            <p className="main-block-info-people">30 000+</p>
            <p className="main-block-info-specialists">выпущенных специалистов</p>
            <p className='main-block-info-flat-stick'>|</p>
            <p className='main-block-info-years'>22</p>
            <p className='main-block-info-text'>года на рынке</p>
          </div>
        </div>
        <div className="main-page-img-wrap">
          <span className='main-page-img'></span>
        </div>
      </div>

      <div className="why-we-wrap">
        <p className="why-we-header">ПОЧЕМУ МЫ?</p>
        <p className="why-we-underline"></p>
        <div className="why-we-card-block">
          <div className="why-we-card-wrap">
            <div className="why-we-icon-wrap">
              <span className="why-we-card-icon-diplom"></span>
            </div>
            <p className="why-we-card-text">Диплом международного образца</p>
          </div>
          
          <div className="why-we-card-wrap">
            <div className="why-we-icon-wrap">
              <span className="why-we-card-icon-cut"></span>
            </div>
            <p className="why-we-card-text">Современное оборудование и программное обеспечение</p>
          </div>

          <div className="why-we-card-wrap">
            <div className="why-we-icon-wrap">
              <span className="why-we-card-icon-student"></span>
            </div>
            <p className="why-we-card-text">Индивидуальный подход к каждому студенту</p>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default MainPage;