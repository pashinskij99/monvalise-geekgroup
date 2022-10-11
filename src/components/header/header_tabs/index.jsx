import React from 'react';
import clsx from 'clsx';
import {CATEGORY} from "../../../data/data";

const HeaderTabs = () => {
  return (
    <nav className='header-tabs'>
      <ul className='header-tabs__list d-flex align-items-center'>
        {CATEGORY.map((item, i) => (
          <li key={item} className={clsx(
            'header-tabs__item',
            i === 1 && 'header-tabs__item_active'
          )}>
            {item}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default HeaderTabs;