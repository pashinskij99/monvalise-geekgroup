import React from 'react';
import {ReactComponent as HeartSvg} from "../../../../../assets/icons/heart.svg";
import {ReactComponent as MessageSvg} from "../../../../../assets/icons/message.svg";
import {ReactComponent as BasketSvg} from "../../../../../assets/icons/basket.svg";

const HeaderNavList = () => {
  return (
    <nav className='header-nav-action-list header-nav-actions-offset'>
      <ul className='header-nav-action-list__ul-list d-flex align-items-center'>
        <li className='header-nav-action-list__ul-item'>
          <button className='btn header-nav-action-list__ul-item-btn'>
            <HeartSvg />
            <span className='count'>4</span>
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
    </nav>
  );
};

export default HeaderNavList;