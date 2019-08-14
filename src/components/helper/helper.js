export function toDecimalPlace(num, places) {
  if(Math.abs(num) > 0.01) {
    return +(Math.round(num + 'e+' + places)  + 'e-' + places);
  }
  if(num === null) {
    return '?';
  }
  return num;
}

export function formatMoney(num, dp) {
  return '$' + toDecimalPlace(num, dp).toLocaleString() + ' USD';
}

export function sortListings(array, order, orderBy) {
  const stablizeListing = array.map((element, index) => [element, index] );
  const stablizeCompare = (a, b) => {
    let compareValue = compare(a[0], b[0], orderBy);
    if(order === 'desc') {
      compareValue *= -1;
    }
    if(order !== 0) {
      return compareValue;
    }
    return a[1] - b[1];
  }
  stablizeListing.sort(stablizeCompare);
  return stablizeListing.map((element) => element[0]);
}

function compare(a, b, orderBy) {
  if (retrieveFieldValue(a, orderBy) > retrieveFieldValue(b, orderBy)) {
    return 1;
  }
  if (retrieveFieldValue(a, orderBy) < retrieveFieldValue(b, orderBy)) {
    return -1;
  }
  return 0;
}


function retrieveFieldValue(element, orderBy) {
  switch(orderBy) {
    case 'cap':
      return element.quote.USD.market_cap;
    case 'price':
      return element.quote.USD.price;
    case 'supply':
      return element.circulating_supply;
    case 'volume':
      return element.quote.USD.volume_24h;
    case 'change':
      return element.quote.USD.percent_change_24h;
    default:
      return element.name;
  }
}
