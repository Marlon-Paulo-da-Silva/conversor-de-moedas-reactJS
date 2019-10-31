import React from 'react';
import './App.css';
import Conversor from './components/Conversor';

function App() {
  return (
    <div className="App">

      <Conversor moedaA="USD" moedaB="BRL"></Conversor>
      <Conversor moedaA="BRL" moedaB="USD"></Conversor>

    </div>
  );
}

export default App;
