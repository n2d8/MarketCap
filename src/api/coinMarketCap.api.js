export function getCryptocurrencyInfo(id) {
  return new Promise((resolve, reject) => {
    fetch('/info?id=' + id + '&CMC_PRO_API_KEY=dd3640d7-16f5-4d04-a0e9-0c27391c7a33').then(res => {
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
    fetch('/listings/latest?start=1&limit=5000&convert=USD&CMC_PRO_API_KEY=dd3640d7-16f5-4d04-a0e9-0c27391c7a33').then(res => {
      if(!res.ok) {
        reject(res);
      }
      resolve(res.json());
    }).catch(err => {
      reject(err.message);
    });
  });
}
