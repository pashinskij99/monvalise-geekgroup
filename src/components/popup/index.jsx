import React from 'react'
import clsx from 'clsx'

export const Popup = ({open, setOpen, children}) => {

	const handleClosePopup = () => {
		document.body.style.overflow = 'auto'

		setOpen(false)
	}

	return (
		<div className={clsx('popup', open ? 'popup_active' : '')} onClick={handleClosePopup}>
      <div className={clsx('popup__content', open ? 'popup__content_active' : '')} onClick={e => e.stopPropagation()}>
        {children}
      </div>
    </div>
	)
}
