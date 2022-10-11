import clsx from 'clsx'
import React, {useState} from 'react'

export const ListItem = ({text, count, i}) => {

	const [checked, setChecked] = useState(false)

	const handleClassChecked = (event) => {
		event.preventDefault()
		setChecked(prevState => !prevState)
	}

	return (
		<li key={i} className='list-items-filter__item d-flex'>
			<a onClick={handleClassChecked} className={clsx('list-items-filter__link', checked && 'list-items-filter__link_checked')} href="#">
				{text}
			</a>
			<span className='list-items-filter__count'>({count})</span>
		</li>
	)
}
