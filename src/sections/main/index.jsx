import React from 'react'
import { Container } from 'react-bootstrap'
import { Sidebar } from '../sidebar'
import { Filter } from '../../components/filter'
import ProductList from '../product_list'

const Main = () => {
  return (
    <main className='main'>
      <Container >

        <h1 className='title-h1 main__h1 margin-bottom-30px'>Каталог одягу</h1>

        <Filter />

        <div className='wrapper-content d-flex'>
          <Sidebar />

          <ProductList />
        </div>

      </Container>
    </main>
  );
};

export default Main;