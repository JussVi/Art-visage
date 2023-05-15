import React from 'react';
import './style.css'
import img1 from '../../images/aboutUs-one.JPG'
import img2 from '../../images/aboutUs-two.JPG'

const AboutUs = () => {
  return (
    <div className='aboutUs-page'>
      <h1 className='aboutUs-page-about-us'>О нас</h1>
      <div className='aboutUs-page-content'>
        <div className='aboutUs-page-description'>
          <p className='aboutUs-page-description-first'>«СТУДИЯ АРТ – ВИЗАЖ» - это школа парикмахерского искусства в Бишкеке, которая знает свое дело, помогает приобрести полноценные знания и стать высококвалифицированным и востребованным специалистом.</p>
          <p className='aboutUs-page-description-second'>На рынке образовательных услуг «СТУДИЯ АРТ – ВИЗАЖ» с 2001 года.Единственная в Кыргызстане: Филиалов - нет.</p>
          <p className='aboutUs-page-description-third'>Преподаватели в школе «СТУДИЯ АРТ – ВИЗАЖ» - профессионалы высшего уровня и имеющие опыт преподавания. Выбранная нами методика показала наилучшие результаты, все учащиеся прошедшие курсы в нашей школе парикмахерского искусства освоили весь полученный материал и на отлично прошли практику.</p>
          <p className='aboutUs-page-description-fourth'>Благодаря индивидуальному подходу к каждому ученику успеваемость наших учеников доказывает их востребованность.</p>
          <p className='aboutUs-page-description-fifth'>На период всего обучения школа парикмахерского искусства предоставляет бесплатное обслуживание клиентов, что обеспечивает ежедневную практику и разнообразие парикмахерских услуг для учащихся,Обучение - утреннее, дневное. Групповое и индивидуальное.</p>
          <p className='aboutUs-page-description-sixth'>По окончании курса и успешной сдачи экзаменов:- присваивается квалификации: мастер,- гарантированное трудоустройство .</p>
          <p className='aboutUs-page-description-seventh'>«СТУДИЯ АРТ – ВИЗАЖ» работает по лицензии Министерства Образования Кыргызской Республики Аш 526.</p>
        </div>
        <div className='aboutUs-page-image'>
          <div className='aboutUs-page-image-first'>
            <img src={img1} alt=""/>
          </div>
          <div className='aboutUs-page-image-second'>
            <img src={img2} alt="" />
          </div>
          <div className='aboutUs-page-image-third'></div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;