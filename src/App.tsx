import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.scss';
import Header from './components/Shared/Header/Header';

function App() {

  const newsData = [];

  const url = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=c320241a39ac4e618b598d64a2c4562b';
  const apiKey = "c320241a39ac4e618b598d64a2c4562b";

  useEffect(() => {
    fetch(url, { method: "GET" })
      .then(resp => resp.json())
      .then(data => console.log(data))
  }
  );

  return (
    <div className="app_container">
      <Header></Header>
    </div>
  );
}

export default App;
