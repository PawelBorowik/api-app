import React, { useState } from 'react';
import './App.css';


function App() {

  const [countries, setCountries] = useState(null)

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




  return (
    <div className="App">
      <header className="App-header">

        ffffddd
      {handleDataFetch()}



      </header>
    </div>
  );
}

export default App;
