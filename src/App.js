import React from 'react';
import './App.css';

function App() {

  const API = "https://restcountries.eu/rest/v2/all"

  const handleDataFetch = () => {
    fetch(API)
      .then(response => {
        console.log(response)
      })
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
