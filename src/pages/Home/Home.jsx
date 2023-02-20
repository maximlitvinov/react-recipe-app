import React, { useEffect, useState } from 'react';

import Card from './components/Card/Card';
import Tabs from './components/Tabs/Tabs';
import IconSearch from '../../assets/icons/IconSearch';
import style from './Home.module.scss';

const Home = () => {
  const [recipe, setRecipe] = useState([]);
  const [valueSearch, setValueSearch] = useState('');
  const [activePage, setActivePage] = useState(style.list);
  const pages = [1, 2, 3];

  const apiKey = 'cf0da3ccec3b4c6a89fe48aeb8ee8f6a';

  async function fetchData() {
    await fetch(
      `https://api.spoonacular.com/recipes/random?apiKey=${apiKey}&number=8&tags=vegetarian,meal`,
    )
      .then((response) => response.json())
      .catch((err) => console.log('Error:', err))
      .then((data) => setRecipe(data.recipes));
    //setRecipe(data.results)
  }

  useEffect(() => {
    fetchData();
  }, []);

  //Search Function
  // useEffect(() => {
  //   const fetchRecipes = async () => {
  //     await fetch(
  //       `https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&number=10&query=${valueSearch}`,
  //     )
  //       .then((response) => response.json())
  //       .then((data) => console.log(data.results));
  //   };
  //   fetchRecipes();
  // }, [valueSearch]);
  function getActivePage(index) {
    setActivePage(index);
  }

  return (
    <div className={style.home}>
      <div className={style.home__wrapper}>
        <div className={style.search}>
          <input
            className={style.input__search}
            type="text"
            placeholder="Search your favorite recipe"
            value={valueSearch}
            onChange={(event) => setValueSearch(event.target.value.toLowerCase())}
          />
          <i onClick={() => setValueSearch((prev) => (prev = ''))} className={style.icon__search}>
            <IconSearch />
          </i>
        </div>
        <Tabs />
        <div className={style.cards}>
          {recipe.map((recipe, index) => (
            <Card recipe={recipe} key={index} />
          ))}
        </div>
      </div>
      <ul className={style.pages}>
        {pages.map((page, index) => (
          <li
            className={activePage === index ? style.active__page : style.list}
            key={index}
            onClick={() => getActivePage(index)}>
            {page}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
