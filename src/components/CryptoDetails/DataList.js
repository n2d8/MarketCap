import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import DataTable from './DataTable';
import LinkTable from './LinkTable';

const useStyles = makeStyles(theme => ({
  root: {
    width: '90%',
    margin: 'auto',
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3)
  },
  body: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2)
  }
}));

const DataList = ({ data, cryptoData, statistics, externalSource }) => {
  console.log(externalSource);
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography variant="h3" id="aboutTitle">
        {data.name + '(' + cryptoData.symbol + ')'}
      </Typography>
      <Typography className={classes.body} variant="body1">
        {cryptoData.description}
      </Typography>
      <DataTable
        data={statistics}
        subtitle={data.name + ' Statistics'} />
      <LinkTable
        data={externalSource}
        subtitle="Extra Links" />
    </div>
  );
}

DataList.propTypes = {
  data: PropTypes.object.isRequired,
  cryptoData: PropTypes.object,
  statistics: PropTypes.array.isRequired,
  externalSource: PropTypes.array.isRequired
};

export default DataList;
