import React, { useState } from 'react';
import style from './SearchBar.module.css';

export default function SearchBar({onSearch}) {
  // acá va tu código
  const [searchInput, setSearchInput] = useState("");

  const changeHandler = (event) => {
    setSearchInput(event.target.value);
  };

  return (
    <div>
      <div className={style.box}>
        <div className={style.search}>
          <input type='text' name="search" id="search" placeholder='City...' className={style.input} 
          onChange={changeHandler}/>
          <button onClick={() => onSearch(searchInput)} className={style.button2}>Search</button>
        </div>
      </div>
    </div>
  )
};