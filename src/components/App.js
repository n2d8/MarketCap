import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../styles/App.css';
import * as MarketCapActions from '../actions/marketCap.actions';

class App extends Component {
  constructor(props) {
    super(props);
    if(! this.props.listings) {
      this.props.dispatch(MarketCapActions.getCoinListing());
      // const options = {
      //   headers: {
      //     'X-CMC_PRO_API_KEY': Key.COIN_MARKET_CAP_API_KEY
      //   }
      // };
      // fetch('/listings/latest?start=1&limit=5000&convert=USD', options).then(res => {
      //   console.log('API res', res);
      // }).catch(err => {
      //   console.log('API err', err);
      // });
    }
  }
  render() {
    return(
      <div className="App">
        <header className="App-header">
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log('mapstatetoprops app', state);
  return {
    listings: state.listings
  };
}

export default connect(mapStateToProps) (App);
