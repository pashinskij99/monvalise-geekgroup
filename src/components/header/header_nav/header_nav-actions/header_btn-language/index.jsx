import React from 'react';
import { Form } from 'react-bootstrap';

const HeaderBtnLanguage = () => {
  return (
    <Form.Select className='header-nav-select-language header-nav-actions-offset' aria-label="Default select example">
      <option className='header-nav-select-language__option' value="1">Укр</option>
      <option className='header-nav-select-language__option' value="2">En</option>
    </Form.Select>
  );
};

export default HeaderBtnLanguage;