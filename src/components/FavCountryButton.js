const FavCountryButton = ({country, favCountryOnClick}) =>{

    const handleFavButton = () =>{
        favCountryOnClick(country)
    }

    return <button onClick={handleFavButton}>Fav Country</button>

}

export default FavCountryButton