import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../styles/App.css';
import * as MarketCapActions from '../actions/marketCap.actions';
import CssBaseline from '@material-ui/core/CssBaseline';
import { MuiThemeProvider, createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import CryptoTable from './CryptoTable';

let theme = createMuiTheme();
theme = responsiveFontSizes(theme);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listings: this.props.listings || []
    };
    if(this.props.listings.length <= 0) {
      this.props.dispatch(MarketCapActions.getCoinListing()).then(() => {
        this.setState({
          listings: this.props.listings
        });
      });
    }
  }
  render() {
    return(
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <CryptoTable
          listing={this.state.listings || []}/>
      </MuiThemeProvider>
    );
  }
}

function mapStateToProps(state) {
  return {
    listings: state.marketCap.listings
  };
}

App.propTypes = {
  listings: PropTypes.array
};

export default connect(mapStateToProps) (App);
