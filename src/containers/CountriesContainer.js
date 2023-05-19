import React, { useState, useEffect } from 'react';
import CountryList from '../components/CountryList';
import CountrySelect from '../components/CountrySelect';
import './CountriesContainer.css';
import CountryDetail from '../components/CountryDetail';
import FavCountryButton from '../components/FavCountryButton';

const CountryContainer = () => {
    const [countries, setCountries] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState(null);
    const [favCountries, setFavCountries] = useState([])


    useEffect(() => {
        getCountries();
        // setTotalPopulation(countries.reduce((total, countryPopulation) => total + countryPopulation.population, 0))
    }, [])

    const getCountries = function(){
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(countries => setCountries(countries))
        // setTotalPopulation(countries.reduce((total, countryPopulation) => total + countryPopulation.population, 0))
    }

    const onCountryClicked = function(country) {
    
        setSelectedCountry(country)
    
    }

    const favCountryOnClick = (country) =>{
        if (!favCountries.includes(country)){

            const newFavCountries = [...favCountries, country]
            setFavCountries(newFavCountries)
        }
    }
    const removeFavCountry = (removedCountry) => {
        const nextFavCountries = favCountries.filter(country => country !== removedCountry)
        setFavCountries(nextFavCountries)
      }

    return (
        <div>
            <div className="main-container">
                <CountrySelect countries={countries} onCountrySelect={onCountryClicked} />
                {selectedCountry ? <CountryDetail country={selectedCountry}/> : null }
            </div>
            <FavCountryButton country={selectedCountry} favCountryOnClick={favCountryOnClick}/>
            <h2>Total Population: {countries.reduce((total, countryPopulation) => total + countryPopulation.population, 0)}</h2>
            <h2>Fav Countries</h2>
            <CountryList countries={favCountries} allCountries={countries} removeFavCountry={removeFavCountry}/>
        </div>
    )
}

export default CountryContainer;
