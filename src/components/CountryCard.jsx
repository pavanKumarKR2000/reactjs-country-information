import React, { useContext } from 'react';
import { AppContext } from '../App';
import {BsArrowRight} from "react-icons/bs";

const CountryCard = ({ name: { common }, flags: { png } }) => {
    
    const { handleModalOpen } = useContext(AppContext);

  return (
      <div className='country-card'>
          <div className='country-card__img-container'>
              <img src={png} alt={common} />
          </div>
          <div className='country_card__country-name'>
              <button className='country_card__country-name-btn' onClick={()=>handleModalOpen(common)}>
                  <div>{common}</div>
                  <div><BsArrowRight /></div>
              </button>
          </div>
      </div>
  )
}

export default CountryCard;