import React from 'react';
import './style.css'

const MainPage = () => {
  return (
    <>
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
    </div>

    <div className='tickers'>
      <div className="black-ticker">

        <div className="marquee">
          <span>• Индивидуальный подход • Наилучшие результаты • Востребованность выпускников </span>
          <span>• Индивидуальный подход • Наилучшие результаты • Востребованность выпускников </span>
        </div>

      </div>

      <div className="yellow-ticker">

        <div className="marquee">
          <span>• Индивидуальный подход • Наилучшие результаты • Востребованность выпускников </span>
          <span>• Индивидуальный подход • Наилучшие результаты • Востребованность выпускников </span>
        </div>

      </div>
    </div>

    <div className='container'>
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

      <div className="education-wrap">
        <p className="education-header">ЧТО ВАС ЖДЕТ ПО ОКОНЧАНИЮ ОБУЧЕНИЯ</p>
        <span className="education-underline"></span>
        <div className="education-card-block">
          <div className="education-card-wrap">
            <div className="education-card-icon-wrap">
              <span className="education-card-icon-medal"></span>
            </div>
            <p className="education-card-text card-width">Нам постоянно поступают заявки от лучших салонов города Бишкек, с предложением рабочих мест для наших студентов</p>
          </div>

          <div className="education-card-wrap">
            <div className="education-card-icon-wrap">
              <span className="education-card-icon-airplane"></span>
            </div>
            <p className="education-card-text">Для желающих работать за границей, мы предоставляем возможность для трудоустройства в такие страны, как: ОАЭ, Кувейт, Катар и другие</p>
          </div>
        </div>
      </div>

      <div className="our-courses">
        <p className="our-courses-header">НАШИ ПОПУЛЯРНЫЕ КУРСЫ</p>
        <p className="our-courses-underline"></p>
        <div className="all-cards-wrap">
          <div className="barber-card-wrap">
            <div className="barber-card-block">
              <p className="barber all-cards-header">Курс</p>
              <p className="barber all-cards-subheader">БАРБЕР</p>
              <p className="barber all-cards-text">13 занятий</p>
              <p className="barber all-cards-price">15 000 сом</p>
            </div>
              <span className="barber-card-img"></span>
          </div>
          <div className="massage-card-wrap">
            <div className="massage-card-block">
              <p className="massage all-cards-header">Базовый курс</p>
              <p className="massage all-cards-subheader">МАССАЖА</p>
              <p className="massage all-cards-text">10 занятий</p>
              <p className="massage all-cards-price">8 000 сом</p>
            </div>
              <span className="massage-card-img"></span>
          </div>
          <div className="hairdresser-card-wrap">
            <div className="hairdresser-card-block">
              <p className="hairdresser all-cards-header">Курс</p>
              <p className="hairdresser all-cards-subheader">ПАРИКМАХЕР УНИВЕРСАЛ</p>
              <p className="hairdresser-text all-cards-text">26 занятий  </p>
              <p className="hairdresser all-cards-price">20 000 сом</p>
            </div>
              <span className="hairdresser-card-img"></span>
          </div>
          <div className="visagiste-card-wrap">
            <div className="visagiste-card-block">
                <p className="visagiste all-cards-header">Курс</p>
                <p className="visagiste all-cards-subheader">ВИЗАЖИСТ</p>
                <p className="visagiste all-cards-text">10 занятий</p>
                <p className="visagiste all-cards-price">10 000 сом</p>
              </div>
                <span className="visagiste-card-img"></span>
          </div>
        </div>

      </div>
    </div>
    </>
  );
};

export default MainPage;