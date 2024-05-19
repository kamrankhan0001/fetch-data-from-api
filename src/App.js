// src/App.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import TableRow from './TableRow';
import './App.css';

const App = () => {
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    const fetchCoins = async () => {
      try {
        const response = await axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false');
        setCoins(response.data);
      } catch (error) {
        console.error('Error fetching the coin data:', error);
      }
    };

    fetchCoins();
  }, []);

  return (
    <div className="App">
      <table>
        <thead>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Symbol</th>
            <th>Current Price</th>
            <th>Total Volume</th>
          </tr>
        </thead>
        <tbody>
          {coins.map(coin => (
            <TableRow key={coin.id} data={coin} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default App;
