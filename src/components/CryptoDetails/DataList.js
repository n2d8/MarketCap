import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  root: {
    width: '90%',
    margin: 'auto',
    marginTop: theme.spacing(3)
  },
}));

const DataList = ({ data, general, statistics, externalSource }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography variant="h2" id="aboutTitle">
        {data.name}
      </Typography>
      <p>
        {general.desc}
      </p>
    </div>
  );
}

DataList.propTypes = {
};

export default DataList;
