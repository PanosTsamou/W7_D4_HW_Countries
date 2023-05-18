// import './CountryDetail.css';

const CountryDetail = ({country}) => {

    return (
      <div className="country-detail">
        The capital of {country.name.common} is 
        {country.capital} population is {country.population}, 
        drives on {country.car.side} flag  
        <img src={country.flags.png}/>
      </div>
    )
}
  
export default CountryDetail;