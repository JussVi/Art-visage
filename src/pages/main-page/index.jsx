import React from 'react';
import './style.css'

const MainPage = () => {
  return (
    <div className='container'>
      <div className='main-page-block'>
        <h1 className='main-page-header'>Школа парикмахерского искусства</h1>
        <h2 className='main-page-subheader'>Студия Арт Визаж</h2>
        <p className='main-page-text'>Добро пожаловать в Студия Арт Визаж!</p>
        <button className='main-page-button'>Записаться на курс</button>
      </div>
    </div>
  );
};

export default MainPage;