import React from 'react';
import { useState } from 'react';

import style from './Tabs.module.scss';

const Tabs = () => {
  const [activeCategory, setActiveCategory] = useState(style.category);
  function getActiveTab(index) {
    setActiveCategory(index);
  }

  const categories = ['Meals', 'Desserts', 'Side Dish', 'Drinks & Beverages'];
  return (
    <div className={style.tabs}>
      <div className={style.tabs__wrapper}>
        {categories.map((category, index) => (
          <div
            className={activeCategory === index ? style.active__category : style.category}
            key={index}
            onClick={() => {
              getActiveTab(index);
            }}>
            {category}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tabs;
