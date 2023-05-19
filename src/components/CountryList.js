import React from 'react';
import ListItem from './ListItem';

const CountryList = ({countries, allCountries, removeFavCountry}) => {

    const countryItems = countries.map((country, index) => {
      return (
      <ListItem 
        country={country} 
        key={index} 
        removeFavCountry ={removeFavCountry}
        borderCountries = {country.borders ? allCountries.filter((countryInCountries) => country.borders.includes(countryInCountries.cca3)) : null}
      />
      )
    })

  return (
    <div>
    <ul>
      {countryItems}
    </ul>
  </div>
  )
}

export default CountryList;