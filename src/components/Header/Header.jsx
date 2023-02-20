import React from 'react';
import { Link } from 'react-router-dom';

import style from './Header.module.scss';

const Header = () => {
  return (
    <Link to="/" className={style.link}>
      <div className={style.wrapper__text}>
        <div className={style.sub_title}>Welcome to</div>
        <div className={style.title}> Recipe World</div>
      </div>
    </Link>
  );
};

export default Header;
