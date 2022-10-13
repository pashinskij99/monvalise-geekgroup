import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchProducts } from '../../store/products';
import Pagination, { bootstrap5PaginationPreset } from 'react-responsive-pagination';

const PaginationComponent = ({count}) => {

  const [current, setCurrent] = useState(1)

  const dispatch = useDispatch()

  const onPageChange = (page) => {
    dispatch(fetchProducts(page))

    setCurrent(page)
  }

  return (
    <Pagination
      className='pagination-component'
      {...bootstrap5PaginationPreset}
      current={current}
      total={count}
      onPageChange={onPageChange}
      previousLabel='Попередня'
      nextLabel='Наступна'
    />

  );
};

export default PaginationComponent;