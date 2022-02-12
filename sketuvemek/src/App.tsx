import React from 'react';
import logo from './logo.svg';
import './App.css';

import TradingView from './components/molecules/trading/tradingview';

function App() {
  return (
    <div className="App bg-gray-500 h-screen w-screen xl:grid xl:grid-cols-12">
      <div className="xl:grid-cols-8">
        <TradingView/>
      </div>
      <div className="xl:grid-cols-4">
        
      </div>
    </div> 
  );
}

export default App;
