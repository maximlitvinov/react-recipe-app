import React from 'react';

import style from './Tabs.module.scss';

const Tabs = () => {
  const tabs = [
    {
      value: 'Meals',
    },
    {
      value: 'Desserts',
    },
    {
      value: 'Side Dish',
    },
    {
      value: 'Drinks & Beverages',
    },
  ];
  return (
    <div className={style.tabs}>
      <div className={style.tabs__wrapper}>
        {tabs.map((tab) => (
          <div className={style.tab} key={tab.value}>
            {tab.value}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tabs;
