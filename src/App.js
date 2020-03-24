import React, { useState } from 'react';
import './App.css';


function App() {

  const [countries, setCountries] = useState([]);
  const [selectItem, setSelectItem] = useState("")

  const API = "https://restcountries.eu/rest/v2/"

  const handleDataFetch = () => {

    fetch(API)
      .then(response => {
        if (response.ok) {
          return response
        }
        throw Error("bbbb")
      })
      .then(response => response.json())
      .then(data => {

        setCountries(data)
      })
      .catch(error => console.log(error))

  }
  const handleChangeSelect = (e) => {

    setSelectItem(e.target.value)

  }

  const showCountries = countries.map(country => <option key={country.name}
    value={country.name}>{country.name}</option>)






  const flag = countries.filter(item => item.name === selectItem)
  const bbbb = flag.map(item => <img src={item.flag} alt={item.name}></img>)














  return (
    <div className="App">
      <header className="App-header">


        {handleDataFetch()}
        <select onChange={handleChangeSelect}>
          <option value="">Select country:</option>
          {showCountries}
        </select>
        <div className="flag">{bbbb}</div>




      </header>
    </div>
  );
}

export default App;
