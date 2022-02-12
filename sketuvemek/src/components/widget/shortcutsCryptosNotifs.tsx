
import React from "react";


const TradingView = (): JSX.Element => {


  React.useEffect(() => {
  }, []);

  return (
    <>
        <div className="flex flex-col p-2 w-1/2 m-2">

            <div className="crypto_popup_loose">
                <div>Crypto Logo</div>
                <div className="ml-2">Crypto Name</div>
                <div className="mx-36">Another interresting value</div>
                <div>-20%</div>
            </div>

            <div className="crypto_popup_loose">
                <div>Crypto Logo</div>
                <div className="ml-2">Crypto Name</div>
                <div className="mx-36">Another interresting value</div>
                <div>-20%</div>
            </div>          

            <div className="crypto_popup_gain">
                <div>Crypto Logo</div>
                <div className="ml-2">Crypto Name</div>
                <div className="mx-36">Another interresting value</div>
                <div>+20%</div>
            </div>

            <div className="crypto_popup_loose">
                <div>Crypto Logo</div>
                <div className="ml-2">Crypto Name</div>
                <div className="mx-36">Another interresting value</div>
                <div>-20%</div>
            </div>

        </div>
    </>
  )
}

export default TradingView;