import * as Key from './apiKey';

const options = {
  headers: {
    'X-CMC_PRO_API_KEY': Key.COIN_MARKET_CAP_API_KEY
  }
};

export function getCryptocurrencyInfo(id) {
  return new Promise((resolve, reject) => {
    // const res = {
    //     "status": {
    //         "timestamp": "2019-08-14T18:23:08.825Z",
    //         "error_code": 0,
    //         "error_message": null,
    //         "elapsed": 4,
    //         "credit_count": 1
    //     },
    //     "data": {
    //         "1": {
    //             "urls": {
    //                 "website": [
    //                     "https://bitcoin.org/"
    //                 ],
    //                 "technical_doc": [
    //                     "https://bitcoin.org/bitcoin.pdf"
    //                 ],
    //                 "twitter": [],
    //                 "reddit": [
    //                     "https://reddit.com/r/bitcoin"
    //                 ],
    //                 "message_board": [
    //                     "https://bitcointalk.org"
    //                 ],
    //                 "announcement": [],
    //                 "chat": [],
    //                 "explorer": [
    //                     "https://blockchain.coinmarketcap.com/chain/bitcoin",
    //                     "https://blockchain.info/",
    //                     "https://live.blockcypher.com/btc/",
    //                     "https://blockchair.com/bitcoin",
    //                     "https://explorer.viabtc.com/btc"
    //                 ],
    //                 "source_code": [
    //                     "https://github.com/bitcoin/"
    //                 ]
    //             },
    //             "logo": "https://s2.coinmarketcap.com/static/img/coins/64x64/1.png",
    //             "id": 1,
    //             "name": "Bitcoin",
    //             "symbol": "BTC",
    //             "slug": "bitcoin",
    //             "description": "Bitcoin (BTC) is a consensus network that enables a new payment system and a completely digital currency. Powered by its users, it is a peer to peer payment network that requires no central authority to operate. On October 31st, 2008, an individual or group of individuals operating under the pseudonym \"Satoshi Nakamoto\" published the Bitcoin Whitepaper and described it as: \"a purely peer-to-peer version of electronic cash, which would allow online payments to be sent directly from one party to another without going through a financial institution.\"",
    //             "notice": null,
    //             "date_added": "2013-04-28T00:00:00.000Z",
    //             "tags": [
    //                 "mineable"
    //             ],
    //             "platform": null,
    //             "category": "coin"
    //         }
    //     }
    // }
    // resolve(res);
    fetch('/info?id=' + id, options).then(res => {
      if(!res.ok) {
        reject(res);
      }
      resolve(res.json());
    }).catch(err => {
      reject(err.message);
    });
  });
}

export function getMarketCapListing() {
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
