import React from 'react'
import { Accordion } from 'react-bootstrap';
import InputPriceRange from '../../components/input_price_range';
import { ListItemsFilter } from '../../components/list_items_filter'
import {SEX} from '../../data/data';

export const Sidebar = () => {
	return (
		<aside className='sidebar-filter'>
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
						<InputPriceRange max={30000} min={50} onChange={() => {}} />
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
		</aside>
	)
}
