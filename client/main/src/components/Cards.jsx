import React from 'react';
import Card from './Card';
import style from './Cards.module.css';

export default function Cards({cities, onClose}) {
  // acá va tu código
  // tip, podés usar un map
  return (
    <div>
      
      <div className={style.box}>
      {cities.map(c => {
        return (
          <Card
            max={Math.round(c.main.temp_max)}
            min={Math.round(c.main.temp_min)}
            name={c.name}
            img={c.weather[0].icon}
            onClose={onClose}
            key={c.id}
            id={c.id}
          />
        )
      })}
      </div>
    </div>
  )
};