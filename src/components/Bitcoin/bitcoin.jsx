import { useEffect, useRef, memo } from 'react';
import SubLinks from '../SubLinks';
import Fundamentals from './Performance/Fundamentals';
import Sentiments from './Sentiment';
import About from './About';
import Tokenomics from './Tokenomics';
import TeamCard from '../TeamCard';

function Bitcoin() {
  const container = useRef();
  
  useEffect(
    () => {
      
      const script = document.createElement("script");
      script.src = "https://s3.tradingview.com/external-embedding/embed-widget-symbol-overview.js";
      script.type = "text/javascript";
      script.async = true;
      script.innerHTML = `
        {
          "symbols": [
            [
              "COINBASE:BTCUSD|ALL"              
            ]
          ],
          "chartOnly": false,
          "width": "100%",
          "height": "10%",
          "locale": "en",
          "colorTheme": "light",
          "autosize": true,
          "showVolume": false,
          "showMA": false,
          "hideDateRanges": false,
          "hideMarketStatus": true,
          "hideSymbolLogo": false,
          "scalePosition": "left",
          "scaleMode": "Normal",
          "fontFamily": "-apple-system, BlinkMacSystemFont, Trebuchet MS, Roboto, Ubuntu, sans-serif",
          "fontSize": "10",
          "noTimeScale": false,
          "valuesTracking": "1",
          "changeMode": "no-values",
          "chartType": "line",
          "maLineColor": "#2962FF",
          "maLineWidth": 1,
          "maLength": 9,
          "lineWidth": 3,
          "lineType": 2,
          "dateRanges": [
            "1d|60",
            "1w|60",
            "1m|1D",
            "3m|60",
            "6m|120",
            "12m|1D",
            "all|1M"
          ]
        }`;
      container.current.appendChild(script);
    },
    []
  );

  return (
    
    <div ref={container} className="tradingview-widget-container">
      <h1>Bitcoin Price Chart (USD)</h1>
      <div className='lg:h-[560px] h-[320px]'>
        <div className="tradingview-widget-container__widget" style={{height:"100%", width:"100%"}}></div>
      </div>
      
      
      <SubLinks />
      <Fundamentals />
      <Sentiments />
      <About />
      <Tokenomics />
      <TeamCard />
    </div>
  );
}

export default memo(Bitcoin);
