import React from 'react';
import { Dropdown } from 'react-bootstrap';
import profile_img from '../../../../../assets/images/header/profile.jpeg'
import { ReactComponent as ArrowDownSvg } from '../../../../../assets/icons/arrow_down.svg'

const HeaderProfile = () => {
  return (
    <Dropdown className='header-profile header-nav-actions-offset'>
      <Dropdown.Toggle className='header-profile__toggle'>
        <img className='header-profile__profile-img' src={profile_img} alt="profile_img"/>
        <ArrowDownSvg className='header-profile__arrow-svg margin-left-10px' />
      </Dropdown.Toggle>

      <Dropdown.Menu className='header-profile__dropdown-list'>
        <Dropdown.Item className='header-profile__dropdown-item' href="#/action-1">Action</Dropdown.Item>
        <Dropdown.Item className='header-profile__dropdown-item' href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item className='header-profile__dropdown-item' href="#/action-3">Something else</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default HeaderProfile;