import React, { useState } from 'react'
import AddProduct from '../../../../add_product'

const HeaderBtnAddProduct = () => {
	const [open, setOpen] = useState(false)

	const handleOpenPopup = () => {
		document.body.style.overflow = 'hidden'

		setOpen(true)
	}

	return (
		<>
			<button
				className='btn header-nav-add-product-btn header-nav-actions-offset'
				onClick={handleOpenPopup}
			>
				Додати товар
			</button>
			<AddProduct open={open} setOpen={setOpen} />
		</>
	)
}

export default HeaderBtnAddProduct
