import React from 'react';
import PropTypes from 'prop-types';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';

const header = [
  { id: 'name', numeric: false, disablePadding: false, label: 'Name' },
  { id: 'cap', numeric: true, disablePadding: false, label: 'Market Cap' },
  { id: 'price', numeric: true, disablePadding: false, label: 'Price' },
  { id: 'supply', numeric: true, disablePadding: false, label: 'Circulating Supply' },
  { id: 'volume', numeric: true, disablePadding: false, label: 'Volume (24h)' },
  { id: 'change', numeric: true, disablePadding: false, label: 'Change (24h)' }
];

const CryptoTableHeader = ({classes, order, orderBy,rowCount, onRequestSort}) => {
    const createSortHandler = property => event => {
      onRequestSort(event, property);
    };

    return (
      <TableHead>
        <TableRow>
          {header.map(row => (
            <TableCell
              key={row.id}
              align={row.numeric ? 'right' : 'left'}
              padding={row.disablePadding ? 'none' : 'default'}
              sortDirection={orderBy === row.id ? order : false}
            >
              <TableSortLabel
                active={orderBy === row.id}
                direction={order}
                onClick={createSortHandler(row.id)}
              >
                {row.label}
                {orderBy === row.id ? (
                  <span className={classes.visuallyHidden}>
                    {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                  </span>
                ) : null}
              </TableSortLabel>
            </TableCell>
          ))}
        </TableRow>
      </TableHead>
    );
  }

  CryptoTableHeader.propTypes = {
    classes: PropTypes.object.isRequired,
    onRequestSort: PropTypes.func.isRequired,
    order: PropTypes.oneOf(['asc', 'desc']).isRequired,
    orderBy: PropTypes.string.isRequired,
    rowCount: PropTypes.number.isRequired,
  };

  export default CryptoTableHeader;
