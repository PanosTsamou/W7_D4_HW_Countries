import React from 'react';
import './ListItem.css';

const ListItem = ({country, borderCountries, removeFavCountry}) => {

  const handleClick = function() {
    
    removeFavCountry(country)
  }

  return <li >{country.name.common} It borders with: {borderCountries ? borderCountries.map((country) => country.name.common).join(', ') : 'No countries found'}  <button onClick={handleClick}>Remove</button> </li>
}

export default ListItem;