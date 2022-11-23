import React from 'react';
import style from './Card.module.css';

export default function Card({max, min, name, img, onClose, id}) {
  // acá va tu código
  return (
    <div>
      
      <div className={style.box}>
        <div className={style.item}>
          <button onClick={() => onClose(id)} className={style.button1}>X</button>
          <h2>{name}</h2>
          <p>Min: {min}</p>
          <p>Max: {max}</p>
          <img src={`http://openweathermap.org/img/wn/${img}@2x.png`} alt="img not found" className={style.img}/> 
        </div> 
      </div>
    </div>

  
  )
};
