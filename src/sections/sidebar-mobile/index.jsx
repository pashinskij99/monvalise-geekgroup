import React from 'react';

import {Accordion} from 'react-bootstrap';
import InputPriceRange from '../../components/input_price_range';
import {ListItemsFilter} from '../../components/list_items_filter';

import {ReactComponent as ArrowBackSvg} from '../../assets/icons/arrow_down.svg';
import {SEX} from '../../data/data';

const SidebarMobile = ({setOpen}) => {
  return (
    <aside className='sidebar-mobile' onClick={() => setOpen(false)}>
      <div className='sidebar-mobile__body' onClick={(event) => event.stopPropagation()}>
        <div className='sidebar-mobile__header'>
          <button className='btn d-flex align-items-center' onClick={() => setOpen(false)}>
            <ArrowBackSvg />
            <h2 className='title-h2'>Фільтри</h2>
          </button>
        </div>
        <div className='sidebar-mobile__main'>
          <Accordion className='sidebar-filter__accordion'>
            <Accordion.Item className='sidebar-filter__item' eventKey="1">
              <Accordion.Header className='sidebar-filter__header'>Категорії</Accordion.Header>
              <Accordion.Body className='sidebar-filter__body'>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
          <Accordion className='sidebar-filter__accordion' defaultActiveKey='1'>
            <Accordion.Item className='sidebar-filter__item' eventKey="1">
              <Accordion.Header className='sidebar-filter__header'>Ціна</Accordion.Header>
              <Accordion.Body className='sidebar-filter__body'>
                <InputPriceRange max={30000} min={50} />
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
          <Accordion className='sidebar-filter__accordion' >
            <Accordion.Item className='sidebar-filter__item' eventKey="1">
              <Accordion.Header className='sidebar-filter__header'>Продавець</Accordion.Header>
              <Accordion.Body className='sidebar-filter__body'>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
          <Accordion className='sidebar-filter__accordion' >
            <Accordion.Item className='sidebar-filter__item' eventKey="1">
              <Accordion.Header className='sidebar-filter__header'>Бренд</Accordion.Header>
              <Accordion.Body className='sidebar-filter__body'>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
          <Accordion className='sidebar-filter__accordion' defaultActiveKey='1'>
            <Accordion.Item className='sidebar-filter__item' eventKey="1">
              <Accordion.Header className='sidebar-filter__header'>Стать</Accordion.Header>
              <Accordion.Body className='sidebar-filter__body'>
                <ListItemsFilter items={SEX} />
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
          <Accordion className='sidebar-filter__accordion' >
            <Accordion.Item className='sidebar-filter__item' eventKey="1">
              <Accordion.Header className='sidebar-filter__header'>Розмір</Accordion.Header>
              <Accordion.Body className='sidebar-filter__body'>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
          <Accordion className='sidebar-filter__accordion' >
            <Accordion.Item className='sidebar-filter__item' eventKey="1">
              <Accordion.Header className='sidebar-filter__header'>Колір</Accordion.Header>
              <Accordion.Body className='sidebar-filter__body'>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
          <Accordion className='sidebar-filter__accordion' >
            <Accordion.Item className='sidebar-filter__item' eventKey="1">
              <Accordion.Header className='sidebar-filter__header'>Матеріал</Accordion.Header>
              <Accordion.Body className='sidebar-filter__body'>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
          <Accordion className='sidebar-filter__accordion' >
            <Accordion.Item className='sidebar-filter__item' eventKey="1">
              <Accordion.Header className='sidebar-filter__header'>Сезон</Accordion.Header>
              <Accordion.Body className='sidebar-filter__body'>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
          <Accordion className='sidebar-filter__accordion' >
            <Accordion.Item className='sidebar-filter__item' eventKey="1">
              <Accordion.Header className='sidebar-filter__header'>Стиль</Accordion.Header>
              <Accordion.Body className='sidebar-filter__body'>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
      </div>
    </aside>
  );
};

export default SidebarMobile;