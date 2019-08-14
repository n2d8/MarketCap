import React from 'react';
import PropTypes from 'prop-types';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import FilterListIcon from '@material-ui/icons/FilterList';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';

const CryptoToolbar = ({classes}) => {
  return (
    <Toolbar>
      <div className={classes.title}>
        <Typography variant="h6" id="title">
          All Cryptocurrencies (USD)
        </Typography>
      </div>
      <div className={classes.spacer} />
      <div className={classes.actions}>
        <Tooltip title="Filter Settings">
          <IconButton aria-label="filter">
            <FilterListIcon />
          </IconButton>
        </Tooltip>
      </div>
    </Toolbar>
  );
}

CryptoToolbar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default CryptoToolbar;
