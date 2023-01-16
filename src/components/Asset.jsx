import React from 'react';
import './Asset.scss';

const Asset = ({
  name,
  price,
  symbol,
  marketcap,
  volume,
  image,
  priceChange
}) => {
  return (
    <div className='asset-container'>
      <div className='asset-row'>
        <div className='asset'>
          <p className='asset-symbol'>Assets</p>
        </div>
        <div className='asset-data'>
          <p className='asset-price'>Price</p>
            <p className='asset-percent'>24h change</p>
          <p className='asset-marketcap'>
            Market Cap
          </p>
        </div>
      </div>
    </div>
  );
};

export default Asset;