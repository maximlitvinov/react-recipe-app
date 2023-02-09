import React from 'react';

import style from './Card.module.scss';
import IconTimeOutline from '../../../../assets/icons/IconTimeOutline';
import IconLocationFood from '../../../../assets/icons/IconLocationFood';

const Card = ({ recipe, index }) => {
  return (
    <div className={style.card}>
      <div className={style.info__block}>
        <img className={style.img} src={recipe.image} alt="" />
        <div className={style.title}>{recipe.title}</div>
        <div className={style.subtitle}>
          <div>
            <i className={style.icon__time}>
              <IconTimeOutline />
            </i>
            Ready in: {recipe.readyInMinutes} minutes
          </div>
          <div>
            <span>
              <i className={style.icon__food}>
                <IconLocationFood />
              </i>
              Type: {recipe.dishTypes[0]}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
