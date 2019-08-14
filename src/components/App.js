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
      order: 'desc',
      orderBy: 'cap',
      page: 0,
      rowsPerPage: 10,
      listings: []
    };
    if(this.props.listings.length === 0) {
      this.props.dispatch(MarketCapActions.getCoinListing()).then(() => {
        this.setState({
          listings: this.props.listings
        });
      });
    };
    this.changeOrder = this.changeOrder.bind(this);
    this.changePageNumber = this.changePageNumber.bind(this);
    this.changeRowsPerPage = this.changeRowsPerPage.bind(this);
    this.goToPage = this.goToPage.bind(this);
  }
  render() {
    console.log('App renders', this.props);
    return(
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <CryptoTable
          order={this.state.order}
          orderBy={this.state.orderBy}
          page={this.state.page}
          rowsPerPage={this.state.rowsPerPage}
          listings={this.state.listings || []}
          changeOrder={this.changeOrder}
          changePageNumber={this.changePageNumber}
          changeRowsPerPage={this.changeRowsPerPage}
          goToPage={this.goToPage} />
      </MuiThemeProvider>
    );
  }
  changeOrder(orderBy) {
    let order = 'asc';
    if(order === this.state.order) {
      order = 'desc';
    }
    this.setState({
      order: order,
      orderBy: orderBy
    });
  }
  changePageNumber(event, page) {
    this.setState({
      page: page
    });
  }
  changeRowsPerPage(event) {
    this.setState({
      rowsPerPage: event.target.value
    });
  }
  goToPage(route, currencyInfo) {
    this.props.history.push(route, { currency: currencyInfo });
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
