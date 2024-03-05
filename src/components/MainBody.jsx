import React, { useState, useEffect } from 'react';

function Mainbody() {
  const [selectedCrypto, setSelectedCrypto] = useState(null);
  const [cryptoData, setCryptoData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCryptoData = async () => {
      try {
        const response = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum&vs_currencies=inr,usd&include_24hr_change=true');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        setCryptoData(data);
        setLoading(false);
      } catch (error) {
        setError('Error fetching data');
        setLoading(false);
      }
    };

    fetchCryptoData();
  }, []);

  const handleCryptoSelection = (crypto) => {
    setSelectedCrypto(crypto);
  };

  const handleBackToCryptos = () => {
    setSelectedCrypto(null);
  };

  const get24hChange = (crypto) => {
    if (crypto) {
      const change = Math.abs(crypto.usd_24h_change).toFixed(2);
      return crypto.usd_24h_change > 0 ? <span>▲ {change}%</span> : crypto.usd_24h_change < 0 ? <span>▼ {change}%</span> : null;
    }
    return null;
  };
  

  return (
    <div className='container p-3'>
      <div>
        <p onClick={handleBackToCryptos} className="text-blue-500 cursor-pointer">
          {selectedCrypto ? `Cryptocurrencies > ${selectedCrypto}` : 'Cryptocurrencies'}
        </p>
        {cryptoData && selectedCrypto && (
          <div>
            <p><b>$ {cryptoData[selectedCrypto.toLowerCase()].usd}</b></p>
            <p>₹ {cryptoData[selectedCrypto.toLowerCase()].inr}</p>
            <p> {get24hChange(cryptoData[selectedCrypto.toLowerCase()])} (24H)</p>
          </div>
        )}
      </div>
      {!selectedCrypto && (
        <div className="mt-4">
          <div className="bg-gray-200 p-4 rounded-md">
            <p onClick={() => handleCryptoSelection('Ethereum')} className="cursor-pointer">Ethereum (ETH)</p>            
            <p onClick={() => handleCryptoSelection('Bitcoin')} className="cursor-pointer">Bitcoin (BTC)</p>            
          </div>
        </div>
      )}
    </div>
  );
}

export default Mainbody;