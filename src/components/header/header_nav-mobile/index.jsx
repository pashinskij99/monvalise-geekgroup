import React from 'react'
import {Accordion, Form} from 'react-bootstrap'
import {ReactComponent as LogoSvg} from '../../../assets/icons/monvalise.svg'
import profile_img from '../../../assets/images/header/profile.jpeg'

import {ReactComponent as HeartSvg} from "../../../assets/icons/heart.svg"
import {ReactComponent as MessageSvg} from "../../../assets/icons/message.svg"
import {ReactComponent as BasketSvg} from "../../../assets/icons/basket.svg"
import {ReactComponent as GoogleAppSvg} from "../../../assets/icons/google-play.svg"
import {CATEGORY} from "../../../data/data";

const arrLinks = [
  {
    name: 'Довідка для покупців',
    links: [
      'Отримати підтримку',
      'Як купувати',
      'Як залишити корисний відгук',
      'Як залишити корисний відгук',
      'Рекомендації з безпечних покупок',
    ]
  },
  {
    name: 'Довідка для продавців',
    links: [
      'Як почати продавати',
      'Тарифи',
      'Угода користувача',
      'Політика конфіденційності',
      'Правила користування порталом',
      'Бонусна програма',
    ]
  },
  {
    name: 'Про нас',
    links: [
      'Довідка та FAQ',
      'Захист легальності контенту',
      'Адміністрація',
      'Вакансії',
    ]
  }
]

const HeaderMobile = ({setOpen}) => {

  return (
    <div className='header-mobile' onClick={() => setOpen(false)}>

      <div className="header-mobile__body" onClick={(event) => event.stopPropagation()}>

        <div className='header-mobile__header d-flex flex-column align-items-center'>
          <div className='logo d-flex align-items-center justify-content-between margin-bottom-20px'>
            <LogoSvg />
            <button onClick={() => setOpen(false)} className='btn logo__close'>&#10006;</button>
          </div>

          <a href='#' className='profile d-flex align-items-center'>
            <img className='profile__img' src={profile_img} alt='profile img' />
            <div className='profile__description'>
              <span className='name'>Пашинський Ярослав</span>
              <p className='email'>pashinskij99@icloud.com</p>
            </div>
          </a>
        </div>

        <div className="header-mobile__main">

          <nav className='category'>
            <ul className='category__list'>
              {
                CATEGORY.map(item => (
                  <li key={item} className='category__item'>
                    <a href="#">{item}</a>
                  </li>
                ))
              }
            </ul>
          </nav>

          <div className='user-action-list d-flex flex-column'>
            <a href="#">
              <HeartSvg />
              <span>Оборонне</span>
            </a>
            <a href="#">
              <MessageSvg />
              <span>Повідомлення</span>
            </a>
            <a href="#">
              <BasketSvg />
              <span>Кошик</span>
            </a>
          </div>

          <div className='language d-flex align-items-center'>
            <Form.Select className='language__select'>
              <option value="1">Укр</option>
              <option value="2">En</option>
            </Form.Select>
          </div>

          <ul className='help-info'>
            {arrLinks.map(({name, links}, i) => (
              <Accordion className='accordion' key={i} defaultActiveKey="0">
                <Accordion.Item className='accordion__item' eventKey='1'>
                  <Accordion.Header className='accordion__header'>{name}</Accordion.Header>
                  <Accordion.Body className='accordion__body d-flex flex-column'>
                    {links.map((item, i) => (
                      <a key={i} href='src/components/header/header_nav-mobile/index#'>
                        {item}
                      </a>
                    ))}
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            ))}
          </ul>
          
        </div>
        <div className='header-mobile__footer'>
          <div className='mob-app'>
            <p>Мобільний додаток</p>
            <a href="#">
              <GoogleAppSvg />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderMobile;