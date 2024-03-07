import { useEffect, useRef, useState, memo } from 'react';
import '/src/index.css';

function Ethereum() {
  const container = useRef();

  const [activeTab, setActiveTab] = useState('Overview');

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };
  
  useEffect(() => {
    if (!document.getElementById("tradingViewScript")) {
      const script = document.createElement("script");
      script.id = "tradingViewScript";
      script.src =
        "https://s3.tradingview.com/external-embedding/embed-widget-symbol-overview.js";
      script.type = "text/javascript";
      script.async = true;
      script.innerHTML = `
        {
          "symbols": [
            [
              "COINBASE:ETHUSD|1D"
            ]
          ],
          "chartOnly": false,
          "width": "100%",
          "height": "100%",
          "locale": "in",
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
          "changeMode": "price-and-percent",
          "chartType": "area",
          "maLineColor": "#2962FF",
          "maLineWidth": 1,
          "maLength": 9,
          "lineWidth": 2,
          "lineType": 0,
          "dateRanges": [
            "1d|1",
            "1m|30",
            "3m|60",
            "6m|120",
            "12m|1D",
            "all|1M"
          ]
        }`;
      container.current.appendChild(script);
    }
  }, []);

  return (
    <div ref={container} className="tradingview-widget-container" >
      <div className="tradingview-widget-container__widget"></div>
      <div className="tradingview-widget-copyright">
        <a href="https://www.tradingview.com/" rel="noopener nofollow" target="_blank">
          <span className="blue-text">Track all markets on TradingView</span>
        </a>
      </div>
      <div className='Details my-3 py-3'>
        <div className="flex justify-center">
          <button className={`mr-4 ${activeTab === 'Overview' ? 'text-blue-500 font-bold' : 'text-gray-500'}`} onClick={() => handleTabChange('Overview')}>Overview</button>
          <button className={`mr-4 ${activeTab === 'Fundamentals' ? 'text-blue-500 font-bold' : 'text-gray-500'}`} onClick={() => handleTabChange('Fundamentals')}>Fundamentals</button>
          <button className={`mr-4 ${activeTab === 'News' ? 'text-blue-500 font-bold' : 'text-gray-500'}`} onClick={() => handleTabChange('News')}>News Insight</button>
          <button className={`mr-4 ${activeTab === 'Sentiments' ? 'text-blue-500 font-bold' : 'text-gray-500'}`} onClick={() => handleTabChange('Sentiments')}>Sentiments</button>
          <button className={`mr-4 ${activeTab === 'Team' ? 'text-blue-500 font-bold' : 'text-gray-500'}`} onClick={() => handleTabChange('Team')}>Team</button>
          <button className={`mr-4 ${activeTab === 'Technicals' ? 'text-blue-500 font-bold' : 'text-gray-500'}`} onClick={() => handleTabChange('Technicals')}>Technicals</button>
          <button className={`mr-4 ${activeTab === 'Tokenomics' ? 'text-blue-500 font-bold' : 'text-gray-500'}`} onClick={() => handleTabChange('Tokenomics')}>Tokenomics</button>
        </div>
        <div className="mt-4">
          {activeTab === 'Overview' && (
                <div>
                <h2>Overview</h2>
                <p>This is the overview section.</p>
                </div>
            )}
          {activeTab === 'Fundamentals' && (
                <div>
                <h2>Fundamentals</h2>
                <p>This is the fundamental section.</p>
                </div>
            )}
          {activeTab === 'News' && (
                <div>
                <h2>News</h2>
                <p>This is the News section.</p>
                </div>
            )}
          {activeTab === 'Sentiments' && (
                <div>
                <h2>Sentiments</h2>
                <p>This is the Sentiments section.</p>
                </div>
            )}
          {activeTab === 'Team' && (
                <div>
                <h2>Team</h2>
                <p>This is the Team section.</p>
                </div>
            )}
          {activeTab === 'Technicals' && (
                <div>
                <h2>Technicals</h2>
                <p>This is the Technicals section.</p>
                </div>
            )}
          {activeTab === 'Tokenomics' && (
                <div>
                <h2>Tokenomics</h2>
                <p>This is the Tokenomics section.</p>
                </div>
            )}
        </div>
      </div>
    </div>
  );
}

export default memo(Ethereum);
