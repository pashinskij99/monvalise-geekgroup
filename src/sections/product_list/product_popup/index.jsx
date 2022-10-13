import React from 'react'
import { Popup } from '../../../components/popup'
import { useDispatch, useSelector } from 'react-redux'
import { Button, Card, Form, InputGroup } from 'react-bootstrap';
import { Spinner } from '../../../components/spinner';
import { changePriceProducts } from '../../../store/products';
import { numberWithSpaces } from '../../../utils/numberWithSpace'

export const ProductPopup = ({setOpen, open}) => {

	const dispatch = useDispatch()
  const { product, productStatus } = useSelector(state => state.product)


	const onSubmit = (event) => {
		event.preventDefault()

		const formDate = new FormData(event.target)

		dispatch(changePriceProducts({
			id: product.id, 
			price: numberWithSpaces(formDate.get('price'))
		}))

	}

	return (
		<Popup setOpen={setOpen} open={open}>
			{
				productStatus === 'loading' &&
				<Spinner />
			}
			{
				product && 
				productStatus === 'resolved' &&
				<Card className='product-popup'>
					<Card.Img className='product-popup__img' variant="top" src={product.image.src} alt={product.image.alt} />
					<Card.Body className='product-popup__body'>
						<Card.Subtitle className='product-popup__subtitle mb-1'>{product.brand}</Card.Subtitle>
						<Card.Title className='product-popup__title'>{product.name}</Card.Title>
					</Card.Body>
					<Card.Body className='product-popup__body'>
						<Form onSubmit={onSubmit}>
							<InputGroup className="mb-3">
								<Form.Control
									placeholder="Введіть нову ціну"
									name='price' 
									type='text'
									aria-label="Recipient's username"
									aria-describedby='basic-addon2'
								/>
								<Button type='submit' variant='secondary'>Змінити</Button>
							</InputGroup>
						</Form>
					</Card.Body>
					<Card.Body className='product-popup__body'>
						<Button size='lg' variant='danger'>Видалити</Button>
					</Card.Body>
				</Card>
			}
      </Popup>
	)
}
