import React from 'react'
import { ListGroup } from 'react-bootstrap'
import { Popup } from '../../../../../popup'
import { Spinner } from '../../../../../spinner'

export const HeaderNavLikePopup = ({open, setOpen, likedProducts, likedProductsStatus}) => {
	return (
		<Popup setOpen={setOpen} open={open}>
			<div className='like-popup'>
				<ListGroup className='like-popup__list'>
					{likedProductsStatus === 'loading' && <Spinner />}
					{
						likedProducts.length &&
						likedProductsStatus === 'resolved' && 
						likedProducts.map(({brand, name, id, image: {src, alt}, price: {after}}) => (
							<ListGroup.Item key={id} className='like-popup__list-item d-flex mb-2'>
								<img className='like-popup__image' src={src} alt={alt} />
								<h4 className='like-popup__title d-flex flex-column margin-left-10px'>
									<span className='like-popup__brand'>{brand}</span>
									<span className='like-popup__name'>{name}</span>
									<span className='like-popup__price'>{after}</span>
								</h4>
							</ListGroup.Item>
					))}
				</ListGroup>
			</div>
		</Popup>
	)
}
