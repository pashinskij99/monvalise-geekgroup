import React from 'react';
import Discounts from '../../sections/discounts';
import Header from '../header';
import BreadCrumb from '../breadcrumb';
import Main from '../../sections/main'
import Footer from '../../sections/footer';

const App = () => {
  return (
    <div className='app'>

      <Discounts />

      <Header />

      <BreadCrumb />

      <Main />

      <Footer />
      
    </div>
  );
};

export default App;