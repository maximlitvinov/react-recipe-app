import React from 'react';

import style from './Tabs.module.scss';

const Tabs = () => {
  // function getActiveTab() {
  //   console.log(category);
  // }

  const categories = ['Meals', 'Desserts', 'Side Dish', 'Drinks & Beverages'];
  return (
    <div className={style.tabs}>
      <div className={style.tabs__wrapper}>
        {categories.map((category, index) => (
          <div
            className={style.active__category}
            key={index}
            onClick={() => {
              console.log(index, category);
            }}>
            {category}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tabs;
