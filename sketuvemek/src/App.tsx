import React, {useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import axios from "axios";

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
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <p>
                    Edit <code>src/App.tsx</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
        </div>
    );
}

export default App;
