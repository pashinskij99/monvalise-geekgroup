import React from 'react';

import Pagination, { bootstrap5PaginationPreset } from 'react-responsive-pagination';

const PaginationComponent = ({count}) => {

  return (
    <Pagination
      className='pagination-component'
      {...bootstrap5PaginationPreset}
      current={1}
      total={count}
      onPageChange={() => {}}
      previousLabel='Попередня'
      nextLabel='Наступна'
    />

  );
};

export default PaginationComponent;