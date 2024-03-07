import { useState, useEffect } from 'react';
import Bitcoin from './Bitcoin/bitcoin';
import Ethereum from './Etheruem/ethereum';
import SideContent from './SideContent';
import { BrowserRouter as Router, Route} from 'react-router-dom';

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
    <div className="container mt-20 mx-auto flex p-3">
      <div className="w-2/3 mr-4">
        <div>
            <div className='container my-2 bg-gray-100 py-2'>
                <p onClick={handleBackToCryptos} className="text-blue-500 cursor-pointer">
                    {selectedCrypto ? `Cryptocurrencies > ${selectedCrypto}` : 'Cryptocurrencies'}
                </p>
            </div>
        </div>
        {!selectedCrypto && (
          <div className="mt-4">
            <div className="bg-gray-200 p-4 rounded-md">
              <p onClick={() => handleCryptoSelection('Ethereum')} className="cursor-pointer">Ethereum (ETH)</p>
              <p onClick={() => handleCryptoSelection('Bitcoin')} className="cursor-pointer">Bitcoin (BTC)</p>
            </div>
          </div>
        )}
        {selectedCrypto === 'Ethereum' && <Ethereum />}
        {selectedCrypto === 'Bitcoin' && <Bitcoin />}
      </div>
      <div className="w-1/3">
        <SideContent />
      </div>      
    </div>
  );
}

export default Mainbody;
