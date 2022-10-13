import React from 'react';
import { Card } from 'react-bootstrap';
import { Spinner } from '../../../components/spinner';
import location_icon from '../../../assets/icons/location.svg';
import clsx from 'clsx';
import { useDispatch } from 'react-redux';
import { fetchProduct } from '../../../store/product';
import { ReactComponent as LikeSvg } from '../../../assets/icons/like.svg'
import { likeProducts } from '../../../store/products';

const ProductItem = ({id, src, alt, brand, name, before, after, city, user_icon, status, setOpen, like, top}) => {

  const dispatch = useDispatch()

  const handleOpenPopup = () => {
    document.body.style.overflow = 'hidden'

    dispatch(fetchProduct(id))

    setOpen(true)
  }

  return (
    <Card className='product-card'>
      <Card.Header className='product-card__img-wrapper'>
        <Card.Img src={src} alt={alt} onClick={() => handleOpenPopup()}/>
        <button className={clsx('btn like', like && 'like_active')} onClick={() => dispatch(likeProducts(id))}>
          <LikeSvg />
        </button>
        {
          top &&
          <span className='top'>Топ</span>
        }
      </Card.Header>
      <Card.Body className='product-card__body'>
        <Card.Title 
          onClick={() => handleOpenPopup()} 
          className='product-card__title title d-flex flex-column align-items-start'
        >
          <span className='brand'>{brand}</span>
          <span className='product-name'>{name}</span>
        </Card.Title>
        <Card.Footer className='product-card__description d-flex justify-content-between'>
          <div className={clsx('price d-flex align-items-start', before ? 'flex-column' : 'flex-column-reverse') }>
            <span className='price__before-sale'>
              {before && before + ' ₴'}
            </span>
            <span className='price__after-sale'>
              {after + ' ₴'}
            </span>
          </div>
          <div className='place d-flex flex-column align-items-end'>
            <span className='city d-flex align-items-center'>
              <img src={location_icon} alt="city"/>
              <span>{city}</span>
            </span>
            <span className='store d-flex align-items-center'>
              <img src={user_icon} alt="user image"/>
              <span>pashinskij99</span>
            </span>
          </div>
        </Card.Footer>
      </Card.Body>
      <div className={clsx('product-card__loading', status === 'loading' && 'product-card__loading_active')}>
        <Spinner />
      </div>
    </Card>
  );
};

export default ProductItem;