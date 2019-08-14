import React from 'react';
import PropTypes from 'prop-types';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const CryptoToolbar = ({classes}) => {
  return (
    <Toolbar>
      <div className={classes.title}>
        <Typography variant="h6" id="tableTitle">
          Cryptocurrency Market Cap Overview
        </Typography>
      </div>
      <div className={classes.spacer} />
      <div className={classes.actions}>
      </div>
    </Toolbar>
  );
}

CryptoToolbar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default CryptoToolbar;
