import { useContext } from "react";
import App, { AppContext } from "../App";
import Navbar from "./Navbar";
import CountryCard from "./CountryCard";

const Home = () => {

    const { filteredCountries } = useContext(AppContext);

  return (
      <>
          <Navbar />
          <div className="countries-card-container">
              {
                  filteredCountries.map((country, index) => {
                      return <CountryCard key={index} {...country} />    
                  })    
              }
          </div>
      </>
  )
}

export default Home;