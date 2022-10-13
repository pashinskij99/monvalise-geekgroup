import React, { useEffect, useState } from 'react';
import {ReactComponent as HeartSvg} from "../../../../../assets/icons/heart.svg";
import {ReactComponent as MessageSvg} from "../../../../../assets/icons/message.svg";
import {ReactComponent as BasketSvg} from "../../../../../assets/icons/basket.svg";
import { HeaderNavLikePopup } from './header_nav-like-popup'
import { useDispatch, useSelector } from 'react-redux';
import { fetchLikedProducts } from '../../../../../store/likedProduct';

const HeaderNavList = () => {

  const [open, setOpen] = useState(false)
  const dispatch = useDispatch()

	const {likedProducts, likedProductsStatus} = useSelector(state => state.likedProducts)

  const handleLikedPopup = () => {
    setOpen(true)

    document.body.style.overflow = 'hidden'
  }

  useEffect(() => {
    dispatch(fetchLikedProducts())
  }, [dispatch])

  return (
    <nav className='header-nav-action-list header-nav-actions-offset'>
      <ul className='header-nav-action-list__ul-list d-flex align-items-center'>
        <li className='header-nav-action-list__ul-item'>
          <button onClick={handleLikedPopup} className='btn header-nav-action-list__ul-item-btn'>
            <HeartSvg />
            {
              likedProducts.length > 0 &&
              <span className='count'>{likedProducts.length}</span>
            }
          </button>
        </li>
        <li className='header-nav-action-list__ul-item'>
          <button className='btn header-nav-action-list__ul-item-btn'>
            <MessageSvg />
            <span className='count count-message'>2</span>
          </button>
        </li>
        <li className='header-nav-action-list__ul-item'>
          <button className='btn header-nav-action-list__ul-item-btn'>
            <BasketSvg />
            <span className='count'>7</span>
          </button>
        </li>
      </ul>

      <HeaderNavLikePopup 
        likedProducts={likedProducts} 
        likedProductsStatus={likedProductsStatus} 
        setOpen={setOpen} 
        open={open} 
      />
    </nav>
  );
};

export default HeaderNavList;