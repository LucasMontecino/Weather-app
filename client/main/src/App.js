import React, { useState } from 'react';
import './App.css';
import axios from 'axios';
import Cards from './components/Cards.jsx';
import Nav from './components/Nav.jsx';
require('dotenv').config();
const { apiKey } = process.env;



function App() {
  const onSearch = (ciudad) => {
    axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}&units=metric`)
    .then((response) => 
    {setCities([...cities, response.data])
    console.log(cities)}
  )};
  
  const onClose = (id) => {
    setCities((cities) => cities.filter((c) => c.id !== id));
  };

  const [cities, setCities] = useState([]);

  return (
    <div className="App">
        <div>
          <Nav onSearch={onSearch}></Nav>
        </div>

        <div><Cards cities={cities} onClose={onClose}/></div>
    </div>
  );
}

export default App;
