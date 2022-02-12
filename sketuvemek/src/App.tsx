import React, {useEffect} from 'react';

import axios from "axios";
import TradingView from './components/molecules/trading/tradingview';

import './App.css';



let today: Date = new Date();
const unixTimestampToday: number = Math.floor(today.getTime() / 1000);
let earlierDate: Date = new Date();
earlierDate.setDate(today.getDate() - 3);

const unixTimestampEarlierDate: number = Math.floor(earlierDate.getTime() / 1000);

function App(): JSX.Element {

    useEffect(() => {
        (async () => {
            try {
                const response = await axios.get(`https://api.coingecko.com/api/v3/coins/ethereum/market_chart/range?vs_currency=usd&from=${unixTimestampEarlierDate}&to=${unixTimestampToday}`)
                console.log(response);
            } catch (e) {
                console.log(e);
            }
        })()
    }, [])

    return (
        <div className="App bg-gray-500 h-screen w-screen xl:grid xl:grid-cols-12">
            <div className="xl:grid-cols-8">
                <TradingView/>
            </div>
            <div className="xl:grid-cols-4">

          <div className="bg-gray-200">
            <div className="bg-gray-300 flex">
              <div className="bg-gray-400 p-2 w-1/2">
                <h1>Traiding view, graph...</h1>
              </div>
              <div className="bg-gray-400 flex flex-col p-2 w-1/2">

                <div className="crypto_popup">
                  <div>Crypto Logo</div>
                  <div className="ml-2">Crypto Name</div>
                  <div className="mx-36">Another interresting value</div>
                  <div>-20%</div>
                </div>

                <div className="crypto_popup">
                  <div>Crypto Logo</div>
                  <div className="ml-2">Crypto Name</div>
                  <div className="mx-36">Another interresting value</div>
                  <div>-20%</div>
                </div>          

                <div className="crypto_popup bg-green-400">
                  <div>Crypto Logo</div>
                  <div className="ml-2">Crypto Name</div>
                  <div className="mx-36">Another interresting value</div>
                  <div>+20%</div>
                </div>

                <div className="crypto_popup">
                  <div>Crypto Logo</div>
                  <div className="ml-2">Crypto Name</div>
                  <div className="mx-36">Another interresting value</div>
                  <div>-20%</div>
                </div>

              </div>
            </div>
          </div>
        </div>
    );





}

export default App;
