import * as Key from './apiKey';

export function getMarketCapListing() {
  const options = {
    headers: {
      'X-CMC_PRO_API_KEY': Key.COIN_MARKET_CAP_API_KEY
    }
  };
  return new Promise((resolve, reject) => {
    fetch('/listings/latest?start=1&limit=5000&convert=USD', options).then(res => {
      console.log('API call response:', res);
      if(!res.ok) {
        reject(res);
      }
      resolve(res.json());
    }).catch(err => {
      console.log('API call error:', err.message);
      reject(err.message);
    });
  });
}
