import React, { ReactElement, useEffect, useState } from 'react';
import './App.scss';
import Header from './components/Shared/Header/Header';

const App: React.FC = (): ReactElement => {

  const [newsData, setNewsData] = useState({});

  const url = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=c320241a39ac4e618b598d64a2c4562b';
  // const apiKey = "c320241a39ac4e618b598d64a2c4562b";

  useEffect(() => {
    fetch(url, { method: "GET" })
      .then(resp => resp.json())
      .then(data =>  setNewsData(data))
      .catch(err => console.log(err))
    }, []
  );

  return (
    <div className="app_container">
      <Header></Header>
      <div>{ }</div>
    </div>
  );
}

export default App;
