import React from 'react';
import HeaderNav from './header_nav';
import HeaderTabs from './header_tabs';
import { Container } from 'react-bootstrap'

const Header = () => {
  return (
    <header className='header'>
      <Container>

        <HeaderNav />

        <HeaderTabs />

      </Container>
    </header>
  );
};

export default Header;