import React, { useState } from 'react';

function Mainbody() {
  const [selectedCrypto, setSelectedCrypto] = useState(null);

  const handleCryptoSelection = (crypto) => {
    setSelectedCrypto(crypto);
  };

  const handleBackToCryptos = () => {
    setSelectedCrypto(null);
  };

  return (
    <div>
      {selectedCrypto ? (
        <div>
          <p onClick={handleBackToCryptos} className="text-blue-500 cursor-pointer">
            Cryptocurrencies &gt; {selectedCrypto}
          </p>
        </div>
      ) : (
        <div>
          <p onClick={handleBackToCryptos} className="text-blue-500 cursor-pointer">
            Cryptocurrencies
          </p>
        </div>
      )}
      {!selectedCrypto && (
        <div className="mt-4">
          <div className="bg-gray-200 p-4 rounded-md">
            <p onClick={() => handleCryptoSelection('Ethereum')} className="cursor-pointer">1. Ethereum (ETH)</p>
            <p onClick={() => handleCryptoSelection('Bitcoin')} className="cursor-pointer">2. Bitcoin (BTC)</p>
            <p onClick={() => handleCryptoSelection('Polygon')} className="cursor-pointer">3. Polygon (MATIC)</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Mainbody;
