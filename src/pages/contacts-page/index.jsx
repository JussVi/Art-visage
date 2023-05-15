import React from 'react';
import './style.css'

const Contacts = () => {
  return (
      <div>
        <h2 className='contact-page-title'>Контакты</h2>
        <div className="contact-page-contacts-block">
          <div className="contact-page-contact">
            <span className='contact-page-write-to-us'>
              Написать нам на почту
            </span>
            <div className="contact-page-social-network-icon google-mail" />
            <a href="/" className="contact-page-link-to-feedback">Написать</a>
          </div>
          <div className="contact-page-contact center-block">
            <span className='contact-page-write-to-us'>
              Написать нам в Instagram
            </span>
            <div className="contact-page-social-network-icon instagram-direct" />
            <a href="/" className="contact-page-link-to-feedback">Написать</a>
          </div>
          <div className="contact-page-contact">
            <span className='contact-page-write-to-us'>
              Написать нам на WhatsApp
            </span>
            <div className="contact-page-social-network-icon whatsapp-sms" />
            <a href="/" className="contact-page-link-to-feedback">Написать</a>
          </div>
        </div>
        <div className="contact-page-location">
          <h2 className="contact-page-location-title">Где мы находимся?</h2>
        </div>
      </div>

  );
};

export default Contacts;