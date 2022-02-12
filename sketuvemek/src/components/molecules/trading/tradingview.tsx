
import React from "react";

import { Ticker, CopyrightStyles } from "react-ts-tradingview-widgets";

import { ITradingViewProps } from "./ITradingView";

const TradingView = (): JSX.Element => {

  const styles: CopyrightStyles = {
    parent: {
      fontSize: "24px",
      color: "red",
    },
    link: {
      textDecoration: "line-trough",
    },
    span: {
      color: "darkblue",
    },
  };

  React.useEffect(() => {
  }, []);

  return (
    <>
      <div className="tradingview-widget-container">
        <Ticker colorTheme="dark" copyrightStyles={styles} />
      </div>
    </>
  )
}

export default TradingView;