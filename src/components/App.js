import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../styles/App.css';
import * as MarketCapActions from '../actions/marketCap.actions';
import CssBaseline from '@material-ui/core/CssBaseline';
import { MuiThemeProvider, createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';

let theme = createMuiTheme();
theme = responsiveFontSizes(theme);

class App extends Component {
  constructor(props) {
    super(props);
    if(! this.props.listings) {
      this.props.dispatch(MarketCapActions.getCoinListing());
    }
  }
  render() {
    return(
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
      </MuiThemeProvider>
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
