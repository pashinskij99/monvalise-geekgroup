import React from 'react';
import { Breadcrumb, Container } from 'react-bootstrap'

const BreadCrumb = () => {
  return (
    <Container className='breadcrumb-wrapper'>
      <Breadcrumb className='breadcrumb'>
        <Breadcrumb.Item className='breadcrumb__item' href="#">Головна</Breadcrumb.Item>
        <Breadcrumb.Item className='breadcrumb__item' href="#" active>Каталог одягу</Breadcrumb.Item>
      </Breadcrumb>
    </Container>
  );
};

export default BreadCrumb;