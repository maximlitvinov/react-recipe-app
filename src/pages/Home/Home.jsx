import React, { useEffect, useState } from 'react';
import Card from './components/Card/Card';
import Search from './components/Search/Search';
import Tabs from './components/Tabs/Tabs';

import style from './Home.module.scss';

const Home = () => {
  const [recipe, setRecipe] = useState([]);
  const apiKey = 'cf0da3ccec3b4c6a89fe48aeb8ee8f6a';
  // const cards = [
  //   {
  //     id: 1,
  //     title: 'Nasi Goring',
  //     time: '25 min',
  //     img: 'https://www.seriouseats.com/thmb/x7GelfL9GltWlPXnD9fwOSTKHJU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/nasi-goreng-recipe-hero-03-b871cfba57fa4272bb2cf4e900879a79.JPG',
  //     rate: '4,2',
  //   },
  //   {
  //     id: 2,
  //     title: 'Nasi Limak',
  //     time: '35 min',
  //     img: 'https://asianinspirations.com.au/wp-content/uploads/2019/04/R02156_Mums-NasiLemak.jpg',
  //     rate: '4,5',
  //   },
  //   {
  //     id: 3,
  //     title: 'La Mian',
  //     time: '45 min',
  //     img: 'https://media-cdn.tripadvisor.com/media/photo-s/16/60/c4/fd/soupe-de-lamian.jpg',
  //     rate: '4,1',
  //   },
  //   {
  //     id: 4,
  //     title: 'Chao Mian',
  //     time: '55 min',
  //     img: 'https://thewoksoflife.com/wp-content/uploads/2014/12/shanghai-fried-noodles-11.jpg',
  //     rate: '4,3',
  //   },
  // ];

  function fetchData() {
    fetch(
      `https://api.spoonacular.com/recipes/random?apiKey=${apiKey}&number=8&tags=vegetarian,dessert`,
    )
      .then((response) => response.json())
      .then((data) => setRecipe(data.recipes)); //setRecipe(data.results)
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className={style.home}>
      <div className={style.wrapper}>
        <div className={style.sub_title}>Welcome to</div>
        <div className={style.title}> Recipe World</div>
      </div>
      <Search />
      <Tabs />
      <div className={style.cards}>
        {recipe.map((recipe, index) => (
          <Card recipe={recipe} key={index} />
        ))}
      </div>
      <ul className={style.pages}>
        <li className={style.list}>1</li>
        <li className={style.list}>2</li>
        <li className={style.list}>3</li>
      </ul>
    </div>
  );
};

export default Home;
