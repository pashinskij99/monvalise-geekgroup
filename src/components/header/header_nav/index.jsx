import React, { useState } from 'react';
import { ReactComponent as LogoSvg } from '../../../assets/icons/monvalise.svg';
import HeaderNavActions from './header_nav-actions'
import Hamburger from '../../hamburger';
import HeaderMobile from '../header_nav-mobile';
import clsx from 'clsx';

const HeaderNav = () => {

  const [open, setOpen] = useState(false)

  return (
    <nav className={clsx('header-nav d-flex align-items-center', open && 'header-nav_hamburger-active')}>

      <LogoSvg className='header-nav__logo' />

      <HeaderNavActions />

      <HeaderMobile setOpen={setOpen} />

      <Hamburger setOpen={setOpen} />

    </nav>
  );
};

export default HeaderNav;