import React, { useState } from 'react'
import { Form, InputGroup } from 'react-bootstrap'

export const FilterSelect = () => {

	const [ value, setValue ] = useState('За замовчуванням')

	return (
		<InputGroup className='filter-select'>
			<Form.Control className='filter-select__input' value={value} readOnly/>
			<Form.Select 
				className='filter-select__select' 
				aria-label='Default select example' 
				onChange={(event) => setValue(event.target.value)}
			>
				<option value="За замовчуванням">За замовчуванням</option>
				<option value="Новинки">Новинки</option>
				<option value="Від дешевих до дорогих">Від дешевих до дорогих</option>
				<option value="Від дорогих до дешевих">Від дорогих до дешевих</option>
			</Form.Select>
		</InputGroup>
	)
}
