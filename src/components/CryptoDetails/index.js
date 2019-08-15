import React, { Component } from 'react';
import DataList from './DataList';
import { connect } from 'react-redux';
import { formatMoney } from '../helper/helper';
import * as CryptocurrenyInfo from '../../actions/cryptocurrencyInfo.action';

class CryptoDetails extends Component {
  constructor(props) {
    super(props);
    if(!this.props.cryptocurrency) {
      this.props.dispatch(CryptocurrenyInfo.getCryptocurrency(this.props.match.params.id));
    };
    this.getStatisticsData = this.getStatisticsData.bind(this);
    this.getExternalSources = this.getExternalSources.bind(this);
  }
  render() {
    return(
      <div style={{paddingBottom: '40%'}}>
        <DataList
          data={this.props.location.state.currency}
          cryptoData={this.props.cryptocurrency || {}}
          statistics={this.getStatisticsData()}
          externalSource={this.getExternalSources()} />
      </div>
    );
  }
  getStatisticsData() {
    const stats = this.props.location.state.currency;
    return [
      {
        label: 'Market Rank',
        value: stats.cmc_rank
      },
      {
        label: 'Category',
        value: this.props.cryptocurrency.category
      },
      {
        label: 'Price',
        value: formatMoney(stats.quote.USD.price, 0)
      },
      {
        label: 'Market Cap',
        value: formatMoney(stats.quote.USD.market_cap, 0)
      },
      {
        label: 'Curculating Supply',
        value: stats.circulating_supply === null ? 'Unknown' : stats.circulating_supply + ' ' + stats.symbol
      },
      {
        label: 'Total Supply',
        value: stats.total_supply === null ? 'Unknown' : stats.total_supply + ' ' + stats.symbol
      },
      {
        label: 'Max Supply',
        value: stats.max_supply === null ? 'Unknown' : stats.max_supply + ' ' + stats.symbol
      },
      {
        label: '24 hours volume',
        value: formatMoney(stats.quote.USD.volume_24h, 0)
      },
      {
        label: '1 hour Percent Change',
        value: stats.quote.USD.percent_change_1h === null?
                'Insufficient data' :
                stats.quote.USD.percent_change_1h + '%'
      },
      {
        label: '24 hours Percent Change',
        value: stats.quote.USD.percent_change_24h === null?
                'Insufficient data' :
                stats.quote.USD.percent_change_24h + '%'
      },
      {
        label: '7 days Percent Change',
        value: stats.quote.USD.percent_change_7d === null?
                'Insufficient data' :
                stats.quote.USD.percent_change_7d + '%'
      },
      {
        label: 'Date Added',
        value: stats.date_added === null? 'Unknown' : stats.date_added.substring(0, 10)
      },
      {
        label: 'Mineability',
        value: stats.tags.length !== 1? 'Unknown' :  stats.tags[0]
      }
    ];
  }
  getExternalSources() {
    let websites = [];
    if(this.props.cryptocurrency.urls && Object.keys(this.props.cryptocurrency.urls).length > 0) {
      Object.keys(this.props.cryptocurrency.urls).map(
        key => websites = websites.concat(this.props.cryptocurrency.urls[key]));
    }
    return websites;
  }
}

function mapStateToProps(state) {
  return {
    cryptocurrency: state.cryptocurrencyInfo
  };
}

export default connect(mapStateToProps) (CryptoDetails);
