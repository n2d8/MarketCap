import * as Key from './apiKey';

export function getMarketCapListing() {
  const options = {
    headers: {
      'X-CMC_PRO_API_KEY': Key.COIN_MARKET_CAP_API_KEY
    }
  };
  return new Promise((resolve, reject) => {
    // const res = {
    //   "status": {
    //       "timestamp": "2019-08-12T03:58:14.690Z",
    //       "error_code": 0,
    //       "error_message": null,
    //       "elapsed": 149,
    //       "credit_count": 12
    //   },
    //   "data": [
    //       {
    //           "id": 1,
    //           "name": "Bitcoin",
    //           "symbol": "BTC",
    //           "slug": "bitcoin",
    //           "num_market_pairs": 7803,
    //           "date_added": "2013-04-28T00:00:00.000Z",
    //           "tags": [
    //               "mineable"
    //           ],
    //           "max_supply": 21000000,
    //           "circulating_supply": 17871650,
    //           "total_supply": 17871650,
    //           "platform": null,
    //           "cmc_rank": 1,
    //           "last_updated": "2019-08-12T03:57:31.000Z",
    //           "quote": {
    //               "USD": {
    //                   "price": 11423.4122794,
    //                   "volume_24h": 15184233344.2771,
    //                   "percent_change_1h": -0.0830279,
    //                   "percent_change_24h": 0.290619,
    //                   "percent_change_7d": 0.0694012,
    //                   "market_cap": 204155226063.139,
    //                   "last_updated": "2019-08-12T03:57:31.000Z"
    //               }
    //           }
    //       },
    //       {
    //           "id": 1027,
    //           "name": "Ethereum",
    //           "symbol": "ETH",
    //           "slug": "ethereum",
    //           "num_market_pairs": 5529,
    //           "date_added": "2015-08-07T00:00:00.000Z",
    //           "tags": [
    //               "mineable"
    //           ],
    //           "max_supply": null,
    //           "circulating_supply": 107286739.749,
    //           "total_supply": 107286739.749,
    //           "platform": null,
    //           "cmc_rank": 2,
    //           "last_updated": "2019-08-12T07:32:22.000Z",
    //           "quote": {
    //               "USD": {
    //                   "price": 212.279695554,
    //                   "volume_24h": 6088334674.03843,
    //                   "percent_change_1h": -0.463712,
    //                   "percent_change_24h": 0.92385,
    //                   "percent_change_7d": -8.00362,
    //                   "market_cap": 22774796450.89895,
    //                   "last_updated": "2019-08-12T07:32:22.000Z"
    //               }
    //           }
    //       }
    //     ]
    // }
    // resolve(res);
    fetch('/listings/latest?start=1&limit=5000&convert=USD', options).then(res => {
      if(!res.ok) {
        reject(res);
      }
      resolve(res.json());
    }).catch(err => {
      reject(err.message);
    });
  });
}
