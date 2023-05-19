// import './CountryDetail.css';

const CountryDetail = ({country}) => {

    return (
      <div className="country-detail">
        The capital of {country.name.common} is 
        {country.capital} population is {country.population}, 
        drives on {country.car.side} and the flag is  
        
        <img src={country.flags.png} width='80' height='45'/>
      </div>
    )
}
  
export default CountryDetail;