import React, { useState } from 'react';

import style from './Tabs.module.scss';

const Tabs = () => {
  const [activeTab, setActiveTab] = useState(style.tab);

  function getActiveTab() {
    if (activeTab === style.tab) {
      setActiveTab(style.active__card);
    } else if (activeTab === style.active__card) {
      setActiveTab(style.tab);
    }
  }

  const tabs = [
    {
      id: 1,
      value: 'Meals',
    },
    { id: 2, value: 'Desserts' },
    { id: 3, value: 'Side Dish' },
    { id: 4, value: 'Drinks & Beverages' },
  ];
  return (
    <div className={style.tabs}>
      <div className={style.tabs__wrapper}>
        {tabs.map((tab) => (
          <div className={activeTab} key={tab.id} onClick={getActiveTab}>
            {tab.value}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tabs;
