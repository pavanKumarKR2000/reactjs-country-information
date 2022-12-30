import { useContext } from "react";
import App, { AppContext } from "../App";
import { BsArrowRight } from "react-icons/bs";

const Navbar = () => {

    const { setInputCountry,inputCountry, handleFilter,error,handleGetAllCountries } = useContext(AppContext);

    return (
      <nav className="nav">
          <div className="nav-center">
              <div className="nav-center__title">
                 <h1>Country Info</h1> 
              </div>
              <div className="nav-center__search-form-container">
                  <form className="nav-center__search-form">
                        <input
                            type="text"
                            className="nav-center__search-input"
                            placeholder="search for a country"
                            autoComplete="off"
                            value={inputCountry}
                            onChange={(e) => setInputCountry(e.target.value)}
                        />
                        <button
                            type="submit"
                            className="nav-center__search-btn"
                            onClick={(e)=>handleFilter(e)}
                            disabled={!inputCountry}
                        >
                          <BsArrowRight/>
                      </button> 
                  </form>
                </div>
                <div className="nav-center__all-country-btn-container">
                    <button onClick={handleGetAllCountries}>All</button>
                </div>
                <div className={`nav-center__error-message ${error?"show":"hide"}`}>
                    <p>please enter valid country name</p>
                </div>
          </div>
      </nav>
  )
}

export default Navbar;