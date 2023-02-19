import React from 'react';

import style from './Recipe.module.scss';
const Recipe = () => {
  return (
    <div className={style.container}>
      <div className={style.img}>
        <img
          className={style.img__recipe}
          src="https://d1sve9khgp0cw0.cloudfront.net/wp-content/uploads/2022/07/TnuIO7SFeYV03YQCpucl-I9Rdxo.jpg"
          alt="dish"
        />
      </div>
      <div className={style.wrapper}>
        <h2 className={style.recipe__title}>Nashville Fried Chicken</h2>
        <p className={style.recipe__description}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, reprehenderit error. Vel
          recusandae perferendis architecto iure, molestias quibusdam iste deserunt, mollitia
          tenetur minima neque aspernatur? Error dolores nihil eos voluptate! Quibusdam laborum quo
          doloremque nesciunt.
        </p>
        <h3 className={style.recipe__indgridients}>Ingridients</h3>
        <ul className={style.ingridients_list}>
          <li>Whole Chicken</li>
          <li>Potato</li>
          <li>Carrot</li>
          <li>Orange</li>
        </ul>
      </div>
    </div>
  );
};

export default Recipe;
