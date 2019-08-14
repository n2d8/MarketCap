export function getMarketCapListing() {
  const options = {
    headers: {
      'X-CMC_PRO_API_KEY': '8ea7e2f7-dae8-4834-9162-6a0787662aa6'
    }
  };
  return new Promise((resolve, reject) => {
    fetch('/api/listings/latest?start=1&limit=5000&convert=USD', options).then(res => {
      console.log('the provided api key', process.env.COIN_MARKET_CAP_API_KEY);
      if(!res.ok) {
        console.log('API call respond but not ok', res);
        reject(res);
      }
      console.log('API call ok', res);
      resolve(res.json());
    }).catch(err => {
      console.log('API call not ok', err);
      reject(err.message);
    });
  });
}
