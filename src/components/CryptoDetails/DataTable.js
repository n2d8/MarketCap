import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import PropTypes from 'prop-types';

const useStyles = makeStyles(theme => ({
  root: {
    width: '50%',
    marginTop: theme.spacing(3),
    float: 'right',
    overflowX: 'auto'
  },
  title: {
    margin: theme.spacing(2)
  },
  table: {
    minWidth: 350,
  },
}));

const DataTable = ({data, subtitle}) => {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <Typography className={classes.title} variant="h4" id="subtitle">
        {subtitle}
      </Typography>
      <Divider />
      <Table className={classes.table}>
        <TableBody>
          {data.map(row => (
            <TableRow key={row.label}>
              <TableCell component="th" scope="row">{row.label}</TableCell>
              <TableCell align="left">{row.value}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}

DataTable.propTypes = {
  data: PropTypes.array.isRequired,
  subtitle: PropTypes.string.isRequired
};

export default DataTable;
