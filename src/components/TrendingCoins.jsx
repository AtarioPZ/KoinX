import { useState, useEffect } from 'react';

function TrendingCoins() {
  const [trendingCoins, setTrendingCoins] = useState([]);

  useEffect(() => {
    const fetchTrendingCoins = async () => {
      try {
        const response = await fetch(
          'https://api.coingecko.com/api/v3/search/trending'
        );
        const data = await response.json();
        const top3Coins = data.coins.slice(0, 3);
        
        const detailedCoins = await Promise.all(
          top3Coins.map(async (coin) => {
            const coinResponse = await fetch(
              `https://api.coingecko.com/api/v3/coins/${coin.item.id}`
            );
            const coinData = await coinResponse.json();
            return {
              ...coin.item,
              icon: coinData.image.small,
              price_btc: coinData.market_data.price_change_percentage_24h_in_currency.btc
            };
          })
        );

        setTrendingCoins(detailedCoins);
      } catch (error) {
        console.error('Error fetching trending coins:', error);
      }
    };

    fetchTrendingCoins();
  }, []);

  return (
    <div>
      <ul>
        {trendingCoins.map((coin) => (
          <li key={coin.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <img src={coin.icon} alt={coin.symbol} width="25" height="25" style={{ marginRight: '10px' }} />{' '}
            {coin.name} ({coin.symbol.toUpperCase()}){' '}
            {coin.price_btc ? (
              <>
                {coin.price_btc > 0 ? (
                  <span style={{ color: 'green' }}>&#9650;</span>
                ) : (
                  <span style={{ color: 'red' }}>&#9660;</span>
                )}
                <span style={{ marginLeft: '5px' }}>{coin.price_btc.toFixed(2)}%</span>
              </>
            ) : (
              <span>N/A</span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TrendingCoins;
