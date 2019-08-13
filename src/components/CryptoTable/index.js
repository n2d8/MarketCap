import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableHead from '@material-ui/core/TableHead';
import TableCell from '@material-ui/core/TableCell';
import TableFooter from '@material-ui/core/TableFooter';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import FirstPageIcon from '@material-ui/icons/FirstPage';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import LastPageIcon from '@material-ui/icons/LastPage';

class CryptoTable extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    if(this.props.listing) {
      return(
        <Paper>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell align="left">Market Cap</TableCell>
                <TableCell align="left">Price</TableCell>
                <TableCell align="left">Circulating Supply</TableCell>
                <TableCell align="left">Volume (24h)</TableCell>
                <TableCell align="left">Change (24h)</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {this.props.listing.map(crypto => (
                <TableRow key={crypto.id}>
                  <TableCell component="th" scope="row">
                    {crypto.name}
                  </TableCell>
                  <TableCell align="left">${crypto.quote.USD.market_cap}</TableCell>
                  <TableCell align="left">${crypto.quote.USD.price}</TableCell>
                  <TableCell align="left">{crypto.circulating_supply + ' ' + crypto.symbol}</TableCell>
                  <TableCell align="left">${crypto.quote.USD.volume_24h}</TableCell>
                  <TableCell align="left">{crypto.quote.USD.percent_change_24h}%</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Paper>
      )
    } else {
      return(
        <div />
      )
    }
  }
}

export default CryptoTable;
