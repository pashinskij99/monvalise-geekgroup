import React, {useState} from 'react';
import ProductItem from './product_item';
import PaginationComponent from '../../components/pagination';
import {useSelector} from 'react-redux';
import userIcon from '../../assets/images/header/profile.jpeg' 

import { ProductPopup } from './product_popup';

const ProductList = () => {

  const [open, setOpen] = useState(false)

  const { products, status } = useSelector(state => state.products)



  return (
    <div>
      <ul className='product-list d-grid'>
      { products.map(({
          id,
          image: {src, alt},
          brand,
          name,
          price: {before, after},
          organic,
          top,
          like,
          place}
        ) => (
          <ProductItem
            key={id}
            id={id}
            src={src}
            alt={alt}
            brand={brand}
            name={name}
            before={before}
            after={after}
            city={place}
            status={status}
            user_icon={userIcon}
            organic={organic}
            top={top}
            like={like}
            setOpen={setOpen}
          />
        )) }
      </ul>
      <PaginationComponent count={8} />
      
      <ProductPopup setOpen={setOpen} open={open} />

    </div>

  );
};

export default ProductList;