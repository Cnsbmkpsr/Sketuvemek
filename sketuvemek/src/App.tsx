import React, { useEffect, useState } from "react";
import axios from "axios";
import TradingView from "./components/molecules/trading/tradingview";
import ShortcutsCryptoNotifs from "./components/atoms/widget/shortcutsCryptosNotifs";

import "./App.css";
import {
  CoinInfoState,
  unixTimestampEarlierDate,
  unixTimestampToday,
} from "./constants";

function App(): JSX.Element {
  const [recentCoinsPrices, setRecentCoinsPrices] = useState<
    Array<Array<number>>
  >([]);
  const [recentCoinsVolumes, setRecentCoinsVolumes] = useState<
    Array<Array<number>>
  >([]);
  const [coinInfo, setCoinInfo] = useState<CoinInfoState>({
    image: undefined,
    name: undefined,
    symbol: undefined,
  });
  const dummyPercentageChange = 15;

  useEffect(() => {
    (async () => {
      try {
        const marketChangeResponse = await axios.get(
          `https://api.coingecko.com/api/v3/coins/ethereum/market_chart/range?vs_currency=usd&from=${unixTimestampEarlierDate}&to=${unixTimestampToday}`
        );
        setRecentCoinsPrices(
          marketChangeResponse.data.prices.slice(
            Math.max(marketChangeResponse.data.prices.length - 5, 0)
          )
        );
        setRecentCoinsVolumes(
          marketChangeResponse.data.total_volumes.slice(
            Math.max(marketChangeResponse.data.total_volumes.length - 5, 0)
          )
        );
        const ethResponse = await axios.get(
          `https://api.coingecko.com/api/v3/coins/ethereum`
        );
        const { image, name, symbol } = ethResponse.data;
        setCoinInfo({ ...coinInfo, name, image, symbol });
      } catch (e) {
        console.log(e);
      }
    })();
  }, []);

  return (
    <div className="bg-gray-800  h-screen w-screen xl:grid xl:grid-cols-12">
      <div className="xl:grid-cols-8">
        <TradingView />
      </div>
      <div className="xl:grid-cols-4">
        <div>
          <div className="flex">
            <div className="p-2 w-1/2">
              <h1>Traiding view, graph...</h1>
            </div>
            <ShortcutsCryptoNotifs />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
