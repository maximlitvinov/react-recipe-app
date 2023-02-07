import React, { useState } from 'react';

import IconSearch from '../../../../assets/icons/IconSearch';
import style from './Search.module.scss';

const Search = () => {
  const [valueSearch, setValueSearch] = useState('');

  return (
    <div className={style.search}>
      <input
        className={style.input__search}
        type="text"
        placeholder="Search your favorite recipe"
        value={valueSearch}
        onChange={(event) => setValueSearch(event.target.value.toLowerCase())}
      />
      <i className={style.icon__search}>
        <IconSearch />
      </i>
    </div>
  );
};

export default Search;
