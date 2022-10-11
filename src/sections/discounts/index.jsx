import React from 'react';
import { DISCOUNTS } from '../../data/data';

const Discounts = () => {

  const {text, icons} = DISCOUNTS

  return (
    <section className='discounts d-flex justify-content-center'>
      <h5 className='discounts__title d-flex align-items-center'>
        {icons.map((link, i) => (
          <img key={i} className={`discounts__title_icon-${i + 1}`} src={link} alt='icon' />
        ))}
        <span className='discounts__title_span margin-left-10px'>{text}</span>
      </h5>
    </section>
  );
};

export default Discounts;