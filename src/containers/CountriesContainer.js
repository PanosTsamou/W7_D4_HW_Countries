import React, { useState, useEffect } from 'react';
import CountryList from '../components/CountryList';
import CountrySelect from '../components/CountrySelect';
import './CountriesContainer.css';
import CountryDetail from '../components/CountryDetail';

const CountryContainer = () => {
    const [countries, setCountries] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState(null);
    // const [totalPopulation, setTotalPopulation] = useState(0)

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

    return (
        <div>
            <div className="main-container">
                <CountrySelect countries={countries} onCountrySelect={onCountryClicked} />
                {selectedCountry ? <CountryDetail country={selectedCountry}/> : null }
            </div>
            <h2>Total Population: {countries.reduce((total, countryPopulation) => total + countryPopulation.population, 0)}</h2>
        </div>
    )
}

export default CountryContainer;
