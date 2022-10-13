import React, {useEffect} from 'react'
import { Container } from 'react-bootstrap'
import { Sidebar } from '../sidebar'
import { Filter } from '../../components/filter'
import ProductList from '../product_list'
import { Spinner } from '../../components/spinner'
import { useSelector, useDispatch } from 'react-redux'
import {fetchProducts} from '../../store/products';



const Main = () => {
  const dispatch = useDispatch()

  const { products } = useSelector(state => state.products)

  useEffect(() => {
    dispatch(fetchProducts())
  }, [dispatch])

  return (
    <main className='main'>
      <Container >

        <h1 className='title-h1 main__h1 margin-bottom-30px'>Каталог одягу</h1>

        <Filter />

        <div className='wrapper-content d-flex'>
          <Sidebar />
          {
            products.length === 0 
            ? <div className='wrapper-content__spinner'>
                <Spinner />
              </div>
            : <ProductList />
          }
        </div>

      </Container>
    </main>
  );
};

export default Main;