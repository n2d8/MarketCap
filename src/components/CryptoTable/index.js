import React from 'react';
import PropTypes from 'prop-types';
import { lighten, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import TableHeader from './TableHeader';
import TableToolbar from './TableToolbar';
import Divider from '@material-ui/core/Divider';
import { toDecimalPlace, sortListings } from '../helper/helper';

const useToolbarStyles = makeStyles(theme => ({
  root: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(1),
  },
  highlight:
    theme.palette.type === 'light'
      ? {
          color: theme.palette.secondary.main,
          backgroundColor: lighten(theme.palette.secondary.light, 0.85)
        }
      : {
          color: theme.palette.text.primary,
          backgroundColor: theme.palette.secondary.dark,
        },
  spacer: {
    flex: '1 1 100%'
  },
  actions: {
    color: theme.palette.text.secondary
  },
  title: {
    flex: '0 0 auto'
  },
}));

const useStyles = makeStyles(theme => ({
  root: {
    width: '90%',
    margin: 'auto',
    marginTop: theme.spacing(3)
  },
  paper: {
    width: '100%',
    marginBottom: theme.spacing(2)
  },
  table: {
    minWidth: 750,
  },
  tableWrapper: {
    overflowX: 'auto'
  },
  visuallyHidden: {
    border: 0,
    clip: 'rect(0 0 0 0)',
    height: 1,
    margin: -1,
    overflow: 'hidden',
    padding: 0,
    position: 'absolute',
    top: 20,
    width: 1
  },
}));

const CryptoTable = ({ order, orderBy, page, rowsPerPage, listings, changeOrder, changePageNumber,
changeRowsPerPage, changeListingOrder, goToPage }) => {
  const emptyRows = rowsPerPage - (listings.length - page * rowsPerPage);
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <TableToolbar
          classes={useToolbarStyles()} />
        <Divider />
        <div className={classes.tableWrapper}>
          <Table
            className={classes.table}
            aria-labelledby="tableTitle"
          >
            <TableHeader
              classes={classes}
              order={order}
              orderBy={orderBy}
              onRequestSort={handleSortRequest}
              rowCount={listings.length}
            />
            <TableBody>
              {sortListings(listings, order, orderBy)
                .slice(page * rowsPerPage, (page * rowsPerPage) + rowsPerPage)
                .map((row, index) => {
                  return (
                    <TableRow
                      hover
                      onClick={() => {goToPage('/currency/' + row.id, row)}}
                      role="checkbox"
                      tabIndex={-1}
                      key={row.name}
                    >
                      <TableCell component="th" id={row.name} scope="row" >
                        {row.name}
                      </TableCell>
                      <TableCell align="right">${toDecimalPlace(row.quote.USD.market_cap, 0).toLocaleString()}</TableCell>
                      <TableCell align="right">${toDecimalPlace(row.quote.USD.price, 2).toLocaleString()}</TableCell>
                      <TableCell align="right">{toDecimalPlace(row.circulating_supply, 0).toLocaleString() + ' ' + row.symbol}</TableCell>
                      <TableCell align="right">${toDecimalPlace(row.quote.USD.volume_24h, 0).toLocaleString()}</TableCell>
                      <TableCell align="right">{toDecimalPlace(row.quote.USD.percent_change_24h, 2)}%</TableCell>
                    </TableRow>
                  );
                })}
              {emptyRows > 0 && (
                <TableRow style={{ height: 49 * emptyRows }}>
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
        <TablePagination
          rowsPerPageOptions={[1, 5, 10, 25, 50, 100]}
          component="div"
          count={listings.length}
          rowsPerPage={rowsPerPage}
          page={page}
          backIconButtonProps={{
            'aria-label': 'previous page',
          }}
          nextIconButtonProps={{
            'aria-label': 'next page',
          }}
          onChangePage={changePageNumber}
          onChangeRowsPerPage={changeRowsPerPage}
        />
      </Paper>
    </div>
  );
  function handleSortRequest(event, field) {
    changeOrder(field);
  }
}

CryptoTable.propTypes = {
  order: PropTypes.oneOf(['asc', 'desc']).isRequired,
  orderBy: PropTypes.string.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
  listings: PropTypes.array.isRequired,
  changeOrder: PropTypes.func.isRequired,
  changePageNumber: PropTypes.func.isRequired,
  changeRowsPerPage: PropTypes.func.isRequired
}

export default CryptoTable;
