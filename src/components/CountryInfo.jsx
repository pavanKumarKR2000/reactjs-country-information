import React,{useContext} from 'react'
import  { AppContext } from '../App';
import { BsX } from "react-icons/bs";
const CountryInfo = () => {

    const { handleModalClose, selectedCountry } = useContext(AppContext);
    console.log(selectedCountry);
    
  return (
      <div className='country-info' onClick={(e)=>e.stopPropagation()}>
          <div className="country-info__title">
                <div className='basic-info__name'>
                  <h1>{selectedCountry.name.common}</h1>
                </div>
                <button onClick={handleModalClose}><BsX/></button>
          </div>
          <div className='basic-info'>
            <div className='country-info__img-container'>
                <img src={selectedCountry.flags.png} />
            </div>

            <div className='basic-info-text'>
                <div className='basic-info__capital'>
                      <span>Capital</span><span>{selectedCountry.capital[0]}</span>
                </div>
                <div className='basic-info__region'>
                      <span>Continent</span><span>{selectedCountry.region}</span>
                </div>
                <div className='basic-info__currency'>
                      <span>Currency</span><span>{selectedCountry.currencies[Object.keys(selectedCountry.currencies)[0]]["name"]}</span>
                </div>
                <div className='basic-info__population'>
                      <span>Population</span><span>{selectedCountry.population}</span>
                </div>
                <div className='basic-info__area'>
                    <span>Area</span><span>{selectedCountry.area} sqkm</span>
                </div>
                <div className='basic-info__latitude'>
                    <span>Latitude</span><span>{selectedCountry.latlng[0]}</span>
                </div>
                <div className='basic-info__longitude'>
                    <span>Longitude</span><span>{selectedCountry.latlng[1]}</span>
                </div>
                <div className='basic-info__landlocked'>
                      <span>Ladlocked</span><span>{`${selectedCountry.landlocked ? "true" : "false"}`}</span>
                </div>
               
                
          </div>
          </div>
          
      </div>
  )
}

export default CountryInfo;