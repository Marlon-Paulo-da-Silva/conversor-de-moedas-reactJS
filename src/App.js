import React from 'react';
import './App.css';
import Conversor from './components/Conversor';

function App() {
  return (
    <div className="App">
      <Conversor moedaA="USD" MoedaB="BRL"></Conversor>

    </div>
  );
}

export default App;
