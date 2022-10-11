import React, {useState} from 'react'
import { Form } from 'react-bootstrap'
import SidebarMobile from '../../sections/sidebar-mobile';
import clsx from "clsx";

export const Filter = () => {

	const [open, setOpen] = useState(false)

	return (
		<div className={clsx('filter d-flex align-items-center justify-content-between margin-bottom-20px', open && 'filter_active')}>

			<SidebarMobile setOpen={setOpen} />

			<h2 className='title-h2 filter__h2'>Фільтри</h2>
			<button className='btn filter__btn-mobile title-h2' onClick={() => setOpen(true)}>Фільтри</button>
			<div className='sort d-flex align-items-center'>
				<span className='sort__text'>Сортувати за:</span>
				<div className='sort__select-wrapper'>
					<Form.Select className='sort__select' aria-label='Default select example'>
						<option value="1">За замовчуванням</option>
						<option value="2">Новинки</option>
						<option value="3">Від дешевих до дорогих</option>
						<option value="4">Від дорогих до дешевих</option>
					</Form.Select>
				</div>
			</div>
		</div>
	)
}
