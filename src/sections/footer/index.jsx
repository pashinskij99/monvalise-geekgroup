import React from 'react';
import {Container} from 'react-bootstrap';
import google_app_icon from '../../assets/icons/google-play.svg'

const buyersList = [
  'Довідка для покупців',
  'Отримати підтримку',
  'Як купувати',
  'Як залишити корисний відгук',
  'Як залишити корисний відгук',
  'Рекомендації з безпечних покупок',
]
const sellersList = [
  'Довідка для продавців',
  'Як почати продавати',
  'Тарифи',
  'Угода користувача',
  'Політика конфіденційності',
  'Правила користування порталом',
  'Бонусна програма',
]
const aboutUsList = [
  'Про нас',
  'Довідка та FAQ',
  'Захист легальності контенту',
  'Адміністрація',
  'Вакансії',
]

const Footer = () => {
  return (
    <footer className='footer'>
      <Container className='footer__container'>
        <nav className='footer-nav'>
          <ul className='footer-nav__list-buyers'>
            {buyersList.map((item, i) => (
              <li key={i}>
                <a href="#">{item}</a>
              </li>
            ))}
          </ul>
          <ul className='footer-nav__list-sellers'>
            {sellersList.map((item, i) => (
              <li key={i}>
                <a href="#">{item}</a>
              </li>
            ))}
          </ul>
          <ul className='footer-nav__list-about-us'>
            {aboutUsList.map((item, i) => (
              <li key={i}>
                <a href="#">{item}</a>
              </li>
            ))}
          </ul>
          <div className='footer-nav__mob-app d-flex flex-column'>
            <span>Мобільний додаток</span>
            <a href="#">
              <img src={google_app_icon} alt="google play app"/>
            </a>
          </div>
        </nav>
        <hr className='footer-hr'/>
        <span className='footer-all-rights-reserved'>© 2022 Monvalise</span>
      </Container>
    </footer>
  );
};

export default Footer;