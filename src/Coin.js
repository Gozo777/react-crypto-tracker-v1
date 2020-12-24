import React from 'react';
import './Coin.css';

export const Coin = (props) => {
  return (
    <div className='coin-container'>
      <div className='coin-row'>
        <div className='coin'>
          <img src={props.image} alt='crypto' />
          <h1>{props.name}</h1>
          <p className="coin-symbol">{props.symbol}</p>
        </div>
        <div className="coin-data">
          <p className="coin-price">${props.price}</p>
          <p className="coin-volume">${props.total_volume.toLocaleString()}</p>
          {props.price_change_percentage_24h < 0 ? (
            <p className="coin-percent red">{props.price_change_percentage_24h.toFixed(2)}%</p>
          ) : (
            <p className="coin-percent green">{props.price_change_percentage_24h}%</p>
          )
          }
          <p className="coin-marketcap">
            Mkt Cap: ${props.market_cap.toLocaleString()}
          </p>
        </div>
      </div>
    </div>
  )
}

export default Coin