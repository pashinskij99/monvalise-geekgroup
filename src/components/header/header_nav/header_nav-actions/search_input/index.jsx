import React from 'react';
import { ReactComponent as SearchSvg } from '../../../../../assets/icons/search-icon.svg'

const HeaderInputSearch = () => {
  return (
    <div className='header-nav-search header-nav-actions-offset'>
      <input className='header-nav-search__input' type="text" placeholder='Знайти речі або бренди' />
      <SearchSvg className='header-nav-search__input-icon' />
    </div>
  );
};

export default HeaderInputSearch;