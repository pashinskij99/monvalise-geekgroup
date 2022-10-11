import React from 'react'
import { ListItem } from './list_item'

export const ListItemsFilter = ({ items }) => {
	return (
		<ul className='list-items-filter d-flex flex-column align-items-start'>
			{items.map(({text, count}, i) => (
				<ListItem key={i} text={text} count={count} />
			))}
		</ul>
	)
}
