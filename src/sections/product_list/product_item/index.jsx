import React from 'react';
import { Card } from 'react-bootstrap';
import location_icon from '../../../assets/icons/location.svg';

const ProductItem = ({src, alt, brand, name, before, after, city, user_name, user_icon}) => {
  return (
    <Card className='product-card'>
      <Card.Header className='product-card__img-wrapper'>
        <Card.Img src={src} alt={alt}/>
      </Card.Header>
      <Card.Body className='product-card__body'>
        <Card.Title className='product-card__title title d-flex flex-column align-items-start'>
          <span className='brand'>{brand}</span>
          <span className='product-name'>{name}</span>
        </Card.Title>
        <Card.Footer className='product-card__description d-flex justify-content-between'>
          <div className='price d-flex flex-column align-items-start'>
            <span className='price__before-sale'>
              {before}
            </span>
            <span className='price__after-sale'>
              {after}
            </span>
          </div>
          <div className='place d-flex flex-column align-items-end'>
            <span className='city d-flex align-items-center'>
              <img src={location_icon} alt="city"/>
              <span>{city}</span>
            </span>
            <span className='store d-flex align-items-center'>
              <img src={user_icon} alt="user image"/>
              <span>{user_name}</span>
            </span>
          </div>
        </Card.Footer>
      </Card.Body>
    </Card>
  );
};

export default ProductItem;