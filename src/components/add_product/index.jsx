import React from 'react'
import clsx from 'clsx'
import { Form, Button } from 'react-bootstrap'
import { postProduct } from '../../store/products';
import { useDispatch } from 'react-redux';
import { numberWithSpaces } from '../../utils/numberWithSpace';

const arrFormInputData = [
	{
		name: 'brand',
		label: "Ім'я бренду",
		placeholder: 'LOUIS VUITTON',
		type: 'text',
	},
	{
		name: 'name',
		label: "Ім'я продукту",
		placeholder: 'Темно-сині джинси Louis Vuitton',
		type: 'text',
	},
	{ name: 'price', label: 'Ціна', placeholder: '3 799', type: 'text' },
	{
		name: 'place',
		label: 'Місто',
		placeholder: 'Херсон',
		type: 'text',
	},
	{
		name: 'image',
		label: 'Зображення',
		placeholder: 'image.jpg',
		type: 'file',
	},
]

const convertToBase64 = (file) => {

	return new Promise((resolve, reject) => {

		const fileReader = new FileReader()
		fileReader.readAsDataURL(file)

		fileReader.onload = () => {
			resolve(fileReader.result)
		}

		fileReader.onerror = (error) => {
			reject(error)
		}

	})

}

const AddProduct = ({ setOpen, open }) => {
	const dispatch = useDispatch()

	const handleClosePopup = () => {
		document.body.style.overflow = 'auto'

		setOpen(false)
	}

	const handleSubmit = async (event) => {
		event.preventDefault()
		const data = {}
		const formData = new FormData(event.target)

		const base64 = await convertToBase64(formData.get('image'))

		data.brand = formData.get('brand')
		data.name = formData.get('name')
		data.place = formData.get('place')
		data.image = {src: base64, alt: data.name}
		data.price = {before: '', after: numberWithSpaces(formData.get('price'))}
		data.organic = formData.get('organic')
		data.top = formData.get('top') === 'on' && new Date().getTime()

		dispatch(postProduct(data))

		event.target.reset()
	}

	return (
		<div
			className={clsx('add-product', open && 'add-product_active')}
			onClick={handleClosePopup}
		>
			<Form
				className='add-product__form form'
				onClick={e => e.stopPropagation()}
				onSubmit={handleSubmit}
			>
				<h2 className='title-h2 margin-bottom-20px text-center'>
					Додати товар
				</h2>
				{arrFormInputData.map(({ name, label, placeholder, type }, i) => (
					<Form.Group key={i} className='form__group margin-bottom-10px'>
						<Form.Label className='form__label'>{label}</Form.Label>
						<Form.Control
							className='form__input'
							type={type}
							name={name}
							placeholder={placeholder}
						/>
					</Form.Group>
				))}
				<Form.Group className='form__group margin-bottom-10px'>
					<Form.Check
						className='form__check margin-bottom-10px'
						name='organic'
						type='switch'
						label='Органічний'
					/>
					<Form.Check
						className='form__check margin-bottom-10px'
						name='top'
						type='switch'
						label='Топ'
					/>
				</Form.Group>
				<Button className='form__button' variant='primary' type='submit'>
					Додати
				</Button>
			</Form>
		</div>
	)
}

export default AddProduct
