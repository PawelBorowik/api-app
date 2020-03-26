import React, { useState } from "react";
import "./App.css";

function App() {
  const [countries, setCountries] = useState([]);
  const [selectItem, setSelectItem] = useState("");

  const API = "https://restcountries.eu/rest/v2/";

  const handleDataFetch = () => {
    fetch(API)
      .then(response => {
        if (response.ok) {
          return response;
        }
        throw Error("bbbb");
      })
      .then(response => response.json())
      .then(data => {
        setCountries(data);
      })
      .catch(error => console.log(error));
  };
  const handleChangeSelect = e => {
    setSelectItem(e.target.value);
  };

  const showCountries = countries.map(country => (
    <option key={country.name} value={country.name}>
      {country.name}
    </option>
  ));

  const selectedCountry = countries.filter(
    country => country.name === selectItem
  );
  const flag = selectedCountry.map(selectCountry => (
    <div key={selectCountry.name}>
      <img src={selectCountry.flag} alt={selectCountry.alpha3Code}></img>
      <p>{selectCountry.name}</p>
      <p>({selectCountry.nativeName})</p>
      <p>Capital city: {selectCountry.capital}</p>
    </div>
  ));

  return (
    <div className="App">
      <header className="App-header">
        {handleDataFetch()}
        <select onChange={handleChangeSelect}>
          <option value="">Select country:</option>
          {showCountries}
        </select>
        <div className="flag">{flag}</div>
      </header>
    </div>
  );
}

export default App;
