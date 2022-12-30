import React,{ useEffect, useState } from 'react'
import './css/App.css'
import Home from './components/Home';
import Country from './components/Country';
const URL = "https://restcountries.com/v3.1/all?fields=name,currencies,capital,region,languages,latlng,landlocked,area,population,region,flags";
export const AppContext = React.createContext();

function App() {
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [inputCountry, setInputCountry] = useState('');
  const [selectedCountry, setSelectedCountry] = useState();
  const [error, setError] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {

    const fetchList = async () => {
      let InitialResponse = await fetch(URL);
      let finalResponse = await InitialResponse.json();
      setCountries(finalResponse);
      setFilteredCountries(finalResponse);
      };
      
    fetchList();

  }, []);


  const handleFilter = (e) => {
    e.preventDefault();

    let filtered_country = [];
    filtered_country = countries.filter(country => (country.name.common).toLowerCase().includes((inputCountry).toLowerCase()));
      
    
    if (filtered_country.length > 0) {
      setError(false);
      setFilteredCountries(filtered_country);
    }

    else {
      setError(true);
    }
   
    setInputCountry('');
  }

  const handleGetAllCountries = () => {
    setFilteredCountries(countries);
  }

  const handleModalOpen = (name) => {
    setSelectedCountry(countries.find(country=>country.name.common===name));
    setShowModal(true);
  }

  const handleModalClose = () => {
    setShowModal(false);
  }



  const val = {
    filteredCountries,
    countries,
    inputCountry,
    setInputCountry,
    handleFilter,
    error,
    handleGetAllCountries,
    selectedCountry,
    handleModalOpen,
    handleModalClose
  }

  return (
    <>
      <AppContext.Provider value={val}>
        <Home />
        {showModal&&<Country />}
      </AppContext.Provider>  
    </>
  )
}

export default App
