import React from 'react';

const Hamburger = ({setOpen}) => {
  return (
    <button className='hamburger' onClick={() => setOpen(prevState => !prevState)}>
      <span/>
      <span/>
      <span/>
    </button>
  );
};

export default Hamburger;