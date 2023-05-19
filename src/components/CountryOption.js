import React from "react"
const CountryOption = ({index, country}) =>{
 


    return (
    <option value={index} >{country.name.common} {country.flag}</option>
    )
}

export default CountryOption