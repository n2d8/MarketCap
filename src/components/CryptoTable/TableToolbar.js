import React from 'react';
import PropTypes from 'prop-types';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import DeleteIcon from '@material-ui/icons/Delete';
import FilterListIcon from '@material-ui/icons/FilterList';
import clsx from 'clsx';

const CryptoToolbar = ({classes, rowSelected}) => {
  return (
    <Toolbar
      className={clsx(classes.root, {
        [classes.highlight]: rowSelected > 0,
      })}
    >
      <div className={classes.title}>
        {rowSelected > 0 ? (
          <Typography color="inherit" variant="subtitle1">
            {rowSelected} selected
          </Typography>
        ) : (
          <Typography variant="h6" id="tableTitle">
            Cryptocurrency Market Cap Overview
          </Typography>
        )}
      </div>
      <div className={classes.spacer} />
      <div className={classes.actions}>
        {rowSelected > 0 ? (
          <Tooltip title="Delete">
            <IconButton aria-label="delete">
              <DeleteIcon />
            </IconButton>
          </Tooltip>
        ) : (
          <Tooltip title="Filter list">
            <IconButton aria-label="filter list">
              <FilterListIcon />
            </IconButton>
          </Tooltip>
        )}
      </div>
    </Toolbar>
  );
}

CryptoToolbar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default CryptoToolbar;
