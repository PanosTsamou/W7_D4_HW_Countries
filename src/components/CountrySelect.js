import React from "react"
import CountryOption from "./CountryOption"
const CountrySelect = ({countries, onCountrySelect}) => {

        const selectionOfCountries = countries.map((country, index) => {
            return <CountryOption
                    index = {index}
                    country = {country}
                    key = {index}
                    
                    />
        })

        const handleChangeOptions = (event) =>{
            const country = countries[event.target.value]

            onCountrySelect(country)
        }

    return (
    <select onChange = {handleChangeOptions}>
        {selectionOfCountries}
    </select>
    )
}

export default CountrySelect