import React from 'react';
import HeaderBtnLanguage from "./header_btn-language";
import HeaderNavList from "./header_nav-list";
import HeaderProfile from "./header_profile";
import HeaderBtnAddProduct from "./header_btn-add-product";
import HeaderInputSearch from "./search_input";

const HeaderNavActions = () => {
  return (
    <div className='header-nav-actions d-flex align-items-center justify-content-between'>

      <HeaderInputSearch />

      <HeaderBtnAddProduct />

      <HeaderBtnLanguage />

      <HeaderNavList />

      <HeaderProfile />

    </div>
  );
};

export default HeaderNavActions;