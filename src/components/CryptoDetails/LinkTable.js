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
    width: '45%',
    marginTop: theme.spacing(3),
    float: 'left',
    overflowX: 'auto'
  },
  title: {
    margin: theme.spacing(2)
  },
  table: {
    minWidth: 350,
  },
}));

const LinkTable = ({data, subtitle}) => {
  const classes = useStyles();
  console.log(data);
  return (
    <Paper className={classes.root}>
      <Typography className={classes.title} variant="h4" id="subtitle">
        {subtitle}
      </Typography>
      <Divider />
      <Table className={classes.table}>
        <TableBody>
          {data.map(url => (
            <TableRow key={url} onClick={() => { window.open(url, '_blank') }} hover >
              <TableCell component="th" scope="row">{url}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}

LinkTable.propTypes = {
  data: PropTypes.array.isRequired,
  subtitle: PropTypes.string.isRequired
};

export default LinkTable;
