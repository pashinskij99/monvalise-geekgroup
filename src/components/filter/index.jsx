import React, {useState} from 'react'
import SidebarMobile from '../../sections/sidebar-mobile';
import clsx from "clsx";
import { FilterSelect } from './filter-select';

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
					<FilterSelect />
				</div>
			</div>
		</div>
	)
}
