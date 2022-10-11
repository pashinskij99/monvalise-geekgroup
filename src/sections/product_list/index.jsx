import React from 'react';
import ProductItem from "./product_item";
import {PRODUCTS} from "../../data/data";
import PaginationComponent from "../../components/pagination";

const ProductList = () => {
  return (
    <div>

      <ul className='product-list d-grid'>
        { PRODUCTS.map(({
          image: {src, alt},
          brand,
          name,
          price: {before, after},
          place: {city},
          user: {user_name, user_icon}},
          i
        ) => (
          <ProductItem
            key={i}
            src={src}
            alt={alt}
            brand={brand}
            name={name}
            before={before}
            after={after}
            city={city}
            user_name={user_name}
            user_icon={user_icon}
          />
        )) }
      </ul>

      <PaginationComponent count={8} />

    </div>

  );
};

export default ProductList;