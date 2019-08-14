import React, { Component } from 'react';
import DataList from './DataList';
import { connect } from 'react-redux';
import { formatMoney, toDecimalPlace } from '../helper/helper';
import * as CryptocurrenyInfo from '../../actions/cryptocurrencyInfo.action';

class CryptoDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cryptocurrency: {}
    };
    if(Object.keys(this.state.cryptocurrency).length === 0) {
      this.props.dispatch(CryptocurrenyInfo.getCryptocurrency(this.props.match.params.id)).then(() => {

        this.setState({
          cryptocurrency: this.props.cryptocurrency
        });
      });
    };
    this.getStatisticsData = this.getStatisticsData.bind(this);
    this.getGeneralData = this.getGeneralData.bind(this);
    this.getExternalSources = this.getExternalSources.bind(this);
  }
  render() {
    return(
      <div>
        <DataList
          data={this.props.location.state.currency}
          general={this.getGeneralData()}
          statistics={this.getStatisticsData()}
          externalSource={this.getExternalSources()} />
      </div>
    );
  }
  getStatisticsData() {
    const stats = this.props.location.state.currency;
    return [
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
        value: stats.circulating_supply + ' ' + stats.symbol
      },
      {
        label: 'Total Supply',
        value: stats.total_supply + ' ' + stats.symbol
      },
      {
        label: 'Max Supply',
        value: stats.max_supply + ' ' + stats.symbol
      },
      {
        label: '24 hours volume',
        value: formatMoney(stats.quote.USD.volume_24h, 0)
      },
      {
        label: '1 hour Percent Change',
        value: toDecimalPlace(stats.quote.USD.percent_change_1h, 2)
      },
      {
        label: '24 hours Percent Change',
        value: toDecimalPlace(stats.quote.USD.percent_change_24h, 2)
      },
      {
        label: '7 days Percent Change',
        value: toDecimalPlace(stats.quote.USD.percent_change_7d, 2)
      },
      {
        label: 'Date Added',
        value: stats.date_added
      }
    ];
  }
  getGeneralData() {
    const stats = this.props.location.state.currency;
    return [
      {
        label: 'Market Rank',
        value: stats.cmc_rank
      },
      {
        label: 'Name',
        value: stats.name
      },
      {
        label: 'Mineability',
        value: stats.tags[0]
      }
    ];
  }
  getExternalSources() {
    return [];
  }
}

function mapStateToProps(state) {
  return {
    cryptocurrency: state.cryptocurrencyInfo
  };
}

export default connect(mapStateToProps) (CryptoDetails);
